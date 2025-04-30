import { Button, Link } from "@heroui/react";
import { NavbarPlaceholder } from "../layout";
import { IoDocumentAttach } from "react-icons/io5";
import RotatingText from "@/blocks/TextAnimations/RotatingText/RotatingText";

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
  const aboutMePhrases = [
    "Software Developer",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "UBC Student",
    "Former OSU Student",
    "International Student from China",
    "Computer Science Student",
    "Statistics Student",
    "Data Science Enthusiast",
    "Machine Learning Enthusiast",
    "Computer Graphics Enthusiast",
    "Amateur Photographer",
    "Open Source Contributor",
    "Problem Solver",
    "Lifelong Learner",
  ];
  const shuffledPhrases = aboutMePhrases.sort(() => Math.random() - 0.5);
  return (
    <div className="flex w-1/2 items-center justify-center bg-orange-400">
      <div className="flex flex-col items-center justify-normal p-5 text-5xl">
        <span className="">Hi there! I'm Perry, and I'm a:</span>
        <RotatingText
          texts={shuffledPhrases}
          mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
          staggerFrom={"last"}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-120%" }}
          staggerDuration={0.025}
          splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          rotationInterval={2000}
        />
      </div>
    </div>
  );
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
