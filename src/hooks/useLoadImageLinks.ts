import { useState, useEffect, useMemo } from "react";
import axios from "axios";

/**
 * Custom hook to load image links from a JSON file (/rolling-images.json).
 */
export function useLoadImageLinks() {
  const [images, setImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  // Fetch images from the JSON file
  useEffect(() => {
    axios
      .get("/data/rolling-images.json")
      .then((response) => {
        setImages(response.data.images || []);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error loading rolling images:", error);
        setError(error);
        setIsLoading(false);
      });
  }, []);

  // shuffle
  const shuffledImages = useMemo(() => {
    return [...images].sort(() => Math.random() - 0.5);
  }, [images]);

  return {
    images,
    shuffledImages,
    isLoading,
    error,
  };
}
