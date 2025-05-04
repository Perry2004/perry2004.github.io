import { Chip } from "@heroui/react";
import { SkillInfo } from "@/components/pages";

interface SkillChipProps {
  skill: SkillInfo;
}

/**
 * Chip component built on top of the Hero UI's chip component. Displays an icon followed by the skill name.
 * @param param0 - Contains the skill information.
 * @returns JSX element representing the skill chip.
 */
export function SkillChip({ skill }: SkillChipProps) {
  return (
    <Chip
      className="border border-cyan-200 bg-gradient-to-r from-cyan-50 to-blue-50 px-4 py-2.5 text-base text-gray-700 shadow-sm backdrop-blur-sm transition-all duration-300 hover:from-cyan-100 hover:to-blue-100 hover:shadow-md"
      startContent={
        <div className="mr-2 text-lg text-cyan-600">{skill.icon}</div>
      }
    >
      <span className="font-medium">{skill.name}</span>
    </Chip>
  );
}
