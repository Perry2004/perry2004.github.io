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
      className="skill-chip-responsive"
      startContent={<div className="skill-icon-responsive">{skill.icon}</div>}
    >
      <span className="font-medium">{skill.name}</span>
    </Chip>
  );
}
