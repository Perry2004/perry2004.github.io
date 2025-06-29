import puppeteer, { Page } from "puppeteer";
import * as fs from "fs-extra";
import * as path from "path";

interface ImageData {
  url: string;
  alt?: string;
  width?: number;
  height?: number;
  photographer?: string;
}

interface CrawlResult {
  timestamp: string;
  sourceUrl: string;
  totalImages: number;
  images: ImageData[];
}

class PexelsCrawler {
  private readonly targetUrl =
    "https://www.pexels.com/@perry-z-1662054943/featured-uploads/";
  private readonly outputDir = "./output";
  private readonly outputFile = "pexels-images.json";

  constructor() {
    // Ensure output directory exists
    fs.ensureDirSync(this.outputDir);
  }

  async crawl(): Promise<CrawlResult> {
    console.log("🚀 Starting Pexels crawler...");
    console.log(`📍 Target URL: ${this.targetUrl}`);

    const browser = await puppeteer.launch({
      headless: true,
      executablePath: "/usr/bin/chromium",
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-dev-shm-usage",
        "--disable-accelerated-2d-canvas",
        "--no-first-run",
        "--no-zygote",
        "--single-process",
        "--disable-gpu",
        "--disable-background-timer-throttling",
        "--disable-backgrounding-occluded-windows",
        "--disable-renderer-backgrounding",
      ],
    });

    try {
      const page = await browser.newPage();

      // Set user agent to avoid detection
      await page.setUserAgent(
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
      );

      // Set viewport
      await page.setViewport({ width: 1920, height: 1080 });

      console.log("📄 Loading page...");
      await page.goto(this.targetUrl, {
        waitUntil: "networkidle2",
        timeout: 30000,
      });

      // Wait for images to load
      await new Promise((resolve) => setTimeout(resolve, 3000));

      // Scroll to load more images (Pexels uses lazy loading)
      console.log("📜 Scrolling to load all images...");
      await this.autoScroll(page);

      console.log("🔍 Extracting image data...");
      const images = await this.extractImageData(page);

      const result: CrawlResult = {
        timestamp: new Date().toISOString(),
        sourceUrl: this.targetUrl,
        totalImages: images.length,
        images,
      };

      await this.saveResults(result);

      console.log(`✅ Successfully crawled ${images.length} images`);
      return result;
    } catch (error) {
      console.error("❌ Error during crawling:", error);
      throw error;
    } finally {
      await browser.close();
    }
  }

  private async autoScroll(page: Page): Promise<void> {
    await page.evaluate(() => {
      return new Promise<void>((resolve) => {
        let totalHeight = 0;
        const distance = 100;
        const timer = setInterval(() => {
          const scrollHeight = document.body.scrollHeight;
          window.scrollBy(0, distance);
          totalHeight += distance;

          if (totalHeight >= scrollHeight - window.innerHeight) {
            clearInterval(timer);
            resolve();
          }
        }, 100);
      });
    });

    // Wait a bit more for lazy-loaded content
    await new Promise((resolve) => setTimeout(resolve, 2000));
  }

  private async extractImageData(page: Page): Promise<ImageData[]> {
    return await page.evaluate(() => {
      const images: ImageData[] = [];

      // Pexels typically uses these selectors for images
      const imageSelectors = [
        'img[src*="pexels.com"]',
        'img[data-src*="pexels.com"]',
        'img[srcset*="pexels.com"]',
        ".photo-item img",
        ".photo img",
        '[data-testid="photo"] img',
        "article img",
      ];

      const foundImages = new Set<string>();

      imageSelectors.forEach((selector) => {
        const elements = document.querySelectorAll(selector);

        elements.forEach((img) => {
          if (img instanceof HTMLImageElement) {
            // Get the highest quality image URL
            let imageUrl = "";

            // Check different sources for the image URL
            if (img.src && img.src.includes("pexels.com")) {
              imageUrl = img.src;
            } else if (
              img.dataset.src &&
              img.dataset.src.includes("pexels.com")
            ) {
              imageUrl = img.dataset.src;
            } else if (img.srcset) {
              // Extract the highest resolution from srcset
              const srcsetUrls = img.srcset.split(",").map((s) => s.trim());
              const pexelsUrls = srcsetUrls.filter((url) =>
                url.includes("pexels.com"),
              );
              if (pexelsUrls.length > 0) {
                // Get the last (usually highest resolution) URL
                imageUrl = pexelsUrls[pexelsUrls.length - 1].split(" ")[0];
              }
            }

            // Clean up URL and remove size parameters to get original
            if (imageUrl && !foundImages.has(imageUrl)) {
              // Remove size parameters to get the original image
              imageUrl = imageUrl.replace(/\?.*$/, ""); // Remove query parameters
              imageUrl = imageUrl.replace(/-\d+x\d+\./, "."); // Remove size from filename

              foundImages.add(imageUrl);

              images.push({
                url: imageUrl,
                alt: img.alt || "",
                width: img.naturalWidth || img.width,
                height: img.naturalHeight || img.height,
                photographer: "Perry Z", // Since this is a specific photographer's page
              });
            }
          }
        });
      });

      return images;
    });
  }

  private async saveResults(result: CrawlResult): Promise<void> {
    const outputPath = path.join(this.outputDir, this.outputFile);

    console.log(`💾 Saving results to: ${outputPath}`);
    await fs.writeJSON(outputPath, result, { spaces: 2 });

    // Also save a simplified version with just URLs
    const urlsOnly = result.images.map((img) => img.url);
    const urlsPath = path.join(this.outputDir, "image-urls.json");
    await fs.writeJSON(urlsPath, urlsOnly, { spaces: 2 });

    console.log(`📋 URL list saved to: ${urlsPath}`);
  }
}

// Main execution
async function main() {
  try {
    const crawler = new PexelsCrawler();
    const result = await crawler.crawl();

    console.log("\n📊 Crawl Summary:");
    console.log(`   Total images found: ${result.totalImages}`);
    console.log(`   Timestamp: ${result.timestamp}`);
    console.log(`   Source: ${result.sourceUrl}`);
  } catch (error) {
    console.error("Fatal error:", error);
    process.exit(1);
  }
}

// Run if this file is executed directly
if (require.main === module) {
  main();
}

export { PexelsCrawler, ImageData, CrawlResult };
