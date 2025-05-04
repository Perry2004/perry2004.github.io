import { ReactNode } from "react";

interface ContactInfoItemProps {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}

export function ContactInfoItem({
  icon,
  title,
  children,
}: ContactInfoItemProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-orange-100 text-orange-600">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        {children}
      </div>
    </div>
  );
}
