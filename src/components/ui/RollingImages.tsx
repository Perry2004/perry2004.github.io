export function RollingImages() {
  const rollingImages = [
    "https://images.pexels.com/photos/28797087/pexels-photo-28797087/free-photo-of-autumn-maple-leaves-illuminated-by-street-lamp.jpeg",
    "https://images.pexels.com/photos/28797085/pexels-photo-28797085/free-photo-of-vibrant-autumn-foliage-in-a-dense-forest-setting.jpeg",
    "https://images.pexels.com/photos/28797083/pexels-photo-28797083/free-photo-of-vibrant-green-leaves-in-tranquil-forest-setting.jpeg",
    "https://images.pexels.com/photos/28797082/pexels-photo-28797082/free-photo-of-serene-forest-waterfall-in-lush-greenery.jpeg",
    "https://images.pexels.com/photos/28797080/pexels-photo-28797080/free-photo-of-vibrant-green-and-red-maple-leaves-in-autumn.jpeg",
    "https://images.pexels.com/photos/28797079/pexels-photo-28797079/free-photo-of-vibrant-autumn-japanese-maple-leaves-in-nature.jpeg",
    "https://images.pexels.com/photos/28797076/pexels-photo-28797076/free-photo-of-gray-squirrel-eating-on-green-grass.jpeg",
    "https://images.pexels.com/photos/28797071/pexels-photo-28797071/free-photo-of-modern-building-with-autumn-ivy-facade.jpeg",
    "https://images.pexels.com/photos/28707412/pexels-photo-28707412/free-photo-of-seagull-eating-pastry-on-green-grass-lawn.jpeg",
    "https://images.pexels.com/photos/28687366/pexels-photo-28687366/free-photo-of-fresh-seafood-display-at-local-market.jpeg",
    "https://images.pexels.com/photos/30422639/pexels-photo-30422639/free-photo-of-vibrant-pink-flower-in-sunlit-garden.jpeg",
    "https://images.pexels.com/photos/30422637/pexels-photo-30422637/free-photo-of-cluster-of-green-cacti-in-a-desert-setting.jpeg",
    "https://images.pexels.com/photos/30422636/pexels-photo-30422636/free-photo-of-serene-bonsai-tree-in-natural-outdoor-setting.jpeg",
    "https://images.pexels.com/photos/30565224/pexels-photo-30565224/free-photo-of-winter-wonderland-with-environmental-message.jpeg",
    "https://images.pexels.com/photos/30565221/pexels-photo-30565221/free-photo-of-snow-covered-roses-in-winter-scene.jpeg",
    "https://images.pexels.com/photos/30565220/pexels-photo-30565220/free-photo-of-snow-covered-bench-in-a-winter-park.jpeg",
  ];
  return (
    <div className="relative h-52 overflow-hidden whitespace-nowrap bg-pink-200">
      {[0, 1].map((index) => {
        return (
          <div
            className="animate-scroll inline-flex h-full w-max whitespace-nowrap"
            key={index}
          >
            {rollingImages.map((imageUrl, imgIndex) => {
              return <img src={imageUrl} key={imgIndex} className="mx-5" />;
            })}
          </div>
        );
      })}
    </div>
  );
}

/**
 * Convert the Pexels image URL to the description page URL
 * @param imageUrl A `string` of the Pexels image URL
 * @returns A `string` of the Pexels image URL in description page
 */
function convertPexelsUrl(imageUrl: string): string {
  const regex =
    /https:\/\/images\.pexels\.com\/photos\/(\d+)\/[^\/]+\/([^\/]+)\.jpeg/;
  const match = imageUrl.match(regex);

  if (match) {
    const photoId = match[1]; // Extract the photo ID
    const photoSlug = match[2]; // Extract the photo slug
    return `https://www.pexels.com/photo/${photoSlug}-${photoId}/`; // Construct the new URL
  } else {
    // Return an error message if the URL doesn't match the expected pattern
    return "Invalid Pexels image URL";
  }
}
