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
      <Card className="card-base-responsive h-full">
        <CardHeader className="card-header-responsive p-3 sm:p-4 md:p-5">
          <div className="flex flex-col gap-1 sm:gap-2">
            <h1 className="gradient-text-responsive text-xl font-semibold sm:text-3xl">
              {projectInfo.title}
            </h1>
            <p className="text-base text-gray-700 dark:text-gray-200 sm:text-xl">
              {projectInfo.intro}
            </p>
          </div>
        </CardHeader>
        <Divider className="card-divider-responsive" />
        <CardBody className="ul-default p-3 scrollbar-hide sm:p-4 md:p-5">
          <Accordion>
            {projectInfo.descriptions.map((desc, index) => {
              return (
                <AccordionItem
                  key={index}
                  title={
                    <span className="text-base font-normal dark:text-gray-100 sm:text-xl">
                      {desc.shortDesc}
                    </span>
                  }
                  textValue={extractTextFromJSX(desc.shortDesc)}
                  className="text-left transition-all duration-300"
                  classNames={{
                    content: "text-gray-700 dark:text-gray-300",
                    trigger: "accordion-hover-responsive py-2 sm:py-3",
                    indicator: "text-gray-500 dark:text-gray-400",
                  }}
                >
                  <div className="text-sm dark:text-gray-300 sm:text-base md:text-xl">
                    {desc.longDesc}
                  </div>
                </AccordionItem>
              );
            })}
          </Accordion>
        </CardBody>
        <Divider className="card-divider-responsive" />
        <CardFooter className="card-footer-responsive flex flex-row flex-wrap justify-center gap-2 p-3 sm:gap-3 sm:p-4">
          {projectInfo.links.map((link, index) => (
            <div key={index} className="hover-float flex flex-row items-center">
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
