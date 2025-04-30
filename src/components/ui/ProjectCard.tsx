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
      <Card className="h-full">
        <CardHeader>
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-semibold">{projectInfo.title}</h1>
            <p className="text-xl">{projectInfo.intro}</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody className="ul-default scrollbar-hide">
          <Accordion>
            {projectInfo.descriptions.map((desc, index) => {
              return (
                <AccordionItem
                  key={index}
                  title={
                    <span className="text-xl font-normal">
                      {desc.shortDesc}
                    </span>
                  }
                  textValue={extractTextFromJSX(desc.shortDesc)}
                  className="text-left"
                >
                  <p className="text-lg">{desc.longDesc}</p>
                </AccordionItem>
              );
            })}
          </Accordion>
        </CardBody>
        <Divider />
        <CardFooter className="my-2 flex flex-row justify-center gap-3">
          {projectInfo.links.map((link, index) => (
            <div key={index} className="flex flex-row items-center">
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
