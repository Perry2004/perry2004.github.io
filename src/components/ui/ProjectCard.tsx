import {
  Accordion,
  AccordionItem,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
} from "@heroui/react";
import { JSX } from "react";

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
    <div className="">
      <Card>
        <CardHeader>
          <div className="flex flex-col">
            <p>{projectInfo.title}</p>
            <p>{projectInfo.intro}</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <Accordion>
            {projectInfo.descriptions.map((desc, index) => {
              return (
                <AccordionItem
                  key={index}
                  title={desc.shortDesc}
                  className="text-left"
                >
                  {desc.longDesc}
                </AccordionItem>
              );
            })}
          </Accordion>
        </CardBody>
        <Divider />
        <CardFooter>
          {projectInfo.links.map((link, index) => (
            <div key={index}>{link}</div>
          ))}
        </CardFooter>
      </Card>
    </div>
  );
}
