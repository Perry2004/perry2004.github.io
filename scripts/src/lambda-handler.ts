import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Context,
} from "aws-lambda";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getImageLinksPlaywright } from "./main";

const s3Client = new S3Client({ region: "us-west-2" });

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

      const jsonData = {
        images: imageLinks,
      };

      const bucketName = "perryz-portfolio-website-usw2dev";
      const key = "website/data/rolling-images.json";

      try {
        console.log(`Uploading JSON to S3: ${bucketName}/${key}`);
        const command = new PutObjectCommand({
          Bucket: bucketName,
          Key: key,
          Body: JSON.stringify(jsonData, null, 4),
          ContentType: "application/json",
        });

        await s3Client.send(command);
        console.log(`Successfully uploaded to S3: ${bucketName}/${key}`);
      } catch (s3Error) {
        console.error(`Error uploading to S3: ${s3Error}`);
        return {
          statusCode: 500,
          body: JSON.stringify({
            success: false,
            error: s3Error instanceof Error ? s3Error.message : String(s3Error),
            message: "Failed to upload to S3",
            image_links: imageLinks,
            total_count: imageLinks.length,
          }),
        };
      }

      return {
        statusCode: 200,
        body: JSON.stringify({
          success: true,
          image_links: imageLinks,
          total_count: imageLinks.length,
          s3_location: `s3://${bucketName}/${key}`,
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
