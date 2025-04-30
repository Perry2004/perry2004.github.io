import { ProjectInfo, IconedLink } from "@/components";
import { LinkText } from "@/components";
import { SiGithub, SiLinkedin } from "react-icons/si";

/**
 * This file contains the project details that will be displayed on the project cards.
 * Reference the ProjectInfo interface in the ProjectCard component for structure.
 * It is written in TSX as JSON does not support JSX elements.
 * Modifying the file requires re-building the project.
 */
export const projectInfos: ProjectInfo[] = [
  {
    title: "Personal Website",
    intro: (
      <>
        Full-Stack Web Design & Development With <code>HTML</code>,{" "}
        <code>CSS</code>, and <code>TypeScript</code>
      </>
    ),
    descriptions: [
      {
        shortDesc: (
          <>
            Built and hosted a full-stack website using <code>HTML5</code>,{" "}
            <code>Sass</code>, <code>Three.js</code>, and <code>WebGL</code> for
            3D graphics.
          </>
        ),
        longDesc: (
          <>
            The website is designed to showcase my projects, skills, and
            experiences in a visually appealing and interactive way. The
            frontend is built with <code>HTML5</code>, <code>Bootstrap</code>,{" "}
            <code>Sass</code>, <code>TypeScript</code>, and{" "}
            <code>Three.js</code>. The website is designed in a responsive
            manner to ensure compatibility with different devices and screen
            sizes.
          </>
        ),
      },
      {
        shortDesc: (
          <>
            Hosted on an AWS Linux EC2 instance with a Node.js backend and
            Express framework.
          </>
        ),
        longDesc: (
          <>
            The backend is constructed with Node.js and Expres framework. It is
            hosted on an AWS Linux EC2 instance on my personal domain. The
            backend is responsible for serving the frontend resources, handling
            API requests, and managing user data. The website is designed to be
            scalable and maintainable, with a focus on performance and security.
          </>
        ),
      },
    ],
    links: [
      <>
        <IconedLink href="https://github.com/perry2004/perry2004.github.io">
          <SiGithub />
          <LinkText>Check GitHub</LinkText>
        </IconedLink>
      </>,
      <>
        <IconedLink href="https://www.linkedin.com/in/yourprofile">
          <SiLinkedin />
          <LinkText>Check LinkedIn</LinkText>
        </IconedLink>
      </>,
    ],
  },
];
