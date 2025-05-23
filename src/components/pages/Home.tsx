import { Button, Link } from "@heroui/react";
import { SiGithub, SiLinkedin, SiInstagram, SiPexels } from "react-icons/si";
import { NavbarPlaceholder } from "@/components/layout";
import { RollingImages } from "@/components/ui";
import Iridescence from "@/blocks/Backgrounds/Iridescence/Iridescence";
import { useDevice, useTheme } from "@/hooks";

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

const introductionText = [
  "Hi, I'm Perry Zhu, an international undergraduate majoring in Computer Science and Statistics at the University of British Columbia (UBC).",
  "I'm passionate about software development, machine learning, DevOps, computer graphics, and photography. Explore my photos, projects, and experiences here!",
];

export function Home() {
  const { resolvedTheme } = useTheme();
  const { isDesktop } = useDevice();

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
      {isDesktop && <NavbarPlaceholder />}

      <div className="relative z-10 mx-4 w-auto max-w-full sm:mx-8 sm:w-4/5 md:ml-12 md:w-3/4 lg:ml-24 lg:w-2/3 xl:ml-48 xl:w-1/2">
        <div className="relative">
          <h1 className="gradient-text mt-3 from-[#2f4eff] to-[#ff1281] p-1 font-great-vibes text-4xl font-bold !leading-normal dark:from-[#64d1ff] dark:to-[#fab7ff] sm:mt-0 sm:text-5xl md:text-7xl">
            Hello World!
          </h1>
          <div className="gradient-divider-responsive mb-3 w-32 sm:w-36 md:w-40"></div>
        </div>

        <p className="rounded-lg border border-[#5ad6ff]/30 bg-white/40 p-3 text-base leading-relaxed text-gray-700 shadow-sm backdrop-blur-sm dark:border-[#5ad6ff]/50 dark:bg-gray-800/40 dark:text-gray-200 dark:shadow-md sm:text-lg md:text-2xl">
          {introductionText[0]}
          <br />
          <br />
          {introductionText[1]}
        </p>

        <div className="mt-3 flex flex-wrap gap-2 sm:gap-3">
          {socialMediaLinks.map((link) => {
            return (
              <Link href={link.href} key={link.text} target="_blank">
                <Button
                  className="gradient-button-hover-responsive flex items-center gap-1 border px-2 py-1 text-sm text-gray-700 shadow-sm dark:border-[#5ad6ff]/30 dark:text-gray-200 dark:shadow-md sm:gap-2 sm:px-3 sm:py-2 sm:text-base md:px-4 md:text-xl"
                  variant="ghost"
                >
                  <span className="text-base sm:text-lg">{link.icon}</span>{" "}
                  {link.text}
                </Button>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="relative z-10 mt-6 sm:mt-0">
        <RollingImages />
      </div>
    </div>
  );
}
