import {
  FaCode,
  FaJava,
  FaPython,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaDatabase,
  FaChartBar,
  FaLanguage,
  FaGithub,
  FaDocker,
  FaAws,
  FaLinux,
  FaCalculator,
  FaRProject,
  FaServer,
  FaMobileAlt,
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
  SiTailwindcss,
  SiSass,
  SiPostgresql,
} from "react-icons/si";
import { GiMagnifyingGlass, GiEarthAmerica, GiJapan } from "react-icons/gi";
import { BsDatabaseGear, BsFiletypeSql, BsDiagram3 } from "react-icons/bs";
import { TbMathFunction, TbBrandThreejs, TbMatrix } from "react-icons/tb";
import {
  MdOutlineDataExploration,
  MdOutlineEngineering,
  MdOutlineStorage,
  MdScience,
  MdArchitecture,
} from "react-icons/md";
import { BiTimeFive, BiStats } from "react-icons/bi";
import { IoGameController } from "react-icons/io5";
import { RiEnglishInput } from "react-icons/ri";
import { SkillCategory } from "@/components/pages";

export const skillsData: SkillCategory[] = [
  {
    name: "Programming Languages",
    icon: <FaCode />,
    skills: [
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Java", icon: <FaJava /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "Python", icon: <FaPython /> },
      { name: "R", icon: <FaRProject /> },
      { name: "C", icon: <SiC /> },
      { name: "C++", icon: <SiCplusplus /> },
      { name: "Matlab", icon: <MdScience /> },
    ],
  },
  {
    name: "Web Development",
    icon: <FaReact />,
    skills: [
      { name: "HTML 5", icon: <FaHtml5 /> },
      { name: "CSS 3", icon: <FaCss3Alt /> },
      { name: "ECMAScript 6", icon: <SiJavascript /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Bootstrap", icon: <SiBootstrap /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Sass", icon: <SiSass /> },
      { name: "React", icon: <FaReact /> },
      { name: "Responsive Design", icon: <FaMobileAlt /> },
      { name: "WebGL", icon: <SiWebgl /> },
      { name: "Three.js", icon: <TbBrandThreejs /> },
      { name: "Express.js", icon: <SiExpress /> },
    ],
  },
  {
    name: "Machine Learning & Data Science",
    icon: <MdOutlineDataExploration />,
    skills: [
      { name: "Python", icon: <FaPython /> },
      { name: "R", icon: <FaRProject /> },
      { name: "Statistical Inference", icon: <BiStats /> },
      { name: "Data Preprocessing", icon: <MdOutlineDataExploration /> },
      { name: "Feature Engineering", icon: <MdOutlineEngineering /> },
      { name: "Recommender Systems", icon: <GiMagnifyingGlass /> },
      { name: "Time Series Prediction", icon: <BiTimeFive /> },
      { name: "Interpretation", icon: <MdArchitecture /> },
      { name: "Visualization", icon: <FaChartBar /> },
      { name: "Tableau", icon: <SiTableau /> },
    ],
  },
  {
    name: "Database Design and Management",
    icon: <FaDatabase />,
    skills: [
      { name: "Relational DB Design", icon: <BsDatabaseGear /> },
      { name: "ER Model", icon: <BsDiagram3 /> },
      { name: "DB Normalization", icon: <BsDatabaseGear /> },
      { name: "Relational Algebra", icon: <BsFiletypeSql /> },
      { name: "SQL", icon: <BsFiletypeSql /> },
      { name: "MySQL DB", icon: <SiMysql /> },
      { name: "OracleDB", icon: <SiOracle /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "Data Warehousing", icon: <MdOutlineStorage /> },
    ],
  },
  {
    name: "Math & Statistics",
    icon: <FaCalculator />,
    skills: [
      { name: "Advanced Calculus", icon: <TbMathFunction /> },
      { name: "Linear Algebra", icon: <TbMatrix /> },
      { name: "Statistical Inference", icon: <BiStats /> },
      { name: "Mathematical Proof", icon: <TbMathFunction /> },
      { name: "Probability Theory", icon: <FaCalculator /> },
    ],
  },
  {
    name: "(Human) Languages",
    icon: <FaLanguage />,
    skills: [
      { name: "Chinese - Native", icon: <GiEarthAmerica /> },
      { name: "English - Fluent", icon: <RiEnglishInput /> },
      { name: "Japanese - Beginner", icon: <GiJapan /> },
    ],
  },
  {
    name: "Tools & Technologies",
    icon: <FaGithub />,
    skills: [
      { name: "Git", icon: <SiGit /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Docker", icon: <FaDocker /> },
      { name: "Vim/Nvim", icon: <SiVim /> },
      { name: "Zsh", icon: <SiGnubash /> },
      { name: "AWS", icon: <FaAws /> },
      { name: "Linux", icon: <FaLinux /> },
      { name: "Blender", icon: <SiBlender /> },
      {
        name: "Minecraft Plugin & Mod",
        icon: <IoGameController />,
      },
      { name: "MC Server Management", icon: <FaServer /> },
    ],
  },
];
