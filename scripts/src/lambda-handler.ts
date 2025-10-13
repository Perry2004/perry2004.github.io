import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Context,
} from "aws-lambda";
import { getImageLinksPlaywright } from "./main";

/**
 * Fetches the latest pexels featured image links using Playwright
 */
export async function lambdaHandler(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _event: APIGatewayProxyEvent,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _context: Context,
): Promise<APIGatewayProxyResult> {
  try {
    const pexelsUrl =
      "https://www.pexels.com/@perry-z-1662054943/featured-uploads/";
    const imageLinks = await getImageLinksPlaywright(pexelsUrl);

    if (imageLinks && imageLinks.length > 0) {
      return {
        statusCode: 200,
        body: JSON.stringify({
          success: true,
          image_links: imageLinks,
          total_count: imageLinks.length,
        }),
      };
    } else {
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
