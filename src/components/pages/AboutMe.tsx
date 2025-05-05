import { Button, Link } from "@heroui/react";
import { NavbarPlaceholder } from "@/components/layout";
import { IoDocumentAttach } from "react-icons/io5";
import RotatingText from "@/blocks/TextAnimations/RotatingText/RotatingText";
import { useLoadDataJson } from "@/hooks";

interface AboutMeData {
  phrases: string[];
  paragraphs: string[];
}

export function AboutMe() {
  return (
    <div className="gradient-bg-responsive min-h-screen">
      <NavbarPlaceholder />
      <div className="item-center flex h-full min-h-[calc(100vh-4rem)] flex-grow flex-row justify-center">
        <AboutMeLeft />
        <AboutMeRight />
      </div>
    </div>
  );
}

function AboutMeLeft() {
  const { data, isLoading } = useLoadDataJson<AboutMeData>(
    "/data/about-me.json",
  );

  // Default empty array if data is loading or phrases is undefined
  const phrases = data?.phrases || [];
  const shuffledPhrases = [...phrases].sort(() => Math.random() - 0.5);

  return (
    <div className="flex w-1/2 items-center justify-center">
      <div className="flex flex-col items-center justify-normal p-5 text-5xl leading-normal">
        <span className="gradient-text-responsive mb-4 font-great-vibes">
          Hi there! I'm Perry, and I'm a:
        </span>
        {!isLoading && shuffledPhrases.length > 0 && (
          <RotatingText
            texts={shuffledPhrases}
            mainClassName="px-2 sm:px-2 md:px-3 bg-gradient-to-r from-[#5ad6ff]/20 to-[#fb9ac7]/20 overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg border border-[#5ad6ff]/30 shadow-sm backdrop-blur-sm text-3xl dark:from-[#1a2e38]/80 dark:to-[#3d1e2e]/80 dark:border-[#5ad6ff]/50 dark:shadow-md"
            elementLevelClassName="gradient-text-responsive font-bold"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
        )}
      </div>
    </div>
  );
}

function AboutMeRight() {
  const { data } = useLoadDataJson<AboutMeData>("/data/about-me.json");
  const aboutMeText = data?.paragraphs || [];

  return (
    <div className="flex w-1/2 flex-col items-center justify-center">
      <div className="m-8 flex flex-col items-center justify-center rounded-xl border border-[#5ad6ff]/30 bg-white/40 p-6 shadow-sm backdrop-blur-sm dark:border-[#5ad6ff]/50 dark:bg-gray-800/40 dark:shadow-md">
        {aboutMeText.map((text, index) => (
          <p
            key={index}
            className="my-2 text-xl leading-relaxed text-gray-700 dark:text-gray-200"
          >
            {text}
          </p>
        ))}
        <Link
          href="/coop_resume.pdf"
          download="PerryZ_resume.pdf"
          className="self-start"
        >
          <Button className="gradient-button-hover-responsive mt-4 flex items-center gap-2 border border-[#5ad6ff]/50 bg-white px-4 py-2 text-gray-700 shadow-sm dark:border-[#5ad6ff]/70 dark:bg-gray-800 dark:text-gray-200">
            <IoDocumentAttach />
            <span>Check my resume</span>
          </Button>
        </Link>
      </div>
    </div>
  );
}
