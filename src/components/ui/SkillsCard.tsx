import { Card, CardBody } from "@heroui/react";
import { SkillCategory } from "@/components/pages";
import { SkillChip } from "./SkillChip";

interface SkillsCardProps {
  skillCategory: SkillCategory;
}

export function SkillsCard({ skillCategory }: SkillsCardProps) {
  return (
    <Card className="h-full transform-gpu transition-all duration-500 hover:scale-[1.03]">
      <CardBody className="relative overflow-hidden rounded-xl border border-cyan-100 bg-gradient-to-br from-white via-cyan-50 to-blue-50 p-8 shadow-lg hover:shadow-xl">
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-100/30 blur-xl"></div>
        <div className="absolute -bottom-16 -left-10 h-40 w-40 rounded-full bg-blue-100/30 blur-xl"></div>

        <div className="relative">
          <div className="mb-6 flex items-center">
            <span className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 p-2.5 text-2xl text-white shadow-md">
              {skillCategory.icon}
            </span>
            <h3 className="text-2xl font-bold tracking-tight text-gray-800">
              {skillCategory.name}
            </h3>
          </div>
          <div className="flex flex-row flex-wrap gap-3">
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
