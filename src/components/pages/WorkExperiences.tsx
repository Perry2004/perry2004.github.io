import { NavbarPlaceholder } from "@/components/layout";
import { Chrono } from "react-chrono";
import { Accordion, AccordionItem } from "@heroui/react";
import { useLoadDataJson } from "@/hooks";

export function WorkExperiences() {
  const {
    data: workExperiences,
    isLoading,
    error,
  } = useLoadDataJson<WorkExperience[]>(
    "/data/work-experiences.json",
    "workExperiences",
  );

  if (isLoading) {
    return (
      <div className="gradient-bg-responsive flex min-h-screen items-center justify-center">
        <div className="rounded-xl border border-[#5ad6ff]/30 bg-white/40 p-6 shadow-sm backdrop-blur-sm dark:border-[#5ad6ff]/50 dark:bg-gray-800/40 dark:text-gray-200 dark:shadow-md">
          Loading work experiences...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="gradient-bg-responsive flex min-h-screen items-center justify-center">
        <div className="rounded-xl border border-[#5ad6ff]/30 bg-white/40 p-6 shadow-sm backdrop-blur-sm dark:border-[#5ad6ff]/50 dark:bg-gray-800/40 dark:text-gray-200 dark:shadow-md">
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
                    <span className="text-lg text-gray-800 dark:text-gray-200">
                      {desc.shortDesc}
                    </span>
                  }
                  textValue={desc.shortDesc}
                  classNames={{
                    content: "text-gray-700 dark:text-gray-300",
                    trigger:
                      "data-[hover=true]:bg-[#5ad6ff]/10 dark:data-[hover=true]:bg-[#5ad6ff]/20 px-4 rounded-lg",
                    indicator: "text-gray-500 dark:text-gray-400",
                  }}
                >
                  <ul className="text-gray-700 dark:text-gray-300">
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
      <NavbarPlaceholder />
      <div>
        <h1 className="gradient-text-responsive p-8 pb-0 text-center font-great-vibes text-5xl">
          Work Experiences
        </h1>
        <div className="gradient-divider-responsive mx-auto mt-2 w-60"></div>
      </div>
      <div className="ul-default work-experiences-timeline min-h-[calc(100vh-12rem)] py-8">
        <Chrono
          items={chronoItems}
          mode="VERTICAL_ALTERNATING"
          // mode="VERTICAL"
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
