import { NavbarPlaceholder } from "../layout";
import { Chrono } from "react-chrono";
import { workExperiences } from "@/assets/work-experiences";

export function WorkExperiences() {
  return (
    <div className="min-h-screen bg-purple-200">
      <NavbarPlaceholder />
      <div className="ul-default">
        <Chrono
          items={workExperiences}
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
