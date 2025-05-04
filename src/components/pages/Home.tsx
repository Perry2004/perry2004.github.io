import { Button, Link } from "@heroui/react";
import { SiGithub, SiLinkedin, SiInstagram, SiPexels } from "react-icons/si";
import { NavbarPlaceholder } from "@/components/layout";
import { RollingImages } from "@/components/ui";
import Iridescence from "@/blocks/Backgrounds/Iridescence/Iridescence";

interface SocialMediaLink {
  text: string;
  href: string;
  icon: React.ReactNode;
}

export function Home() {
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
  return (
    <div className="relative flex min-h-screen flex-col justify-evenly overflow-hidden bg-gradient-to-br from-[#5ad6ff]/30 via-white to-[#fb9ac7]/30">
      <div className="absolute z-10 h-full w-full">
        <Iridescence color={[0.9, 0.9, 0.9]} mouseReact={false} speed={0.3} />
      </div>
      <NavbarPlaceholder />

      <div className="relative z-10 ml-48 w-1/2">
        <div className="relative">
          <h1 className="bg-gradient-to-r from-[#5895ff] to-[#ff0378] bg-clip-text font-great-vibes text-6xl font-bold leading-normal text-transparent">
            Hello World!
          </h1>
          <div className="mb-3 h-1 w-40 rounded-full bg-gradient-to-r from-[#5ad6ff] to-[#fb9ac7]"></div>
        </div>

        <p className="rounded-lg border border-[#5ad6ff]/30 bg-white/40 p-3 text-xl leading-relaxed text-gray-700 shadow-sm backdrop-blur-sm">
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
                  className="flex items-center gap-2 border px-4 py-2 text-gray-700 shadow-sm transition-all duration-300 hover:bg-gradient-to-r hover:from-[#5ad6ff] hover:to-[#fb9ac7] hover:text-white hover:shadow-md"
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
