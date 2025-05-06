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
    <div className="flex items-start gap-5">
      <div className={`${iconClass} h-10 w-10 sm:h-12 sm:w-12`}>{icon}</div>
      <div>
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 sm:text-2xl">
          {title}
        </h3>
        {children}
      </div>
    </div>
  );
}
