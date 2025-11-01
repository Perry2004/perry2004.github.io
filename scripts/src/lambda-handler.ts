import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Context,
} from "aws-lambda";
import { getImageLinksPlaywright } from "./main";

/**
 * Fetches the latest pexels featured image links using Playwright
 */
export async function handler(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _event: APIGatewayProxyEvent,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _context: Context,
): Promise<APIGatewayProxyResult> {
  console.log("Lambda handler started");
  try {
    const pexelsUrl =
      "https://www.pexels.com/@perry-z-1662054943/featured-uploads/";
    console.log(`Fetching images from: ${pexelsUrl}`);
    const imageLinks = await getImageLinksPlaywright(pexelsUrl);

    if (imageLinks && imageLinks.length > 0) {
      console.log(`Total image links found: ${imageLinks.length}`);
      return {
        statusCode: 200,
        body: JSON.stringify({
          success: true,
          image_links: imageLinks,
          total_count: imageLinks.length,
        }),
      };
    } else {
      console.log("No image links found");
      return {
        statusCode: 200,
        body: JSON.stringify({
          success: false,
          message: "No image links found",
          image_links: [],
          total_count: 0,
        }),
      };
    }
  } catch (error) {
    console.error(`Error in lambdaHandler: ${error}`);
    if (error instanceof Error) {
      console.error(`Error message: ${error.message}`);
      console.error(`Error stack: ${error.stack}`);
    }
    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : String(error),
        image_links: [],
        total_count: 0,
      }),
    };
  }
}
