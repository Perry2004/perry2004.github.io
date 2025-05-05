import {
  Accordion,
  AccordionItem,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
} from "@heroui/react";
import { JSX, ReactNode } from "react";

export interface ProjectInfo {
  title: string;
  intro: JSX.Element;
  descriptions: {
    shortDesc: JSX.Element;
    longDesc: JSX.Element;
  }[];
  links: JSX.Element[];
}

export function ProjectCard({ projectInfo }: { projectInfo: ProjectInfo }) {
  return (
    <div className="h-full">
      <Card className="h-full overflow-hidden border border-[#5ad6ff]/30 bg-white/80 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl dark:border-[#5ad6ff]/50 dark:bg-gray-800/80 dark:shadow-md dark:hover:shadow-lg">
        <CardHeader className="bg-gradient-to-r from-[#5ad6ff]/10 to-[#fb9ac7]/10 dark:from-[#5ad6ff]/20 dark:to-[#fb9ac7]/20">
          <div className="flex flex-col gap-2">
            <h1 className="bg-gradient-to-r from-[#5ad6ff] to-[#fb9ac7] bg-clip-text text-2xl font-semibold text-transparent dark:from-[#64d1ff] dark:to-[#fab7ff]">
              {projectInfo.title}
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-200">
              {projectInfo.intro}
            </p>
          </div>
        </CardHeader>
        <Divider className="h-[2px] bg-gradient-to-r from-[#5ad6ff]/30 to-[#fb9ac7]/30 dark:from-[#5ad6ff]/40 dark:to-[#fb9ac7]/40" />
        <CardBody className="ul-default scrollbar-hide">
          <Accordion>
            {projectInfo.descriptions.map((desc, index) => {
              return (
                <AccordionItem
                  key={index}
                  title={
                    <span className="text-lg font-normal dark:text-gray-100">
                      {desc.shortDesc}
                    </span>
                  }
                  textValue={extractTextFromJSX(desc.shortDesc)}
                  className="text-left transition-all duration-300"
                  classNames={{
                    content: "text-gray-700 dark:text-gray-300",
                    trigger:
                      "data-[hover=true]:bg-[#5ad6ff]/10 dark:data-[hover=true]:bg-[#5ad6ff]/20 px-4 rounded-lg",
                    indicator: "text-gray-500 dark:text-gray-400",
                  }}
                >
                  <div className="text-lg dark:text-gray-300">
                    {desc.longDesc}
                  </div>
                </AccordionItem>
              );
            })}
          </Accordion>
        </CardBody>
        <Divider className="h-[2px] bg-gradient-to-r from-[#5ad6ff]/30 to-[#fb9ac7]/30 dark:from-[#5ad6ff]/40 dark:to-[#fb9ac7]/40" />
        <CardFooter className="flex flex-row justify-center gap-3 bg-gradient-to-r from-[#5ad6ff]/10 to-[#fb9ac7]/10 dark:from-[#5ad6ff]/20 dark:to-[#fb9ac7]/20">
          {projectInfo.links.map((link, index) => (
            <div
              key={index}
              className="flex transform-gpu flex-row items-center transition-all duration-300 hover:scale-105"
            >
              {link}
            </div>
          ))}
        </CardFooter>
      </Card>
    </div>
  );
}

/**
 * Utility function to extract text content from JSX elements
 */
function extractTextFromJSX(element: ReactNode): string {
  if (typeof element === "string" || typeof element === "number") {
    return String(element);
  }

  if (Array.isArray(element)) {
    return element.map(extractTextFromJSX).join(" ");
  }

  // JSX elements
  if (element !== null && typeof element === "object" && "props" in element) {
    const props = element.props as { children?: ReactNode };
    if (props.children) {
      return extractTextFromJSX(props.children);
    }
  }

  return "";
}
