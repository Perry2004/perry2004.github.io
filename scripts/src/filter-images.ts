#!/usr/bin/env node

import * as fs from "fs";
import * as path from "path";

const SCRIPT_DIR = __dirname;
const WORKSPACE_ROOT = path.resolve(SCRIPT_DIR, "../..");
const INPUT_FILE = path.join(SCRIPT_DIR, "../output/image-urls.json");
const OUTPUT_FILE = path.join(
  WORKSPACE_ROOT,
  "public/data/rolling-images.json",
);

interface RollingImages {
  images: string[];
}

async function filterAndUpdateImages(): Promise<void> {
  try {
    console.log("Reading image URLs from:", INPUT_FILE);

    // Read the input file
    const inputData = fs.readFileSync(INPUT_FILE, "utf-8");
    const allUrls: string[] = JSON.parse(inputData);

    console.log(`Found ${allUrls.length} total URLs`);

    // Filter URLs that contain "pexels-photo-"
    const filteredUrls = allUrls.filter((url) => url.includes("pexels-photo-"));

    console.log(
      `Filtered to ${filteredUrls.length} URLs containing "pexels-photo-"`,
    );

    // Remove duplicates
    const uniqueUrls = filteredUrls.filter(
      (url, index, array) => array.indexOf(url) === index,
    );

    console.log(`After removing duplicates: ${uniqueUrls.length} unique URLs`);

    // Create the output structure
    const rollingImages: RollingImages = {
      images: uniqueUrls,
    };

    // Write to the output file
    fs.writeFileSync(
      OUTPUT_FILE,
      JSON.stringify(rollingImages, null, 2),
      "utf-8",
    );

    console.log(`Successfully updated ${OUTPUT_FILE}`);
    console.log(`Total images saved: ${uniqueUrls.length}`);
  } catch (error) {
    console.error("Error processing images:", error);
    process.exit(1);
  }
}

// Run the script
filterAndUpdateImages();
