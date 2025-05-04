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
    <div>
      <Chip startContent={skill.icon}>{skill.name}</Chip>
    </div>
  );
}
