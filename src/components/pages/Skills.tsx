import { NavbarPlaceholder } from "@/components/layout";
import { SkillsCarousel } from "@/components/ui";
import { JSX } from "react";

export function Skills() {
  return (
    <div className="min-h-screen bg-cyan-100">
      <NavbarPlaceholder />
      <div className="flex h-[calc(100vh-4rem)] w-full items-center justify-center">
        <SkillsCarousel />
      </div>
    </div>
  );
}

export interface SkillInfo {
  name: string;
  icon: JSX.Element;
  subSkills: SkillInfo[];
}
