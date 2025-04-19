import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import concordiaMaps from "@/public/projects/concordiamaps.jpeg";
import carRentalImg from "@/public/projects/car.png";
import tictactoe from "@/public/projects/tictactoe.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Started Software Engineering at Concordia",
    location: "Montreal, QC",
    description:
      "Began my Bachelor's degree in Software Engineering at Concordia University, where I explored both theoretical foundations and practical applications of software development.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - Present",
  },
  {
    title: "Academic + Personal Full-Stack Projects",
    location: "Montreal, QC",
    description:
      "Worked on several full-stack web applications including a car rental system, blog platform, and task manager. Gained hands-on experience with Svelte, React, NestJS, Node.js, SQL, and PostgreSQL.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - Present",
  },
  {
    title: "Looking for Internship / Full-Time Opportunities",
    location: "Remote / Montreal",
    description:
      "Currently seeking an internship or entry-level full-time opportunity to apply my skills in a real-world environment and grow as a software engineer.",
    icon: React.createElement(FaReact),
    date: "2025",
  },
] as const;


export const projectsData = [
  {
    title: "ConcordiaMaps",
    description:
      "The project aims to develop a car rental web application leveraging a Micro Service architecture.",
    tags: ["Svelte", "Nest", "PostgreSQL,"],
    imageUrl: concordiaMaps,
    source: "https://github.com/apollinelbcr/team_1-soen341projectW2024",
  },
  {
    title: "Car Rental",
    description:
      "The project aims to develop a car rental web application leveraging a Micro Service architecture.",
    tags: ["Svelte", "Nest", "PostgreSQL,"],
    imageUrl:carRentalImg,
    source: "https://github.com/apollinelbcr/team_1-soen341projectW2024",
  },
  {
    title: "Spring Boot",
    description:
      "Under development",
    tags: ["React", "SprintBoot", "AWS", "Docker" ] ,
    imageUrl: carRentalImg,
    source: "https://github.com/apollinelbcr/team_1-soen341projectW2024",
  },
  {
    title: "Lesson Scheduler",
    description:
      "Developed a Java-based system with SQL integration to manage lesson offerings and bookings.",
    tags: ["Java", "SQL"],
    imageUrl: carRentalImg,
    source: "https://github.com/Sawanoza/SOEN342",
  },
  {
    title: "Databse",
    description:
      "Developed a Java-based system with SQL integration to manage lesson offerings and bookings.",
    tags: ["Java", "SQL"],
    imageUrl: carRentalImg,
    source: "https://github.com/Sawanoza/SOEN342",
  },

  {
    title: "Tic-Tac-Toe",
    description:
      "This project is a Tic-Tac-Toe game that allows two players to play against each other.",
    tags: ["React", "HTML", "CSS"],
    imageUrl: tictactoe,
    source: "https://github.com/MomoG221/Tic-Tac-Toe",
  }

] as const;


export const skillsData = [
  // Core Programming Languages
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Java",
  "Python",
  "SQL",

  // Frontend Frameworks & Libraries
  "React",
  "Svelte",
  "Tailwind CSS",

  // Backend Frameworks & Libraries
  "Node",
  "Express",
  "Nest",
  "SpringBoot",

  // Databases
  "PostgreSQL",
  "MongoDB",

  // Tools & Platforms
  "GitHub",
  "Figma",

  // Testing
  "Jest"
] as const;

