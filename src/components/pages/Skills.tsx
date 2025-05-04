import { NavbarPlaceholder } from "@/components/layout";
import { Card, CardBody, Chip } from "@heroui/react";
import { useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEmblaAutoplayProgress, useEmblaPrevNextButtons } from "@/hooks";
import { skillsData, SkillInfo } from "@/assets/skills-details";

export function Skills() {
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
    <div className="min-h-screen bg-cyan-100">
      <NavbarPlaceholder />
      <div className="flex h-[calc(100vh-4rem)] w-full items-center justify-center">
        <div className="relative w-4/5 max-w-6xl">
          {/* Left button (positioned outside) */}
          <button
            className="embla__button embla__button--prev"
            onClick={onPrevButtonClick}
            disabled={prevBtnDisabled}
            aria-label="Previous slide"
          >
            <svg className="embla__button__svg" viewBox="0 0 532 532">
              <path
                fill="currentColor"
                d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"
              />
            </svg>
          </button>

          <div className="embla">
            {/* Carousel viewport */}
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

            {/* Native Embla progress bar */}
            <div
              className={`embla__progress ${
                showAutoplayProgress ? "" : "embla__progress--hidden"
              }`}
            >
              <div className="embla__progress__bar" ref={progressRef} />
            </div>
          </div>

          {/* Right button (positioned outside) */}
          <button
            className="embla__button embla__button--next"
            onClick={onNextButtonClick}
            disabled={nextBtnDisabled}
            aria-label="Next slide"
          >
            <svg className="embla__button__svg" viewBox="0 0 532 532">
              <path
                fill="currentColor"
                d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

/**
 * Recursively get all sub-skills of a given skill.
 * @param skill
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

function SkillChip({ skill }: { skill: SkillInfo }) {
  return (
    <div>
      <Chip startContent={skill.icon}>{skill.name}</Chip>
    </div>
  );
}
