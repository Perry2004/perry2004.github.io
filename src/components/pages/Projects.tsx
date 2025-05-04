import { NavbarPlaceholder } from "@/components/layout";
import { ProjectCard } from "@/components/ui";
import { projectInfos } from "@/assets/projects-details";

export function Projects() {
  return (
    <>
      <NavbarPlaceholder />
      <h1 className="p-5 px-12 font-great-vibes text-5xl">Projects</h1>
      <div className="grid w-full grid-cols-2 gap-x-12 gap-y-12 px-24 py-5">
        {projectInfos.map((projectInfo, index) => {
          return (
            <div className="" key={projectInfo.title}>
              <ProjectCard key={index} projectInfo={projectInfo} />
            </div>
          );
        })}
      </div>
    </>
  );
}
