import { Link as HerouiLink } from "@heroui/react";

interface IconedLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function IconedLink({
  href,
  children,
  className = "link-colored-responsive gap-1 text-lg dark:text-gray-200",
}: IconedLinkProps) {
  return (
    <HerouiLink
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      {children}
    </HerouiLink>
  );
}
