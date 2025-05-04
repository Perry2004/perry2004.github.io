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
import { SkillInfo } from "@/components/pages";

export const skillsData: SkillInfo[] = [
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
