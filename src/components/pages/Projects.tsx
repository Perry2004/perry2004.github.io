import { NavbarPlaceholder } from "@/components/layout";
import { ProjectCard } from "@/components/ui";
import { projectInfos } from "@/assets/projects-details";

export function Projects() {
  return (
    <div className="gradient-bg-responsive min-h-screen pb-12">
      <NavbarPlaceholder />
      <h1 className="gradient-text-responsive p-8 pb-0 text-center font-great-vibes text-5xl leading-normal">
        Projects
      </h1>
      <div className="gradient-divider-responsive mx-auto mb-8 w-40"></div>
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-2 lg:px-28">
        {projectInfos.map((projectInfo, index) => {
          return (
            <div
              className="transform-gpu transition-all duration-500 hover:scale-[1.02]"
              key={projectInfo.title}
            >
              <ProjectCard key={index} projectInfo={projectInfo} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
