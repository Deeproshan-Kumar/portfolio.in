import { FaHome } from "react-icons/fa";

import {
  FaGraduationCap,
  FaServicestack,
  FaMagic,
  FaBriefcase,
  FaLinkedin,
  FaGithub,
  FaCode,
  FaWhatsapp,
  FaSms,
  FaPhp,
  FaWordpress,
  FaElementor,
  FaGit,
} from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

// Navmenu Config
export const navMenus = [
  {
    id: 1,
    name: "Home",
    link: "/",
    icon: <FaHome />,
  },
  {
    id: 2,
    name: "About",
    link: "/about",
    icon: <FaGraduationCap />,
  },
  {
    id: 3,
    name: "Services",
    link: "/services",
    icon: <FaServicestack />,
  },
  {
    id: 4,
    name: "Skills",
    link: "/skills",
    icon: <FaMagic />,
  },
  {
    id: 5,
    name: "Projects",
    link: "/projects",
    icon: <FaBriefcase />,
  },
  {
    id: 6,
    name: "Contact",
    link: "/contact",
    icon: <FaPhone />,
  },
];

// Social Menu Config
export const socialMenus = [
  {
    id: 1,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/deeproshan-kumar/",
    icon: <FaLinkedin />,
  },
  {
    id: 2,
    name: "Github",
    link: "https://github.com/Deeproshan-Kumar",
    icon: <FaGithub />,
  },
  {
    id: 3,
    name: "Leetcode",
    link: "https://leetcode.com/u/deeproshankumar123/",
    icon: <FaCode />,
  },
  {
    id: 4,
    name: "WhatsApp",
    link: "https://wa.me/+917271053944?text=Hi Deeproshan",
    icon: <FaWhatsapp />,
  },
  {
    id: 5,
    name: "SMS",
    link: "sms:+917271053944;?body=Hi Deeproshan",
    icon: <FaSms />,
  },
];

// Educations Config
export const educations = [
  {
    id: 1,
    title: "B.Tech in Information Technology",
    subtitle: "Dr. MC Saxena College of Engineering & Technology",
    description: "Lucknow, India",
    datetime: "2022-Present",
  },
  {
    id: 2,
    title: "Diploma in Information Technology",
    subtitle: "Government Polytechnic Lucknow",
    description: "Lucknow, India",
    datetime: "2018-2021",
  },
  {
    id: 3,
    title: "Intermediate (PCM)",
    subtitle: "Modern Inter College",
    description: "Azamgarh, India",
    datetime: "2015-2017",
  },
  {
    id: 4,
    title: "High School",
    subtitle: "Sarswati Gyan Mandir",
    description: "Azamgarh, India",
    datetime: "2015",
  },
];

// Experiences Config
export const experiences = [
  {
    id: 1,
    title: "SDE | Sr. Front End Developer",
    subtitle: "Singsys Pte. Ltd.",
    description: "Lucknow, India",
    datetime: "Feb 2022-Jan 2025",
  },
  {
    id: 2,
    title: "Web Developer - Intern",
    subtitle: "Techpile Technology Pvt. Ltd.",
    description: "Lucknow, India",
    datetime: "Sep 2021-Feb 2022",
  },
];

// Skills Config
import {
  FaHtml5,FaCss3,FaJs,FaSass,FaBootstrap,FaReact
} from "react-icons/fa6";

import {
  SiTypescript,SiTailwindcss,SiRedux
} from "react-icons/si";

import { RiNextjsLine } from "react-icons/ri";

export const skills = [
  {
    id: 1,
    name: "HTML",
    percentage: 95,
    icon: <FaHtml5 />,
  },
  {
    id: 2,
    name: "CSS",
    percentage: 95,
    icon: <FaCss3 />,
  },
  {
    id: 3,
    name: "JavaScript",
    percentage: 90,
    icon: <FaJs />,
  },
  {
    id: 4,
    name: "TypeScript",
    percentage: 85,
    icon: <SiTypescript />,
  },
  {
    id: 5,
    name: "SASS/SCSS",
    percentage: 90,
    icon: <FaSass />,
  },
  {
    id: 6,
    name: "Bootstrap",
    percentage: 90,
    icon: <FaBootstrap />,
  },
  {
    id: 7,
    name: "Tailwind CSS",
    percentage: 90,
    icon: <SiTailwindcss />,
  },
  {
    id: 8,
    name: "ReactJS",
    percentage: 85,
    icon: <FaReact />,
  },
  {
    id: 9,
    name: "Redux Toolkit",
    percentage: 80,
    icon: <SiRedux />,
  },
  {
    id: 10,
    name: "NextJS",
    percentage: 70,
    icon: <RiNextjsLine />,
  },
  {
    id: 11,
    name: "PHP",
    percentage: 80,
    icon: <FaPhp />,
  },
  {
    id: 12,
    name: "WordPress",
    percentage: 85,
    icon: <FaWordpress />,
  },
  {
    id: 13,
    name: "Elementor",
    percentage: 90,
    icon: <FaElementor />,
  },
  {
    id: 14,
    name: "Git & Github",
    percentage: 85,
    icon: <FaGit />,
  },
];
