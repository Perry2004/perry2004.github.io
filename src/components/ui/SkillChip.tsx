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
      className="skill-chip-responsive px-3 py-2"
      startContent={
        <div className="skill-icon-responsive mr-2 text-base sm:text-lg">
          {skill.icon}
        </div>
      }
    >
      <span className="text-sm font-medium sm:text-base">{skill.name}</span>
    </Chip>
  );
}
