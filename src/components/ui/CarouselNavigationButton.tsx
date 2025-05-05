import { Button } from "@heroui/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface CarouselNavigationButtonProps {
  direction: "prev" | "next";
  onClick: () => void;
  disabled: boolean;
}

/**
 * The left/right (prev/next) navigation button for the carousel.
 */
export function CarouselNavigationButton({
  direction,
  onClick,
  disabled,
}: CarouselNavigationButtonProps) {
  return (
    <div className="overflow-visible p-2">
      <Button
        className={`z-5 m-2 flex h-9 w-9 appearance-none items-center justify-center rounded-full border-0 bg-white/80 p-0 text-neutral-800 shadow-md transition-all duration-300 ease-in-out hover:scale-110 hover:bg-white hover:shadow-lg ${
          disabled ? "cursor-default opacity-30" : ""
        }`}
        onPress={onClick}
        disabled={disabled}
        aria-label={direction === "prev" ? "Previous slide" : "Next slide"}
        isIconOnly
      >
        {direction === "prev" ? (
          <FaChevronLeft className="h-[35%] w-[35%]" />
        ) : (
          <FaChevronRight className="h-[35%] w-[35%]" />
        )}
      </Button>
    </div>
  );
}
