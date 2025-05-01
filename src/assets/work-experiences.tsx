import { Accordion, AccordionItem } from "@heroui/react";

const workDetails: WorkExperience[] = [
  {
    jobTitle: "Teaching Assistant",
    company: "The University of British Columbia",
    companyShortName: "UBC",
    startDate: new Date("2025-01-01"),
    endDate: new Date(), // Present
    descriptions: [
      {
        shortDesc:
          "Guided students through database design concepts and implementation in weekly lab sessions.",
        longDesc:
          "Held weekly one-hour lab sessions to guide students through hands-on exercises on relational database design and implementation using ER models, relational algebra, and SQL.",
      },
      {
        shortDesc:
          "Provided regular office hours and online support for student questions.",
        longDesc:
          "Provided weekly office hours to address students' questions and offer individualized support. Answered student queries promptly via Piazza and emails, fostering a supportive learning environment.",
      },
      {
        shortDesc:
          "Assisted with full-stack database project development and implementation.",
        longDesc:
          "Assisted students in designing and implementing full-stack database projects using JavaScript/TypeScript and SQL, ensuring proper design and integration of the database.",
      },
      {
        shortDesc:
          "Collaborated with instructors on course alignment and grading.",
        longDesc:
          "Coordinated with course instructors to align project deliverables with course objectives and maintain consistent grading standards.",
      },
    ],
    location: "Vancouver, British Columbia, Canada",
  },
  {
    jobTitle: "Note Taker",
    company: "The University of British Columbia",
    companyShortName: "UBC",
    startDate: new Date("2024-07-01"),
    endDate: new Date("2024-08-31"),
    descriptions: [
      {
        shortDesc:
          "Created and delivered detailed class notes for accessibility purposes.",
        longDesc:
          "Took clear and detailed notes and uploaded those notes to a secure website within 48 hours of each class to assist a student with a disability.",
      },
    ],
    location: "Vancouver, British Columbia, Canada",
  },
  {
    jobTitle: "Teaching Assistant",
    company:
      "Purdue University Gifted Education Research and Resources Institute",
    companyShortName: "GER2I",
    startDate: new Date("2022-07-01"),
    endDate: new Date("2022-07-31"),
    descriptions: [
      {
        shortDesc:
          "Assisted with data science and machine learning instruction using Python.",
        longDesc:
          "Assisted the Professor in demonstrating course concepts regarding basic data science and machine learning concepts, including visualization, linear and logarithmic regression, data cleaning and tidying using Python and libraries such as pandas, matplotlib, turtle, and scipy to a class of 25. Hosted office hours every day for 1 hour to answer students' questions and collected and graded their homework.",
      },
      {
        shortDesc:
          "Delivered computer science workshops on fundamental concepts.",
        longDesc:
          "Delivered computer science concepts and skills to students during three 1.5-hour workshops, including Basic Principles and Components of Computer, Web and Basic Web Development, and Introduction to Using Git and GitHub.",
      },
    ],
    location: "Remote",
  },
];
export const workExperiences = workDetails.map((work) => {
  return {
    title: `${work.jobTitle} - ${work.location}`,
    cardTitle: `${work.startDate.toLocaleDateString()} - ${work.endDate.toLocaleDateString()}`,
    cardSubtitle: `${work.company} (${work.companyShortName})`,
    cardDetailedText: [],
    timelineContent: (
      <>
        {/* <ul>
          {work.descriptions.map((desc, index) => (
            <li key={index} className="mb-2">
              <strong>{desc.shortDesc}</strong>
              <p>{desc.longDesc}</p>
            </li>
          ))}
          <li>
            <strong>Location:</strong> {work.location}
          </li>
        </ul> */}
        <Accordion isCompact>
          {work.descriptions.map((desc, index) => {
            return (
              <AccordionItem
                key={index + desc.shortDesc}
                title={<span className="text-lg">{desc.shortDesc}</span>}
                textValue={desc.shortDesc}
                className=""
              >
                <p className="text-lg">{desc.longDesc}</p>
              </AccordionItem>
            );
          })}
        </Accordion>
      </>
    ),
  };
});
interface WorkExperience {
  jobTitle: string;
  company: string;
  companyShortName: string;
  startDate: Date;
  endDate: Date;
  descriptions: {
    shortDesc: string;
    longDesc: string;
  }[];
  location: string;
}
