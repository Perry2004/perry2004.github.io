import { Card, CardBody } from "@heroui/react";
import { SkillCategory } from "@/components/pages";
import { SkillChip } from "./SkillChip";

interface SkillsCardProps {
  skillCategory: SkillCategory;
}

export function SkillsCard({ skillCategory }: SkillsCardProps) {
  return (
    <Card className="h-full transform-gpu transition-all duration-500 hover:scale-[1.03]">
      <CardBody className="relative overflow-hidden rounded-xl border border-cyan-100 bg-gradient-to-br from-white via-cyan-50 to-blue-50 p-10 shadow-lg hover:shadow-xl dark:border-cyan-900/30 dark:from-cyan-900 dark:via-indigo-800/50 dark:to-fuchsia-950 dark:shadow-md dark:hover:shadow-lg">
        <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-cyan-100/30 blur-xl transition-all duration-700 hover:bg-cyan-200/40 dark:bg-cyan-800/20 dark:hover:bg-cyan-700/30"></div>
        <div className="absolute -bottom-16 -left-10 h-48 w-48 rounded-full bg-blue-100/30 blur-xl transition-all duration-700 hover:bg-blue-200/40 dark:bg-blue-800/20 dark:hover:bg-blue-700/30"></div>

        <div className="relative">
          <div className="group mb-8 flex items-center">
            <span className="group-hover:animate-spin-slow mr-5 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 p-3.5 text-2xl text-white shadow-md transition-all duration-500 hover:from-blue-500 hover:to-cyan-500 hover:shadow-lg hover:shadow-cyan-200/20 dark:from-cyan-500 dark:to-pink-600 dark:shadow-cyan-700/20 dark:hover:from-pink-600 dark:hover:to-cyan-500 dark:hover:shadow-cyan-500/30 sm:text-3xl">
              {skillCategory.icon}
            </span>
            <h3 className="text-2xl font-bold tracking-tight text-gray-800 dark:text-gray-100 sm:text-3xl">
              {skillCategory.name}
            </h3>
          </div>
          <div className="flex flex-row flex-wrap gap-4">
            {skillCategory.skills.map((subSkill, subIndex) => (
              <div
                key={subIndex}
                className="transition-all duration-300 hover:translate-y-[-4px] hover:scale-105"
              >
                <SkillChip skill={subSkill} />
              </div>
            ))}
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
