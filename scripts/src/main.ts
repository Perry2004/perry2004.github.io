import { chromium, Page, ElementHandle } from "playwright";
import * as fs from "fs";

interface ImageData {
  images: string[];
}

async function findLoadMoreButton(
  page: Page,
): Promise<ElementHandle<SVGElement | HTMLElement> | null> {
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

                const children = el.querySelectorAll("*");
                for (const child of Array.from(children)) {
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

async function getImageLinksPlaywright(url: string): Promise<string[]> {
  let browser = null;
  try {
    browser = await chromium.launch({
      headless: true,
      args: ["--disable-gpu", "--disable-blink-features=AutomationControlled"],
    });

    const context = await browser.newContext({
      userAgent:
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36",
    });

    const page = await context.newPage();

    console.log("Fetching URL with Playwright...");
    await page.goto(url, {
      waitUntil: "domcontentloaded",
      timeout: 60000,
    });

    await page.waitForTimeout(5000);

    const maxClicks = 5;
    let clickCount = 0;

    while (clickCount < maxClicks) {
      const loadMoreButton = await findLoadMoreButton(page);

      if (loadMoreButton && (await loadMoreButton.isVisible())) {
        try {
          console.log(
            `Found Load More button, clicking... (attempt ${clickCount + 1})`,
          );
          clickCount++;
          await loadMoreButton.click();

          await page.waitForTimeout(2000);
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

    await page.waitForTimeout(2000);

    const imgLinks = await page.evaluate((): string[] => {
      const imgs = Array.from(document.querySelectorAll("img"));
      const links: string[] = [];

      imgs.forEach((img) => {
        const src = img.getAttribute("src") || "";
        if (src.startsWith("https://images.pexels.com/photos/")) {
          links.push(src);
        }
      });

      return links;
    });

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
