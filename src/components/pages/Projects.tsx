import { NavbarPlaceholder } from "@/components/layout";
import { ProjectCard } from "@/components/ui";
import { projectInfos } from "@/assets/projects-details";

export function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#5ad6ff]/30 via-white to-[#fb9ac7]/30 pb-12 dark:from-[#1a4d6d]/70 dark:via-[#2a2a3d]/90 dark:to-[#6d1a4a]/70">
      <NavbarPlaceholder />
      <h1 className="bg-gradient-to-r from-[#5ad6ff] to-[#fb9ac7] bg-clip-text p-8 pb-0 text-center font-great-vibes text-5xl leading-normal text-transparent dark:from-[#64d1ff] dark:to-[#fab7ff]">
        Projects
      </h1>
      <div className="mx-auto mb-8 h-1 w-40 rounded-full bg-gradient-to-r from-[#5ad6ff] to-[#fb9ac7] dark:from-[#749bff] dark:to-[#b45ca7]"></div>
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
