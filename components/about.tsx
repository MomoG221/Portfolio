"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      As I work toward completing my Software Engineering degree at Concordia University, 
      I’ve immersed myself in a wide range of projects that have deepened my appreciation 
      for both front-end and back-end development. From designing intuitive UIs with Svelte 
      and React to building robust server-side logic using NestJS and Express, 
      I’ve enjoyed bringing ideas to life through code. My technical toolkit includes 
      languages like Java, Python, SQL, and JavaScript, and I’ve worked with frameworks such as 
      ReactJS, NodeJS, and PostgreSQL.
      </p>

      <p>
      Outside of coding, I value a balanced lifestyle. Whether I’m hitting the gym or diving
       into a competitive match in a video game, I find that staying active keeps me sharp 
       and energized. With a strong foundation in software development and a genuine curiosity for learning, 
       I’m excited to step into a professional environment where I can take on real-world challenges and grow as a developer.
      </p>
    </motion.section>
  );
}
