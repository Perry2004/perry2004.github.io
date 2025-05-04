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
  iconClass = "bg-orange-100 text-orange-600",
}: ContactInfoItemProps) {
  return (
    <div className="flex items-start gap-4">
      <div
        className={`flex h-10 w-10 flex-none items-center justify-center rounded-full ${iconClass}`}
      >
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        {children}
      </div>
    </div>
  );
}
