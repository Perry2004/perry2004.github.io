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
      <div className="flex min-h-screen items-center justify-center bg-purple-200">
        <div>Loading work experiences...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-purple-200">
        <div>Error loading work experiences. Please try again later.</div>
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
                  title={<span className="text-lg">{desc.shortDesc}</span>}
                  textValue={desc.shortDesc}
                  className=""
                >
                  <ul>
                    {desc.longDesc.map((longDesc, index) => {
                      return <li key={index + longDesc}>{longDesc}</li>;
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
    <div className="min-h-screen bg-purple-200">
      <NavbarPlaceholder />
      <div className="ul-default min-h-[calc(100vh-4rem)] py-5">
        <Chrono
          items={chronoItems}
          mode="VERTICAL_ALTERNATING"
          disableToolbar={true}
          disableInteraction={true}
          cardHeight={300}
          useReadMore={true}
          classNames={{
            card: "!min-h-0",
            cardText: "max-h-sub-clear !max-h-fit",
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
