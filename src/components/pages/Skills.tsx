import { NavbarPlaceholder } from "@/components/layout";
import { Card, CardBody, Chip } from "@heroui/react";
import { JSX, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEmblaAutoplayProgress, useEmblaPrevNextButtons } from "@/hooks";
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

export function Skills() {
  const progressRef = useRef<HTMLDivElement>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "center",
      loop: true,
      slidesToScroll: 1,
    },
    [Autoplay({ delay: 4000, stopOnInteraction: false })],
  );

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = useEmblaPrevNextButtons(emblaApi);

  const { showAutoplayProgress } = useEmblaAutoplayProgress(
    emblaApi,
    progressRef as React.RefObject<HTMLElement>,
  );

  return (
    <div className="min-h-screen bg-cyan-100">
      <NavbarPlaceholder />
      <div className="flex h-[calc(100vh-4rem)] w-full items-center justify-center">
        <div className="relative w-4/5 max-w-6xl">
          {/* Left button (positioned outside) */}
          <button
            className="embla__button embla__button--prev"
            onClick={onPrevButtonClick}
            disabled={prevBtnDisabled}
            aria-label="Previous slide"
          >
            <svg className="embla__button__svg" viewBox="0 0 532 532">
              <path
                fill="currentColor"
                d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"
              />
            </svg>
          </button>

          <div className="embla">
            {/* Carousel viewport */}
            <div className="embla__viewport" ref={emblaRef}>
              <div className="embla__container">
                {skillsData.map((skill, index) => (
                  <div key={index} className="embla__slide">
                    <Card className="h-full">
                      <CardBody className="p-4">
                        <SkillChip skill={skill} />
                        <div className="mt-4 space-y-2">
                          {getAllSubskills(skill).map((subSkill, subIndex) => (
                            <div key={subIndex} className="ml-4">
                              <SkillChip skill={subSkill} />
                            </div>
                          ))}
                        </div>
                      </CardBody>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Native Embla progress bar */}
            <div
              className={`embla__progress ${
                showAutoplayProgress ? "" : "embla__progress--hidden"
              }`}
            >
              <div className="embla__progress__bar" ref={progressRef} />
            </div>
          </div>

          {/* Right button (positioned outside) */}
          <button
            className="embla__button embla__button--next"
            onClick={onNextButtonClick}
            disabled={nextBtnDisabled}
            aria-label="Next slide"
          >
            <svg className="embla__button__svg" viewBox="0 0 532 532">
              <path
                fill="currentColor"
                d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
              />
            </svg>
          </button>
        </div>
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
