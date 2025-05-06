import { useEffect, useState } from "react";

export const useDeviceType = () => {
  const [, setWidth] = useState(window.innerWidth);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
      setIsDesktop(newWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { isDesktop };
};
