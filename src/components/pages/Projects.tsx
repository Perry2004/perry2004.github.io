import { NavbarPlaceholder } from "@/components/layout";
import { ProjectCard } from "@/components/ui";
import { projectInfos } from "@/assets/projects-details";

export function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#5ad6ff]/30 via-white to-[#fb9ac7]/30 pb-12">
      <NavbarPlaceholder />
      <h1 className="bg-gradient-to-r from-[#5ad6ff] to-[#fb9ac7] bg-clip-text p-8 pb-0 text-center font-great-vibes text-5xl leading-normal text-transparent">
        Projects
      </h1>
      <div className="mx-auto mb-8 h-1 w-40 rounded-full bg-gradient-to-r from-[#5ad6ff] to-[#fb9ac7]"></div>
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
