import { NavbarPlaceholder } from "../layout";
import { ProjectCard } from "../ui";
import { projectInfos } from "@/assets/project-details";

export function Projects() {
  return (
    <>
      <NavbarPlaceholder />
      <div className="grid w-full grid-cols-2 gap-24 px-24 py-5">
        {projectInfos.map((projectInfo, index) => {
          return (
            <div className="">
              <ProjectCard key={index} projectInfo={projectInfo} />
            </div>
          );
        })}
      </div>
    </>
  );
}
