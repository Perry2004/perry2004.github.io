import { Button, Link } from "@heroui/react";
import { NavbarPlaceholder } from "@/components/layout";
import { IoDocumentAttach } from "react-icons/io5";
import RotatingText from "@/blocks/TextAnimations/RotatingText/RotatingText";
import { useDevice, useLoadDataJson } from "@/hooks";
import DecryptedText from "@/blocks/TextAnimations/DecryptedText/DecryptedText";

interface AboutMeData {
  phrases: string[];
  paragraphs: string[];
}

export function AboutMe() {
  const { isDesktop } = useDevice();

  return (
    <div className="gradient-bg-responsive sm:min-h-screen">
      {isDesktop && <NavbarPlaceholder />}
      <div className="item-center flex h-full flex-grow flex-col justify-center sm:min-h-[calc(100vh-4rem)] md:flex-row">
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
    <div className="flex w-full items-center justify-center py-4 md:w-2/5 md:py-0">
      <div className="flex flex-col items-center justify-normal p-3 text-4xl leading-normal sm:p-4 sm:text-5xl md:p-5 md:text-7xl">
        <span className="gradient-text-responsive mb-2 text-center font-great-vibes leading-normal sm:mb-3 md:mb-4">
          Hi there! I'm Perry, and I'm a:
        </span>
        {!isLoading && shuffledPhrases.length > 0 && (
          <RotatingText
            texts={shuffledPhrases}
            mainClassName="px-2 sm:px-2 md:px-3 bg-gradient-to-r from-[#5ad6ff]/20 to-[#fb9ac7]/20 overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg border border-[#5ad6ff]/30 shadow-sm backdrop-blur-sm text-xl sm:text-3xl md:text-4xl lg:text-5xl dark:from-[#1a2e38]/80 dark:to-[#3d1e2e]/80 dark:border-[#5ad6ff]/50 dark:shadow-md"
            elementLevelClassName="gradient-text-responsive "
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
    <div className="flex w-full flex-col items-center justify-center md:w-3/5">
      <div className="mx-4 flex flex-col items-center justify-center rounded-xl border border-[#5ad6ff]/30 bg-white/40 p-4 shadow-sm backdrop-blur-sm dark:border-[#5ad6ff]/50 dark:bg-gray-800/40 dark:shadow-md sm:mx-6 sm:p-5 md:m-8 md:p-6">
        {aboutMeText.map((text, index) => (
          <p
            key={index}
            className="my-2 text-base leading-relaxed text-gray-700 dark:text-gray-200 sm:text-lg md:text-2xl"
          >
            <DecryptedText
              text={text}
              speed={300}
              sequential={false}
              maxIterations={10}
              animateOn="view"
              useOriginalCharsOnly={false}
            />
          </p>
        ))}
        <Link
          href="/coop_resume.pdf"
          download="PerryZ_resume.pdf"
          className="flex w-full justify-center self-start"
        >
          <Button className="gradient-button-hover-responsive mt-4 flex items-center gap-2 border border-[#5ad6ff]/50 bg-white px-3 py-1.5 text-sm text-gray-700 shadow-sm dark:border-[#5ad6ff]/70 dark:bg-gray-800 dark:text-gray-200 sm:px-4 sm:py-2 sm:text-base">
            <IoDocumentAttach />
            <span>Check my resume</span>
          </Button>
        </Link>
      </div>
    </div>
  );
}
