import { NavbarPlaceholder } from "@/components/layout";
import { SkillsCarousel } from "@/components/ui";
import { JSX } from "react";

export function Skills() {
  return (
    <div className="gradient-bg-responsive min-h-screen">
      <NavbarPlaceholder />
      <div className="flex h-[calc(100vh-4rem)] w-full flex-col items-center justify-center">
        <div className="mb-8">
          <h1 className="gradient-text-responsive text-center font-great-vibes text-5xl leading-normal">
            Skills
          </h1>
          <div className="gradient-divider-responsive mx-auto mt-2 w-32"></div>
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
