import { useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEmblaAutoplayProgress, useEmblaPrevNextButtons } from "@/hooks";
import { skillsData } from "@/assets/skills-details";
import { SkillCategory } from "@/components/pages";
import { CarouselNavigationButton } from "./CarouselNavigationButton";
import { SkillsCard } from "./SkillsCard";

export function SkillsCarousel() {
  const progressRef = useRef<HTMLDivElement>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "center",
      loop: true,
      slidesToScroll: 1,
      containScroll: "trimSnaps",
    },
    [Autoplay({ delay: 4000, stopOnInteraction: false })],
  );

  const { showAutoplayProgress, resetProgress } = useEmblaAutoplayProgress(
    emblaApi,
    progressRef as React.RefObject<HTMLElement>,
  );

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = useEmblaPrevNextButtons(emblaApi, undefined, resetProgress);

  return (
    <div className="relative w-full max-w-6xl overflow-hidden px-4">
      <div
        className="relative mx-auto"
        style={
          {
            "--slide-spacing": "1rem",
            "--slide-size": "70%",
            "--slide-height": "19rem",
          } as React.CSSProperties
        }
      >
        <div className="overflow-hidden py-6" ref={emblaRef}>
          <div className="backface-hidden flex touch-pan-y touch-pinch-zoom">
            {skillsData.map((skillCategory: SkillCategory, index) => (
              <div
                key={index}
                className="relative min-w-0 flex-[0_0_var(--slide-size)] p-3 pl-[var(--slide-spacing)] sm:flex-[0_0_100%] md:flex-[0_0_50%]"
              >
                <SkillsCard skillCategory={skillCategory} />
              </div>
            ))}
          </div>
        </div>

        {/* Controls container with progress bar and navigation buttons */}
        <div className="mt-6 flex items-center justify-center gap-4">
          {/* Prev button now positioned inline */}
          <CarouselNavigationButton
            direction="prev"
            onClick={onPrevButtonClick}
            disabled={prevBtnDisabled}
          />

          {/* Progress bar */}
          <div
            className={`relative h-[0.3rem] w-full max-w-[20rem] overflow-hidden rounded-[0.3rem] bg-black/10 ${
              showAutoplayProgress
                ? ""
                : "opacity-0 transition-opacity duration-300"
            }`}
          >
            <div
              className="animate-autoplay-progress absolute bottom-0 left-[-100%] top-0 w-full bg-gradient-to-r from-cyan-600 to-blue-600"
              ref={progressRef}
            />
          </div>

          {/* Next button now positioned inline */}
          <CarouselNavigationButton
            direction="next"
            onClick={onNextButtonClick}
            disabled={nextBtnDisabled}
          />
        </div>
      </div>
    </div>
  );
}
