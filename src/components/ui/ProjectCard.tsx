import { JSX } from "react";
import { NavbarPlaceholder } from "../layout";
import {
  Accordion,
  AccordionItem,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Link,
} from "@heroui/react";

export interface ProjectInfo {
  title: string;
  intro: string;
  descriptions: {
    shortDesc: string;
    longDesc: string;
  }[];
  links: {
    link: string;
    linkText: string;
    icon: JSX.Element;
  }[];
}

export function ProjectCard({ projectInfo }: { projectInfo: ProjectInfo }) {
  return (
    <div className="min-h-screen bg-yellow-100">
      <NavbarPlaceholder />
      <div className="w-64">
        <Card>
          <CardHeader>
            <div>{projectInfo.title}</div>
          </CardHeader>
          <Divider />
          <CardBody>
            <Accordion>
              {projectInfo.descriptions.map((desc, index) => {
                return (
                  <AccordionItem
                    key={index}
                    title={desc.shortDesc}
                    aria-label={desc.shortDesc}
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
            {projectInfo.links.map((link, index) => {
              return (
                <Link
                  key={index}
                  href={link.link}
                  target="_blank"
                  className="flex items-center gap-2"
                >
                  {link.icon}
                  <span>{link.linkText}</span>
                </Link>
              );
            })}
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
