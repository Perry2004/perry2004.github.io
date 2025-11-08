import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Context,
} from "aws-lambda";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import {
  CloudFrontClient,
  CreateInvalidationCommand,
} from "@aws-sdk/client-cloudfront";
import { getImageLinksPlaywright } from "./main";

const s3Client = new S3Client({ region: "us-west-2" });
const cloudfrontClient = new CloudFrontClient({ region: "us-west-2" });

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

      const BUCKET_NAME = process.env.S3_BUCKET_NAME;
      const CLOUDFRONT_DISTRIBUTION_ID = process.env.CLOUDFRONT_DISTRIBUTION_ID;
      const key = "website/data/rolling-images.json";

      if (!BUCKET_NAME) {
        console.error("Missing required environment variable: S3_BUCKET_NAME");
        return {
          statusCode: 500,
          body: JSON.stringify({
            success: false,
            error: "Missing S3 configuration",
            message: "S3_BUCKET_NAME environment variable is required",
            image_links: imageLinks,
            total_count: imageLinks.length,
          }),
        };
      }

      if (!CLOUDFRONT_DISTRIBUTION_ID) {
        console.error(
          "Missing required environment variable: CLOUDFRONT_DISTRIBUTION_ID",
        );
        return {
          statusCode: 500,
          body: JSON.stringify({
            success: false,
            error: "Missing CloudFront configuration",
            message:
              "CLOUDFRONT_DISTRIBUTION_ID environment variable is required",
            image_links: imageLinks,
            total_count: imageLinks.length,
          }),
        };
      }

      try {
        console.log(`Uploading JSON to S3: ${BUCKET_NAME}/${key}`);
        const command = new PutObjectCommand({
          Bucket: BUCKET_NAME,
          Key: key,
          Body: JSON.stringify(jsonData, null, 4),
          ContentType: "application/json",
        });

        await s3Client.send(command);
        console.log(`Successfully uploaded to S3: ${BUCKET_NAME}/${key}`);
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

      // Invalidate CloudFront cache for the updated file
      let invalidationId = null;
      try {
        console.log(
          `Creating CloudFront invalidation for distribution: ${CLOUDFRONT_DISTRIBUTION_ID}`,
        );
        const invalidationCommand = new CreateInvalidationCommand({
          DistributionId: CLOUDFRONT_DISTRIBUTION_ID,
          InvalidationBatch: {
            CallerReference: `lambda-${Date.now()}`,
            Paths: {
              Quantity: 1,
              Items: [`/${key.replace("website/", "")}`],
            },
          },
        });

        const invalidationResponse =
          await cloudfrontClient.send(invalidationCommand);
        invalidationId = invalidationResponse.Invalidation?.Id;
        console.log(
          `CloudFront invalidation created successfully: ${invalidationId}`,
        );
      } catch (cfError) {
        console.error(`Error creating CloudFront invalidation: ${cfError}`);
        return {
          statusCode: 500,
          body: JSON.stringify({
            success: false,
            error: cfError instanceof Error ? cfError.message : String(cfError),
            message: "Failed to invalidate CloudFront cache",
            image_links: imageLinks,
            total_count: imageLinks.length,
            s3_location: `s3://${BUCKET_NAME}/${key}`,
          }),
        };
      }

      return {
        statusCode: 200,
        body: JSON.stringify({
          success: true,
          image_links: imageLinks,
          total_count: imageLinks.length,
          s3_location: `s3://${BUCKET_NAME}/${key}`,
          cloudfront_invalidation_id: invalidationId,
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
