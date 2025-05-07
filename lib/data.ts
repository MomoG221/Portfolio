import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import concordiaMaps from "@/public/projects/concordiamaps.jpeg";
import carRentalImg from "@/public/projects/car.png";
import lesson from "@/public/projects/342.png";
import soccerdb from "@/public/projects/soccerdb.png";
import aijob from "@/public/projects/ai.png";
import file from "@/public/projects/file.jpg";

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
    title: "Software Engineering at Concordia University",
    location: "Montreal, QC",
    description:
      "Pursuing a Bachelor's in Software Engineering at Concordia University, with coursework in Object-Oriented Programming, Web Programming, Software Architecture, and UI Design.",
    icon: React.createElement(LuGraduationCap),
    date: "Sep 2022 – May 2026",
  },
  {
    title: "Full-Stack & Academic Projects",
    location: "Montreal, QC",
    description:
      "Built multiple academic and personal projects using React, Svelte, NestJS, Java, SQL, and AWS. Projects include a car rental platform, campus navigation app, and an AI-driven job analyzer.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 – Present",
  },
  {
    title: "Seeking Internship",
    location: "Remote / Montreal",
    description:
      "Actively pursuing software engineering internship opportunities to contribute to impactful projects and grow my skills in real-world environments.",
    icon: React.createElement(FaReact),
    date: "2025",
  },
] as const;



export const projectsData = [
  {
    title: "Navigation App",
    description:
      "Mobile app for indoor/outdoor navigation at Concordia. Integrated Google Calendar and SonarQube, improving test coverage and reliability.",
    tags: ["React Native", "JavaScript", "Jest", "SonarQube"],
    imageUrl: concordiaMaps,
    source: "https://github.com/SOEN-390-pmzone/SOEN-_390-Q-QD",
  },
  {
    title: "Car Rental App",
    description:
      "Full-stack booking platform with Svelte frontend, NestJS backend, and PostgreSQL database. Led frontend optimization and backend API security.",
    tags: ["Svelte", "NestJS", "PostgreSQL"],
    imageUrl: carRentalImg,
    source: "https://github.com/apollinelbcr/team_1-soen341projectW2024",
  },
  {
    title: "Lesson Scheduler",
    description:
      "Java system for managing lessons with multi-threading and SQL integration. Supported multiple user roles with tailored functionalities.",
    tags: ["Java", "SQL"],
    imageUrl: lesson,
    source: "https://github.com/MomoG221/Lesson-Scheduler",
  },
  {
    title: "Soccer DB Project",
    description:
      "Used Python and APIs to build a PostgreSQL/Neo4j database. Improved query performance and visualized player relationships with graph models.",
    tags: ["Python", "PostgreSQL", "Neo4j"],
    imageUrl: soccerdb,
    source: "https://github.com/mcndl13/SOEN-363-Project",
  },
  {
    title: "AI Job Analyzer",
    description:
      "Developing an AI tool for matching resumes to job descriptions using Gemini and Make.com, with automation and semantic analysis features.",
    tags: ["ReactJS", "ExpressJS", "Gemini", "Make.com"],
    imageUrl: aijob,
    source: "https://github.com/MomoG221/AI-Job-Analyzer"
    
  },
  {
    title: "File Upload System",
    description:
      "React + Spring Boot system using AWS S3 for secure file uploads.",
    tags: ["React", "Spring Boot", "AWS", "Docker"],
    imageUrl: file,
    source: "https://github.com/MomoG221/File-Upload-System"

  },

] as const;



export const skillsData = [
  // Core Programming Languages
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "Python",
  "Java",
  "SQL",

  // Frontend Frameworks & Libraries
  "ReactJS",
  "Svelte",
  "Tailwind CSS",

  // Backend Frameworks & Libraries
  "NodeJS",
  "ExpressJS",
  "NestJS",
  "Spring Boot",

  // Databases
  "PostgreSQL",

  // Cloud & DevOps
  "AWS",

  // Tools & Platforms
  "Git/GitHub",
  "Postman",
  "Figma",
  "SonarQube",
  "PowerBI",
  "Microsoft Office",

  // Testing
  "Jest",

] as const;


