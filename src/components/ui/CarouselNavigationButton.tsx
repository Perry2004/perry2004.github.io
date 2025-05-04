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
    <button
      className={`z-5 absolute top-1/2 flex h-9 w-9 -translate-y-1/2 cursor-pointer appearance-none items-center justify-center rounded-full border-0 bg-white/80 text-neutral-800 shadow-md transition-all duration-200 ease-in-out hover:bg-white hover:shadow-lg ${
        disabled ? "cursor-default opacity-30" : ""
      } ${direction === "prev" ? "left-[-3rem]" : "right-[-3rem]"}`}
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === "prev" ? "Previous slide" : "Next slide"}
    >
      <svg className="h-[35%] w-[35%]" viewBox="0 0 532 532">
        {direction === "prev" ? (
          <path
            fill="currentColor"
            d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"
          />
        ) : (
          <path
            fill="currentColor"
            d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
          />
        )}
      </svg>
    </button>
  );
}
