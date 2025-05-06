import { NavbarPlaceholder } from "@/components/layout";
import { SkillsCarousel } from "@/components/ui";
import { useDevice } from "@/hooks";
import { JSX } from "react";

export function Skills() {
  const { isDesktop } = useDevice();

  return (
    <div className="gradient-bg-responsive min-h-screen">
      {isDesktop && <NavbarPlaceholder />}
      <div className="flex min-h-[calc(100vh-4rem)] w-full flex-col items-center justify-center px-4 sm:px-6 md:px-8">
        <div className="mb-4 sm:mb-6 md:mb-8">
          <h1 className="gradient-text-responsive mt-2 p-4 pb-0 text-center font-great-vibes text-4xl sm:p-6 sm:text-6xl md:mt-0 md:p-8">
            Skills
          </h1>
          <div className="gradient-divider-responsive mx-auto mt-1 w-24 sm:mt-2 sm:w-28 md:w-32"></div>
        </div>
        <SkillsCarousel />
      </div>
    </div>
  );
}

export interface SkillInfo {
  name: string;
  icon: JSX.Element;
}

export interface SkillCategory {
  name: string;
  icon: JSX.Element;
  skills: SkillInfo[];
}
