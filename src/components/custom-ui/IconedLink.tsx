import { Link as HerouiLink } from "@heroui/react";

interface IconedLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function IconedLink({
  href,
  children,
  className = "gap-1 text-lg",
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
