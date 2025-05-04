import { NavbarPlaceholder } from "@/components/layout";
import { SkillsCarousel } from "@/components/ui";
import { JSX } from "react";

export function Skills() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#5ad6ff]/30 via-white to-[#fb9ac7]/30">
      <NavbarPlaceholder />
      <div className="flex h-[calc(100vh-4rem)] w-full flex-col items-center justify-center">
        <div className="mb-8">
          <h1 className="bg-gradient-to-r from-[#5ad6ff] to-[#fb9ac7] bg-clip-text text-center font-great-vibes text-5xl leading-normal text-transparent">
            Skills
          </h1>
          <div className="mx-auto mt-2 h-1 w-32 rounded-full bg-gradient-to-r from-[#5ad6ff] to-[#fb9ac7]"></div>
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
