import { ReactNode } from "react";

interface ContactInfoItemProps {
  icon: ReactNode;
  title: string;
  children: ReactNode;
  iconClass?: string;
}

export function ContactInfoItem({
  icon,
  title,
  children,
  iconClass = "info-icon-gradient-light info-icon-primary-light dark:info-icon-gradient-dark dark:info-icon-primary-dark",
}: ContactInfoItemProps) {
  return (
    <div className="flex items-start gap-4">
      <div className={iconClass}>{icon}</div>
      <div>
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
          {title}
        </h3>
        {children}
      </div>
    </div>
  );
}
