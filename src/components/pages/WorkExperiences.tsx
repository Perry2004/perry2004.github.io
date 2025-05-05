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
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#5ad6ff]/30 via-white to-[#fb9ac7]/30 dark:from-[#1a4d6d]/70 dark:via-[#2a2a3d]/90 dark:to-[#6d1a4a]/70">
        <div className="rounded-xl border border-[#5ad6ff]/30 bg-white/40 p-6 shadow-sm backdrop-blur-sm dark:border-[#5ad6ff]/50 dark:bg-gray-800/40 dark:text-gray-200 dark:shadow-md">
          Loading work experiences...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#5ad6ff]/30 via-white to-[#fb9ac7]/30 dark:from-[#1a4d6d]/70 dark:via-[#2a2a3d]/90 dark:to-[#6d1a4a]/70">
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
    <div className="min-h-screen bg-gradient-to-br from-[#5ad6ff]/30 via-white to-[#fb9ac7]/30 dark:from-[#1a4d6d]/70 dark:via-[#2a2a3d]/90 dark:to-[#6d1a4a]/70">
      <NavbarPlaceholder />
      <div>
        <h1 className="bg-gradient-to-r from-[#5ad6ff] to-[#fb9ac7] bg-clip-text p-8 pb-0 text-center font-great-vibes text-5xl text-transparent dark:from-[#64d1ff] dark:to-[#fab7ff]">
          Work Experiences
        </h1>
        <div className="mx-auto mt-2 h-1 w-60 rounded-full bg-gradient-to-r from-[#5ad6ff] to-[#fb9ac7] dark:from-[#749bff] dark:to-[#b45ca7]"></div>
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
