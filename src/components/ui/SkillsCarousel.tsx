import { useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardBody } from "@heroui/react";
import { useEmblaAutoplayProgress, useEmblaPrevNextButtons } from "@/hooks";
import { skillsData } from "@/assets/skills-details";
import { SkillInfo } from "@/components/pages";
import { CarouselNavigationButton } from "./CarouselNavigationButton";
import { SkillChip } from "./SkillChip";

/**
 * Recursively get all sub-skills of a given skill.
 * @param skill The skill to get sub-skills from
 */
function getAllSubskills(skill: SkillInfo): SkillInfo[] {
  const subSkills: SkillInfo[] = [];
  function getSubskillsRecursively(skill: SkillInfo): SkillInfo[] {
    subSkills.push(...skill.subSkills);
    skill.subSkills.forEach(getSubskillsRecursively);
    return subSkills;
  }
  getSubskillsRecursively(skill);
  return subSkills;
}

export function SkillsCarousel() {
  const progressRef = useRef<HTMLDivElement>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "center",
      loop: true,
      slidesToScroll: 1,
    },
    [Autoplay({ delay: 4000, stopOnInteraction: false })],
  );

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = useEmblaPrevNextButtons(emblaApi);

  const { showAutoplayProgress } = useEmblaAutoplayProgress(
    emblaApi,
    progressRef as React.RefObject<HTMLElement>,
  );

  return (
    <div className="relative w-4/5 max-w-6xl">
      {/* prev button */}
      <CarouselNavigationButton
        direction="prev"
        onClick={onPrevButtonClick}
        disabled={prevBtnDisabled}
      />

      <div
        className="relative mx-auto max-w-3xl overflow-hidden"
        style={
          {
            "--slide-spacing": "1rem",
            "--slide-size": "70%",
            "--slide-height": "19rem",
          } as React.CSSProperties
        }
      >
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="backface-hidden -ml-[var(--slide-spacing)] flex touch-pan-y touch-pinch-zoom">
            {skillsData.map((skill, index) => (
              <div
                key={index}
                className="relative min-w-0 flex-[0_0_var(--slide-size)] pl-[var(--slide-spacing)] sm:flex-[0_0_100%] md:flex-[0_0_50%]"
              >
                <Card className="h-full">
                  <CardBody className="p-4">
                    <SkillChip skill={skill} />
                    <div className="mt-4 space-y-2">
                      {getAllSubskills(skill).map((subSkill, subIndex) => (
                        <div key={subIndex} className="ml-4">
                          <SkillChip skill={subSkill} />
                        </div>
                      ))}
                    </div>
                  </CardBody>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`relative mx-auto mt-4 h-[0.3rem] w-full max-w-[30rem] overflow-hidden rounded-[0.3rem] bg-black/10 ${
            showAutoplayProgress
              ? ""
              : "opacity-0 transition-opacity duration-300"
          }`}
        >
          <div
            className="animate-autoplay-progress absolute bottom-0 left-[-100%] top-0 w-full bg-neutral-800"
            ref={progressRef}
          />
        </div>
      </div>

      {/* next button */}
      <CarouselNavigationButton
        direction="next"
        onClick={onNextButtonClick}
        disabled={nextBtnDisabled}
      />
    </div>
  );
}
