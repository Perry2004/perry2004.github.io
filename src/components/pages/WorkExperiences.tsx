import { NavbarPlaceholder } from "@/components/layout";
import { Chrono } from "react-chrono";
import { Accordion, AccordionItem } from "@heroui/react";
import { useLoadDataJson, useDevice } from "@/hooks";
import { useEffect, useState } from "react";

export function WorkExperiences() {
  const [chronoMode, setChronoMode] = useState("VERTICAL_ALTERNATING");
  const { isDesktop } = useDevice();
  const {
    data: workExperiences,
    isLoading,
    error,
  } = useLoadDataJson<WorkExperience[]>(
    "/data/work-experiences.json",
    "workExperiences",
  );

  // Set the mode based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setChronoMode("VERTICAL");
      } else {
        setChronoMode("VERTICAL_ALTERNATING");
      }
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="gradient-bg-responsive flex min-h-screen items-center justify-center">
        <div className="rounded-xl border border-[#5ad6ff]/30 bg-white/40 p-4 shadow-sm backdrop-blur-sm dark:border-[#5ad6ff]/50 dark:bg-gray-800/40 dark:text-gray-200 dark:shadow-md sm:p-5 md:p-6">
          Loading work experiences...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="gradient-bg-responsive flex min-h-screen items-center justify-center">
        <div className="rounded-xl border border-[#5ad6ff]/30 bg-white/40 p-4 shadow-sm backdrop-blur-sm dark:border-[#5ad6ff]/50 dark:bg-gray-800/40 dark:text-gray-200 dark:shadow-md sm:p-5 md:p-6">
          Error loading work experiences. Please try again later.
        </div>
      </div>
    );
  }

  const chronoItems = workExperiences.map((work) => {
    return {
      title: `${work.jobTitle} - ${work.location}`,
      cardTitle: `${work.startDate} - ${work.endDate}`,
      cardSubtitle: `${work.company} (${work.companyShortName})`,
      cardDetailedText: [],
      timelineContent: (
        <>
          <Accordion isCompact>
            {work.descriptions.map((desc, index) => {
              return (
                <AccordionItem
                  key={index + desc.shortDesc}
                  title={
                    <span className="text-xl text-gray-800 dark:text-gray-200 sm:text-2xl">
                      {desc.shortDesc}
                    </span>
                  }
                  textValue={desc.shortDesc}
                  classNames={{
                    content: "text-gray-700 dark:text-gray-300",
                    trigger:
                      "data-[hover=true]:bg-[#5ad6ff]/10 dark:data-[hover=true]:bg-[#5ad6ff]/20 px-2 sm:px-3 md:px-4 rounded-lg",
                    indicator: "text-gray-500 dark:text-gray-400",
                  }}
                >
                  <ul className="text-lg text-gray-700 dark:text-gray-300 sm:text-xl">
                    {desc.longDesc.map((longDesc, index) => {
                      return (
                        <li key={index + longDesc} className="mb-2">
                          {longDesc}
                        </li>
                      );
                    })}
                  </ul>
                </AccordionItem>
              );
            })}
          </Accordion>
        </>
      ),
    };
  });

  return (
    <div className="gradient-bg-responsive min-h-screen">
      {isDesktop && <NavbarPlaceholder />}
      <div>
        <h1 className="gradient-text-responsive p-4 pb-0 text-center font-great-vibes text-4xl sm:p-6 sm:text-6xl md:mt-0 md:p-8">
          Work Experiences
        </h1>
        <div className="gradient-divider-responsive mx-auto mt-1 w-40 sm:mt-2 sm:w-48 md:w-60"></div>
      </div>
      <div className="ul-default work-experiences-timeline min-h-[calc(100vh-12rem)] px-2 py-4 sm:px-4 sm:py-6 md:px-6 md:py-8">
        <Chrono
          items={chronoItems}
          mode={chronoMode as never}
          disableToolbar={true}
          disableInteraction={true}
          cardHeight={300}
          useReadMore={true}
          classNames={{
            card: "work-experience-card",
            cardText: "max-h-sub-clear !max-h-fit",
            cardTitle: "work-experience-card-title",
            cardSubtitle: "work-experience-card-subtitle",
            timelinePointClass: "work-experience-timeline-point",
            title: "work-experience-title",
          }}
          theme={{
            primary: "#5ad6ff",
            secondary: "#fb9ac7",
            cardBgColor: "rgba(255, 255, 255, 0.8)",
            cardForeColor: "#333",
            titleColor: "#5ad6ff",
            titleColorActive: "#fb9ac7",
          }}
          parseDetailsAsHTML={true}
        />
      </div>
    </div>
  );
}

export interface WorkExperience {
  jobTitle: string;
  company: string;
  companyShortName: string;
  startDate: string;
  endDate: string;
  descriptions: {
    shortDesc: string;
    longDesc: string[];
  }[];
  location: string;
}
