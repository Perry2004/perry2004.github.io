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

      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {skillsData.map((skill, index) => (
              <div key={index} className="embla__slide">
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
          className={`embla__progress ${
            showAutoplayProgress ? "" : "embla__progress--hidden"
          }`}
        >
          <div className="embla__progress__bar" ref={progressRef} />
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
