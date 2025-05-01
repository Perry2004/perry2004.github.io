import { NavbarPlaceholder } from "../layout";
import { Chrono } from "react-chrono";
import { Accordion, AccordionItem } from "@heroui/react";
import { useLoadWorkExperiences } from "@/hooks";

export function WorkExperiences() {
  const { workExperiences, isLoading, error } = useLoadWorkExperiences();

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
      <div className="ul-default">
        <Chrono
          items={chronoItems}
          mode="VERTICAL_ALTERNATING"
          disableToolbar={true}
          disableInteraction={true}
          cardHeight={300}
          useReadMore={true}
          classNames={{
            card: "my-custom-card-class !min-h-0",
            cardTitle: "my-custom-title-class",
            cardText: "my-custom-text-class max-h-sub-clear !max-h-fit",
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
  startDate: string; // Changed from Date to string (e.g. "Jan 2024")
  endDate: string; // Changed from Date | "present" to just string (e.g. "Present" or "May 2025")
  descriptions: {
    shortDesc: string;
    longDesc: string[];
  }[];
  location: string;
}
