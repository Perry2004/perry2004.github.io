import { NavbarPlaceholder } from "@/components/layout";
import { ProjectCard } from "@/components/ui";
import { projectInfos } from "@/assets/projects-details";

export function Projects() {
  return (
    <div className="gradient-bg-responsive min-h-screen pb-8 sm:pb-10 md:pb-12">
      <NavbarPlaceholder />
      <h1 className="gradient-text-responsive p-4 pb-0 text-center font-great-vibes text-4xl leading-normal sm:p-6 sm:text-5xl md:p-8">
        Projects
      </h1>
      <div className="gradient-divider-responsive mx-auto mb-4 w-28 sm:mb-6 sm:w-32 md:mb-8 md:w-40"></div>
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 px-4 sm:gap-8 sm:px-6 md:grid-cols-1 md:gap-12 md:px-8 lg:grid-cols-2 lg:gap-16 lg:px-12 xl:px-16 2xl:px-28">
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
