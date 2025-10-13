import { chromium as playwright, Page, ElementHandle } from "playwright";
import chromium from "@sparticuz/chromium";
import * as fs from "fs";

interface ImageData {
  images: string[];
}

/**
 * Find the Load More button by searching through all buttons and examining their text content.
 * Returns the button element if found, null otherwise.
 */
async function findLoadMoreButton(page: Page): Promise<ElementHandle | null> {
  try {
    const buttons = await page.$$("button");

    for (const button of buttons) {
      if (await button.isVisible()) {
        try {
          const buttonText = await button.evaluate(
            (element: Element): string => {
              function getTextContent(el: Element): string {
                let text =
                  el.textContent || (el as HTMLElement).innerText || "";

                // Also check all child elements for text
                const children = Array.from(el.querySelectorAll("*"));
                for (const child of children) {
                  if (child.textContent) {
                    text += " " + child.textContent;
                  }
                }

                return text.trim().toLowerCase();
              }
              return getTextContent(element);
            },
          );

          if (buttonText && buttonText.includes("load more")) {
            return button;
          }
        } catch {
          continue;
        }
      }
    }

    return null;
  } catch (error) {
    console.error(`Error finding load more button: ${error}`);
    return null;
  }
}

/**
 * Crawls a Pexels page using Playwright to fetch the links of all featured images.
 * Auto-clicks the "Load More" button if exists to load more images.
 */
async function getImageLinksPlaywright(url: string): Promise<string[]> {
  let browser = null;
  try {
    // Launch browser in headless mode
    browser = await playwright.launch({
      args: chromium.args,
      executablePath: await chromium.executablePath(),
    });

    const context = await browser.newContext();

    const page = await context.newPage();

    console.log("Fetching URL with Playwright...");
    await page.goto(url, {
      waitUntil: "domcontentloaded",
      timeout: 60000,
    });

    console.log("Waiting for image grid to be visible...");
    await page.waitForSelector(
      'img[src^="https://images.pexels.com/photos/"]',
      {
        state: "visible",
        timeout: 60000,
      },
    );
    console.log("Page content is ready.");

    const maxClicks = 5;
    let clickCount = 0;

    // Try clicking the Load More button
    while (clickCount < maxClicks) {
      const loadMoreButton = await findLoadMoreButton(page);

      if (loadMoreButton && (await loadMoreButton.isVisible())) {
        try {
          console.log(
            `Found Load More button, clicking... (attempt ${clickCount + 1})`,
          );
          clickCount++;
          await loadMoreButton.click();
          await page.waitForTimeout(5000);
          console.log("New content loaded after clicking Load More.");
        } catch (error) {
          console.error(`Error clicking button: ${error}`);
          break;
        }
      } else {
        console.log("No Load More button left to click.");
        break;
      }
    }

    console.log(
      `Finished clicking Load More buttons. Total clicks: ${clickCount}`,
    );

    // Extract image links
    const imgLinks = await page.evaluate((): string[] => {
      const imgs = Array.from(document.querySelectorAll("img"));
      console.log(`Total images found on page: ${imgs.length}`);
      const links: string[] = [];

      imgs.forEach((img) => {
        const src = img.getAttribute("src") || "";
        if (src.startsWith("https://images.pexels.com/photos/")) {
          links.push(src);
        }
      });

      return links;
    });

    // Process links to remove duplicates and query parameters
    const processedImgLinks: string[] = [];
    for (const link of imgLinks) {
      const processedLink = link.split("?")[0];
      if (!processedImgLinks.includes(processedLink)) {
        processedImgLinks.push(processedLink);
      }
    }

    return processedImgLinks;
  } catch (error) {
    console.error(`An error occurred: ${error}`);
    return [];
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

/**
 * Save the list of image links to a JSON file.
 */
function saveLinksToJson(links: string[], filename: string): void {
  try {
    const data: ImageData = {
      images: links,
    };

    fs.writeFileSync(filename, JSON.stringify(data, null, 4));
    console.log(`Image links saved to ${filename}`);
  } catch (error) {
    console.error(`Error saving links to JSON: ${error}`);
  }
}

async function main(): Promise<void> {
  const pexelsUrl =
    "https://www.pexels.com/@perry-z-1662054943/featured-uploads/";
  const links = await getImageLinksPlaywright(pexelsUrl);

  if (links && links.length > 0) {
    console.log("\nFound the following image links:");
    console.log(JSON.stringify(links, null, 4));
    console.log(`\nTotal image links found: ${links.length}`);

    // If output filename is provided as command line argument
    if (process.argv.length > 2) {
      const outputFilename = process.argv[2];
      saveLinksToJson(links, outputFilename);
    }
  } else {
    console.log("\nNo image links were found.");
  }
}

if (require.main === module) {
  main().catch(console.error);
}

export { getImageLinksPlaywright, saveLinksToJson, findLoadMoreButton };
