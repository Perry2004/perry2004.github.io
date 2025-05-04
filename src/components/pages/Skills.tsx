import { NavbarPlaceholder } from "@/components/layout";
import { Card, CardBody, Chip } from "@heroui/react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { JSX } from "react";
export function Skills() {
  return (
    <div className="min-h-screen bg-cyan-100">
      <NavbarPlaceholder />
      <div className="h-[calc(100vh-4rem)] w-full">
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          plugins={[Autoplay({ delay: 2000 })]}
          className="m-auto w-4/5"
        >
          <CarouselContent>
            {/* {Array.from({ length: numTopLevelSkills }).map((_, index) => (
              <CarouselItem key={index} className="basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardBody className="flex aspect-square items-center justify-center p-6">
                      <span className="text-3xl font-semibold">
                        {index + 1}
                      </span>
                    </CardBody>
                  </Card>
                </div>
              </CarouselItem>
            ))} */}

            {skillsData.map((skill, index) => {
              return (
                <CarouselItem key={index} className="basis-1/3">
                  <div className="">
                    <Card>
                      <CardBody className="">
                        <SkillChip skill={skill} />
                        {/* [TODO] drop all sub-skills in the folder directly for now */}
                        {getAllSubskills(skill).map((subSkill, subIndex) => {
                          return (
                            <div key={subIndex} className="ml-4">
                              <SkillChip skill={subSkill} />
                            </div>
                          );
                        })}
                      </CardBody>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}

/**
 * Recursively get all sub-skills of a given skill.
 * @param skill
 */
function getAllSubskills(skill: SkillInfo): SkillInfo[] {
  const subSkills: SkillInfo[] = [];
  function getSubskillsRecursively(skill: SkillInfo): SkillInfo[] {
    subSkills.push(...skill.subSkills);
    skill.subSkills.forEach(getSubskillsRecursively);
    return subSkills;
  }
  getSubskillsRecursively(skill);
  return subSkills;
}

function SkillChip({ skill }: { skill: SkillInfo }) {
  return (
    <div>
      <Chip startContent={skill.icon}>{skill.name}</Chip>
    </div>
  );
}

interface SkillInfo {
  name: string;
  icon: JSX.Element;
  subSkills: SkillInfo[];
}
import {
  FaCode,
  FaJava,
  FaPython,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaDatabase,
  FaServer,
  FaChartBar,
  FaTable,
  FaBrain,
  FaLanguage,
  FaGithub,
  FaDocker,
  FaAws,
  FaLinux,
  FaCube,
  FaCalculator,
  FaChartLine,
  FaDesktop,
  FaMobileAlt,
  FaGlobe,
  FaTools,
  FaUserGraduate,
  FaFileCode,
  FaLaptopCode,
  FaRProject,
  FaChartPie,
  FaRegFileCode,
} from "react-icons/fa";

import {
  SiTypescript,
  SiCplusplus,
  SiC,
  SiMysql,
  SiOracle,
  SiWebgl,
  SiExpress,
  SiTableau,
  SiBlender,
  SiGit,
  SiVim,
  SiGnubash,
  SiJavascript,
  SiBootstrap,
} from "react-icons/si";

import {
  GiArtificialIntelligence,
  GiMagnifyingGlass,
  GiStaticGuard,
} from "react-icons/gi";

import {
  BsDatabaseGear,
  BsFileBarGraph,
  BsCodeSquare,
  BsFillDatabaseFill,
  BsFiletypeSql,
} from "react-icons/bs";

import {
  TbMathFunction,
  TbMathSymbols,
  TbBrandThreejs,
  TbMatrix,
} from "react-icons/tb";

import {
  MdOutlineDataExploration,
  MdOutlineEngineering,
  MdOutlineStorage,
} from "react-icons/md";

import {
  AiOutlineCloudServer,
  AiOutlineFunction,
  AiOutlineAreaChart,
} from "react-icons/ai";

import { BiTimeFive, BiStats, BiData } from "react-icons/bi";

import { IoLanguage } from "react-icons/io5";

import { RiEnglishInput } from "react-icons/ri";

const skillsData: SkillInfo[] = [
  {
    name: "Programming Languages",
    icon: <FaCode />,
    subSkills: [
      {
        name: "High-level Languages",
        icon: <FaLaptopCode />,
        subSkills: [
          { name: "JavaScript", icon: <SiJavascript />, subSkills: [] },
          { name: "Java", icon: <FaJava />, subSkills: [] },
          { name: "Python", icon: <FaPython />, subSkills: [] },
        ],
      },
      {
        name: "Typed Languages",
        icon: <FaFileCode />,
        subSkills: [
          { name: "TypeScript", icon: <SiTypescript />, subSkills: [] },
          { name: "C", icon: <SiC />, subSkills: [] },
          { name: "C++", icon: <SiCplusplus />, subSkills: [] },
        ],
      },
      {
        name: "Scientific Computing",
        icon: <TbMathFunction />,
        subSkills: [
          { name: "R", icon: <FaRProject />, subSkills: [] },
          { name: "MatLab", icon: <SiCplusplus />, subSkills: [] },
        ],
      },
    ],
  },
  {
    name: "Web Development",
    icon: <FaGlobe />,
    subSkills: [
      {
        name: "Frontend Basics",
        icon: <FaDesktop />,
        subSkills: [
          { name: "HTML 5", icon: <FaHtml5 />, subSkills: [] },
          { name: "CSS 3", icon: <FaCss3Alt />, subSkills: [] },
        ],
      },
      {
        name: "JavaScript Technologies",
        icon: <FaJs />,
        subSkills: [
          { name: "ECMAScript 6", icon: <FaJs />, subSkills: [] },
          { name: "TypeScript", icon: <SiTypescript />, subSkills: [] },
        ],
      },
      {
        name: "UI Frameworks",
        icon: <FaReact />,
        subSkills: [
          { name: "Bootstrap", icon: <SiBootstrap />, subSkills: [] },
          { name: "React", icon: <FaReact />, subSkills: [] },
          { name: "Responsive design", icon: <FaMobileAlt />, subSkills: [] },
        ],
      },
      {
        name: "Graphics & Visualization",
        icon: <FaCube />,
        subSkills: [
          { name: "WebGL", icon: <SiWebgl />, subSkills: [] },
          { name: "Three.js", icon: <TbBrandThreejs />, subSkills: [] },
        ],
      },
      {
        name: "Backend",
        icon: <FaServer />,
        subSkills: [{ name: "Express.js", icon: <SiExpress />, subSkills: [] }],
      },
    ],
  },
  {
    name: "Machine Learning & Data Science",
    icon: <FaBrain />,
    subSkills: [
      {
        name: "Programming Tools",
        icon: <BsCodeSquare />,
        subSkills: [
          { name: "Python", icon: <FaPython />, subSkills: [] },
          { name: "R", icon: <FaRProject />, subSkills: [] },
        ],
      },
      {
        name: "Data Analysis",
        icon: <BsFileBarGraph />,
        subSkills: [
          { name: "Statistical inference", icon: <BiStats />, subSkills: [] },
          { name: "Data preprocessing", icon: <BiData />, subSkills: [] },
          { name: "Visualization", icon: <FaChartBar />, subSkills: [] },
          { name: "Tableau", icon: <SiTableau />, subSkills: [] },
          {
            name: "Interpretation",
            icon: <GiMagnifyingGlass />,
            subSkills: [],
          },
        ],
      },
      {
        name: "Machine Learning",
        icon: <GiArtificialIntelligence />,
        subSkills: [
          {
            name: "Feature engineering",
            icon: <MdOutlineEngineering />,
            subSkills: [],
          },
          {
            name: "Recommender systems",
            icon: <AiOutlineFunction />,
            subSkills: [],
          },
          {
            name: "Time series prediction",
            icon: <BiTimeFive />,
            subSkills: [],
          },
        ],
      },
    ],
  },
  {
    name: "Database Design and Management",
    icon: <FaDatabase />,
    subSkills: [
      {
        name: "Database Design",
        icon: <BsDatabaseGear />,
        subSkills: [
          {
            name: "Relational DB design",
            icon: <BsFillDatabaseFill />,
            subSkills: [],
          },
          { name: "ER model", icon: <FaChartLine />, subSkills: [] },
          {
            name: "DB normalization",
            icon: <MdOutlineDataExploration />,
            subSkills: [],
          },
        ],
      },
      {
        name: "Database Theory",
        icon: <FaUserGraduate />,
        subSkills: [
          {
            name: "Relational algebra",
            icon: <TbMathSymbols />,
            subSkills: [],
          },
        ],
      },
      {
        name: "Database Technologies",
        icon: <MdOutlineStorage />,
        subSkills: [
          { name: "SQL", icon: <BsFiletypeSql />, subSkills: [] },
          { name: "MySQL DB", icon: <SiMysql />, subSkills: [] },
          { name: "OracleDB", icon: <SiOracle />, subSkills: [] },
          { name: "Data warehousing", icon: <FaTable />, subSkills: [] },
        ],
      },
    ],
  },
  {
    name: "Math & Statistics",
    icon: <FaCalculator />,
    subSkills: [
      {
        name: "Mathematics",
        icon: <TbMathFunction />,
        subSkills: [
          {
            name: "Differential & Integral calculus",
            icon: <AiOutlineFunction />,
            subSkills: [],
          },
          {
            name: "Matrix and linear algebra",
            icon: <TbMatrix />,
            subSkills: [],
          },
          {
            name: "Mathematical proof",
            icon: <FaRegFileCode />,
            subSkills: [],
          },
        ],
      },
      {
        name: "Statistics",
        icon: <FaChartPie />,
        subSkills: [
          {
            name: "Statistical inference",
            icon: <GiStaticGuard />,
            subSkills: [],
          },
          {
            name: "Probability theory",
            icon: <AiOutlineAreaChart />,
            subSkills: [],
          },
        ],
      },
    ],
  },
  {
    name: "(Human) Languages",
    icon: <IoLanguage />,
    subSkills: [
      { name: "Chinese - native", icon: <FaLanguage />, subSkills: [] },
      { name: "English - fluent", icon: <RiEnglishInput />, subSkills: [] },
    ],
  },
  {
    name: "Tools & Technologies",
    icon: <FaTools />,
    subSkills: [
      {
        name: "Version Control",
        icon: <FaGithub />,
        subSkills: [
          { name: "Git", icon: <SiGit />, subSkills: [] },
          { name: "GitHub", icon: <FaGithub />, subSkills: [] },
        ],
      },
      {
        name: "Containerization",
        icon: <FaDocker />,
        subSkills: [{ name: "Docker", icon: <FaDocker />, subSkills: [] }],
      },
      {
        name: "Development Environment",
        icon: <FaDocker />,
        subSkills: [
          { name: "Vim/nvim", icon: <SiVim />, subSkills: [] },
          { name: "zsh", icon: <SiGnubash />, subSkills: [] },
        ],
      },
      {
        name: "Cloud & Systems",
        icon: <AiOutlineCloudServer />,
        subSkills: [
          { name: "AWS", icon: <FaAws />, subSkills: [] },
          { name: "Linux", icon: <FaLinux />, subSkills: [] },
        ],
      },
      {
        name: "Graphics Tools",
        icon: <FaCube />,
        subSkills: [{ name: "Blender", icon: <SiBlender />, subSkills: [] }],
      },
    ],
  },
];
