import { Chip } from "@heroui/react";
import { SkillInfo } from "@/components/pages";

interface SkillChipProps {
  skill: SkillInfo;
}

/**
 * Chip component built on top of the Hero UI's chip component. Displays an icon followed by the skill name.
 * The icon animates on hover with a scrolling/rotating effect.
 * @param param0 - Contains the skill information.
 * @returns JSX element representing the skill chip.
 */
export function SkillChip({ skill }: SkillChipProps) {
  return (
    <Chip
      className="skill-chip-responsive group px-5 py-3 hover:cursor-pointer"
      startContent={
        <div className="skill-icon-responsive mr-3 text-lg transition-transform duration-300 ease-in-out group-hover:animate-spin-slow sm:text-2xl">
          {skill.icon}
        </div>
      }
    >
      <span className="text-base font-medium sm:text-xl">{skill.name}</span>
    </Chip>
  );
}
