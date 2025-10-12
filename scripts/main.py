from fileinput import filename
import sys
import time
import json
from typing import List
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.common.exceptions import StaleElementReferenceException
from chromedriver_autoinstaller import install as install_chromedriver

def find_load_more_button(driver):
    """
    Find the Load More button by searching through all buttons and examining their text content.
    Returns the button element if found, None otherwise.
    """
    try:
        # Find all buttons on the page
        buttons = driver.find_elements(By.TAG_NAME, "button")

        for button in buttons:
            if button and button.is_displayed():
                try:
                    # Get the text content of the button including all nested elements
                    button_text = driver.execute_script("""
                        function getTextContent(element) {
                            // Get text from the element itself
                            let text = element.textContent || element.innerText || '';

                            // Also check all child elements for text
                            const children = element.querySelectorAll('*');
                            for (let child of children) {
                                if (child.textContent) {
                                    text += ' ' + child.textContent;
                                }
                            }

                            return text.trim().toLowerCase();
                        }
                        return getTextContent(arguments[0]);
                    """, button)

                    # Check if the button contains "load more" text
                    if button_text and "load more" in button_text:
                        return button

                except StaleElementReferenceException:
                    continue

        return None

    except Exception as e:
        print(f"Error finding load more button: {e}")
        return None

def get_image_links_selenium(url):
    """
    Crawls a Pexels page using Selenium to fetch the links of all featured images.
    Auto-clicks the "Load More" button if exists to load more images.
    """
    driver = None  # Initialize driver to None
    try:
        # Automatically install and set up chromedriver
        service = Service(install_chromedriver())

        # Set up Chrome options for headless mode 
        options = webdriver.ChromeOptions()
        options.add_argument('--headless')
        options.add_argument('--disable-gpu')
        options.add_argument('user-agent=Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36')

        driver = webdriver.Chrome(service=service, options=options)

        print("Fetching URL with Selenium...")
        driver.get(url)
        # Wait for initial page load
        time.sleep(3)

        max_clicks = 5  # Safety limit to prevent infinite loops
        click_count = 0

        # Try clicking the Load More button 
        while click_count < max_clicks:
            load_more_button = find_load_more_button(driver)

            if load_more_button and load_more_button.is_displayed():
                try:
                    # Click the button
                    print(f"Found Load More button, clicking... (attempt {click_count + 1})")
                    click_count += 1
                    load_more_button.click()

                except (StaleElementReferenceException, Exception) as e:
                    # print(f"Error clicking button: {e}")
                    continue
            else:
                print("No Load More button left to click.")
                break

        print(f"Finished clicking Load More buttons. Total clicks: {click_count}")

        # Wait a bit more to ensure all content is loaded
        time.sleep(2)

        html = driver.page_source
        soup = BeautifulSoup(html, 'html.parser')

        imgs = soup.find_all('img')
        img_links: List[str] = []
        for img in imgs:
            src = img.get('src', '')
            if isinstance(src, str) and src.startswith('https://images.pexels.com/photos/'):
                img_links.append(src)

        processed_img_links: List[str] = []
        for link in img_links:
            processed_link = link.split('?')[0]
            if processed_link not in processed_img_links:
                processed_img_links.append(processed_link)

        return processed_img_links

    except Exception as e:
        print(f"An error occurred: {e}")
        return []
    finally:
        if driver:
            driver.quit()

def save_links_to_json(links: List[str], filename: str):
    """
    Save the list of image links to a JSON file.
    """
    try:
        with open(filename, 'w') as f:
            json.dump({
                "images": links
            }, f, indent=4)
        print(f"Image links saved to {filename}")
    except Exception as e:
        print(f"Error saving links to JSON: {e}")

if __name__ == "__main__":
    pexels_url = "https://www.pexels.com/@perry-z-1662054943/featured-uploads/"
    links = get_image_links_selenium(pexels_url)
    
    if links:
        print("\nFound the following image links:")
        print(json.dumps(links, indent=4))
        print(f"\nTotal image links found: {len(links)}")
        if sys.argv and len(sys.argv) > 1:
            output_filename = sys.argv[1]
            save_links_to_json(links, output_filename)
    else:
        print("\nNo image links were found.")
