import { Button, Link } from "@heroui/react";
import { NavbarPlaceholder } from "../layout";
import { IoDocumentAttach } from "react-icons/io5";

export function AboutMe() {
  return (
    <div className="min-h-screen bg-pink-200">
      <NavbarPlaceholder />
      <div className="item-center flex h-full min-h-[calc(100vh-4rem)] flex-grow flex-row justify-center">
        <AboutMeLeft />
        <AboutMeRight />
      </div>
    </div>
  );
}

function AboutMeLeft() {
  return <div className="w-1/2 bg-orange-400">Left</div>;
}

function AboutMeRight() {
  const aboutMeText = [
    "I'm currently pursuing a combined major in Computer Science and Statistics at UBC. My academic journey and personal projects reflect my passion for problem-solving, innovation, and continuous learning.",
    "I specialize in areas like machine learning, full-stack web development, computer graphics, and algorithm optimization. I have created several projects that demonstrate my skills and experiences in these areas.",
    "My major, as a combination of computer programming and math/statistical analysis, has equipped me with a solid foundation in all these areas.",
    "I'm always eager to explore new technologies and take on challenging projects that allow me to grow as a developer.",
  ];

  return (
    <div className="flex w-1/2 flex-col items-center justify-center">
      <div
        className="animate-rotate-rainbow mx-8 my-1 flex flex-col items-center justify-center p-5 text-xl"
        style={
          {
            // credit: thanks to https://www.bram.us/2021/01/29/animating-a-css-gradient-border/
            border: "5px solid",
            ["--angle" as string]: "0deg",
            borderImage:
              "conic-gradient(from var(--angle), red, yellow, lime, aqua, blue, magenta, red) 1",
          } as React.CSSProperties
        }
      >
        {aboutMeText.map((text, index) => (
          <p key={index} className="my-2">
            {text}
          </p>
        ))}
        <Link
          href="/coop_resume.pdf"
          download="PerryZ_resume.pdf"
          className="self-start"
        >
          <Button>
            <IoDocumentAttach />
            <span>Check my resume</span>
          </Button>
        </Link>
      </div>
    </div>
  );
}
