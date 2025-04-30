import { Button, Link } from "@heroui/react";
import { SiGithub, SiLinkedin, SiInstagram, SiPexels } from "react-icons/si";
import { NavbarPlaceholder } from "../layout";
import { RollingImages } from "../ui";

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
    <div className="flex min-h-screen flex-col justify-evenly bg-green-100">
      <NavbarPlaceholder />
      <div className="ml-40 w-2/3 bg-green-400">
        <h1 className="text-2xl font-bold">Hello World</h1>
        <p className="text-xl">
          Hi, I'm Perry Zhu, an international undergraduate majoring in Computer
          Science and Statistics at the University of British Columbia (UBC).
          <br />
          <br />
          I'm passionate about software development, machine learning, computer
          graphics, and photography. Explore my projects, photos, and
          experiences here!
        </p>
        <div className="mt-4 flex gap-2">
          {socialMediaLinks.map((link) => {
            return (
              <Link href={link.href} key={link.text}>
                <Button>
                  {link.icon} {link.text}
                </Button>
              </Link>
            );
          })}
        </div>
      </div>
      <RollingImages />
    </div>
  );
}
