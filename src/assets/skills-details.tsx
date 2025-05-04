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
import { GiMagnifyingGlass } from "react-icons/gi";
import { BsDatabaseGear, BsFileBarGraph, BsFiletypeSql } from "react-icons/bs";
import { TbMathFunction, TbBrandThreejs, TbMatrix } from "react-icons/tb";
import {
  MdOutlineDataExploration,
  MdOutlineEngineering,
  MdOutlineStorage,
} from "react-icons/md";
import { BiTimeFive } from "react-icons/bi";
import { IoLanguage } from "react-icons/io5";
import { RiEnglishInput } from "react-icons/ri";
import { SkillCategory } from "@/components/pages";

export const skillsData: SkillCategory[] = [
  {
    name: "Programming Languages",
    icon: <FaCode />,
    skills: [
      { name: "JavaScript", icon: <FaJs /> },
      { name: "Java", icon: <FaJava /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Python", icon: <FaPython /> },
      { name: "R", icon: <FaRProject /> },
      { name: "C", icon: <SiC /> },
      { name: "C++", icon: <SiCplusplus /> },
      { name: "MatLab", icon: <SiC /> },
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
      { name: "React", icon: <FaReact /> },
      { name: "Responsive design", icon: <FaChartBar /> },
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
      { name: "Statistical inference", icon: <BsFileBarGraph /> },
      { name: "Data preprocessing", icon: <MdOutlineDataExploration /> },
      { name: "Feature engineering", icon: <MdOutlineEngineering /> },
      { name: "Recommender systems", icon: <GiMagnifyingGlass /> },
      { name: "Time series prediction", icon: <BiTimeFive /> },
      { name: "Interpretation", icon: <BsFileBarGraph /> },
      { name: "Visualization", icon: <FaChartBar /> },
      { name: "Tableau", icon: <SiTableau /> },
    ],
  },
  {
    name: "Database Design and Management",
    icon: <FaDatabase />,
    skills: [
      { name: "Relational DB design", icon: <BsDatabaseGear /> },
      { name: "ER model", icon: <BsDatabaseGear /> },
      { name: "DB normalization", icon: <BsDatabaseGear /> },
      { name: "Relational algebra", icon: <BsFiletypeSql /> },
      { name: "SQL", icon: <BsFiletypeSql /> },
      { name: "MySQL DB", icon: <SiMysql /> },
      { name: "OracleDB", icon: <SiOracle /> },
      { name: "Data warehousing", icon: <MdOutlineStorage /> },
    ],
  },
  {
    name: "Math & Statistics",
    icon: <FaCalculator />,
    skills: [
      { name: "Differential & Integral calculus", icon: <TbMathFunction /> },
      { name: "Matrix and linear algebra", icon: <TbMatrix /> },
      { name: "Statistical inference", icon: <BsFileBarGraph /> },
      { name: "Mathematical proof", icon: <TbMathFunction /> },
      { name: "Probability theory", icon: <BsFileBarGraph /> },
    ],
  },
  {
    name: "(Human) Languages",
    icon: <FaLanguage />,
    skills: [
      { name: "Chinese - native", icon: <IoLanguage /> },
      { name: "English - fluent", icon: <RiEnglishInput /> },
    ],
  },
  {
    name: "Tools & Technologies",
    icon: <FaGithub />,
    skills: [
      { name: "Git", icon: <SiGit /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Docker", icon: <FaDocker /> },
      { name: "Vim/nvim", icon: <SiVim /> },
      { name: "zsh", icon: <SiGnubash /> },
      { name: "AWS", icon: <FaAws /> },
      { name: "Linux", icon: <FaLinux /> },
      { name: "Blender", icon: <SiBlender /> },
    ],
  },
];
