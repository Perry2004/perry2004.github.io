import { Button, Link } from "@heroui/react";
import { SiGithub, SiLinkedin, SiInstagram, SiPexels } from "react-icons/si";
import { NavbarPlaceholder } from "@/components/layout";
import { RollingImages } from "@/components/ui";
import Iridescence from "@/blocks/Backgrounds/Iridescence/Iridescence";
import { useTheme } from "@/hooks";

interface SocialMediaLink {
  text: string;
  href: string;
  icon: React.ReactNode;
}

const socialMediaLinks: SocialMediaLink[] = [
  {
    text: "GitHub",
    href: "https://github.com/Perry2004",
    icon: <SiGithub />,
  },
  {
    text: "LinkedIn",
    href: "https://www.linkedin.com/in/perry-z/",
    icon: <SiLinkedin />,
  },
  {
    text: "Instagram",
    href: "https://www.instagram.com/perryzhu2004/",
    icon: <SiInstagram />,
  },
  {
    text: "Pexels",
    href: "https://www.pexels.com/@perry-z-1662054943/",
    icon: <SiPexels />,
  },
];
export function Home() {
  const { resolvedTheme } = useTheme();
  return (
    <div className="gradient-bg-responsive relative flex min-h-screen flex-col justify-evenly overflow-hidden">
      <div className="absolute z-10 h-full w-full">
        <Iridescence
          color={resolvedTheme === "light" ? [0.9, 0.9, 0.9] : [0.4, 0.4, 0.4]}
          key={resolvedTheme}
          mouseReact={false}
          speed={0.3}
        />
      </div>
      <NavbarPlaceholder />

      <div className="relative z-10 ml-48 w-1/2">
        <div className="relative">
          <h1 className="gradient-text-responsive font-great-vibes text-6xl font-bold leading-normal">
            Hello World!
          </h1>
          <div className="gradient-divider-responsive mb-3 w-40"></div>
        </div>

        <p className="rounded-lg border border-[#5ad6ff]/30 bg-white/40 p-3 text-xl leading-relaxed text-gray-700 shadow-sm backdrop-blur-sm dark:border-[#5ad6ff]/50 dark:bg-gray-800/40 dark:text-gray-200 dark:shadow-md">
          Hi, I'm Perry Zhu, an international undergraduate majoring in Computer
          Science and Statistics at the University of British Columbia (UBC).
          <br />
          <br />
          I'm passionate about software development, machine learning, computer
          graphics, and photography. Explore my projects, photos, and
          experiences here!
        </p>

        <div className="mt-3 flex gap-3">
          {socialMediaLinks.map((link) => {
            return (
              <Link href={link.href} key={link.text} target="_blank">
                <Button
                  className="gradient-button-hover-responsive flex items-center gap-2 border px-4 py-2 text-gray-700 shadow-sm dark:border-[#5ad6ff]/30 dark:text-gray-200 dark:shadow-md"
                  variant="ghost"
                >
                  <span className="text-lg">{link.icon}</span> {link.text}
                </Button>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="relative z-10">
        <RollingImages />
      </div>
    </div>
  );
}
