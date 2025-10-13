import sys
import os

sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from main import get_image_links_selenium

def lambda_handler(event, context):
    """
    Fetches the latest pexels featured image links using Selenium
    """
    try:
        pexels_url = "https://www.pexels.com/@perry-z-1662054943/featured-uploads/"
        image_links = get_image_links_selenium(pexels_url)

        if image_links:
            return {
                'statusCode': 200,
                'body': {
                    'success': True,
                    'image_links': image_links,
                    'total_count': len(image_links)
                }
            }
        else:
            return {
                'statusCode': 200,
                'body': {
                    'success': False,
                    'message': 'No image links found',
                    'image_links': [],
                    'total_count': 0
                }
            }

    except Exception as e:
        return {
            'statusCode': 500,
            'body': {
                'success': False,
                'error': str(e),
                'image_links': [],
                'total_count': 0
            }
        }
