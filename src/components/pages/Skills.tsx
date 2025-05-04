import { NavbarPlaceholder } from "@/components/layout";
import { SkillsCarousel } from "@/components/ui";
import { JSX } from "react";

export function Skills() {
  return (
    <div className="min-h-screen bg-cyan-100">
      <NavbarPlaceholder />
      <div className="flex h-[calc(100vh-4rem)] w-full flex-col items-center justify-center">
        <div>
          <h1 className="text-center font-great-vibes text-5xl">Skills</h1>
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
