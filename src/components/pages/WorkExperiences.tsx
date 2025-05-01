import { NavbarPlaceholder } from "../layout";
import { Chrono } from "react-chrono";
import { workExperiences } from "@/assets/work-experiences";

export function WorkExperiences() {
  return (
    <div className="min-h-screen bg-purple-200">
      <NavbarPlaceholder />
      <Chrono
        items={workExperiences}
        mode="VERTICAL_ALTERNATING"
        disableToolbar={true}
        disableInteraction={true}
        cardHeight={300}
        useReadMore={true}
        className="ul-default"
        classNames={{
          card: "w-auto h-auto",
        }}
        parseDetailsAsHTML={true}
      />
    </div>
  );
}
