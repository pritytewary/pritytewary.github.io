"use client";

import React from "react";
import { BsBrowserEdge } from "react-icons/bs";
import { FaGithubAlt } from "react-icons/fa6";
import { motion } from "framer-motion";

const works = [
  {
    title: "My Portfolio",
    description:
      "You can check my professional profile and showcase of skills.",
    liveLink: "#",
    githubLink: "https://github.com/pritytewary/pritytewary.github.io",
    imageSrc: "/portfolio.png",
  },

  {
    title: "Calendar Event",
    description: "User can Manage your event with dates ",
    liveLink: "https://calendar-event-beryl.vercel.app/",
    githubLink: "https://github.com/pritytewary/Calendar-Event",
    imageSrc: "/calendar.png",
  },

  {
    title: "School-Management",
    description: "Admin can manages school ",
    liveLink: "https://school-management-system-navy.vercel.app/",
    githubLink: "https://github.com/pritytewary/School-Management-System",
    imageSrc: "/schoolwebsite.png",
  },

  {
    title: "uifry",
    description: "Admin can manages school ",
    liveLink: "https://app-landing-page-theta.vercel.app/",
    githubLink: "https://github.com/pritytewary/app-landing-page",
    imageSrc: "/uifry.png",
  },
];

export default function Workui() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-black to-gray-800 text-white py-16 px-4">
      <div className="max-w-screen-lg mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-4xl sm:text-5xl font-bold text-blue-500 mt-10 font-nunito"
          >
            My Works
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-gray-400 mt-4 text-lg"
          >
            Some of my works which I love are listed here. Other Open Source
            projects can be found on my Github.
          </motion.p>
        </motion.div>

        {works.map((work, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="bg-gray-900 rounded-3xl shadow-2xl overflow-hidden hover:shadow-blue-500/20 hover:shadow-lg transition duration-300 mb-12"
          >
            <div className="md:flex items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                className="md:w-1/2 p-8"
              >
                <h2 className="text-2xl font-bold text-blue-500 mb-2 font-signature">
                  {work.title}
                </h2>
                <p className="text-gray-400 mb-6 font-nunito">
                  {work.description}
                </p>
                <div className="flex space-x-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={work.liveLink}
                    className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
                  >
                    <BsBrowserEdge className="mr-2" /> View Live
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={work.githubLink}
                    className="flex items-center justify-center px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition duration-300"
                  >
                    <FaGithubAlt className="mr-2" /> GitHub
                  </motion.a>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                className="md:w-1/2 p-8"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                    rotate: [0, 2, -2, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="relative overflow-hidden rounded-lg"
                >
                  <img
                    src={work.imageSrc}
                    alt={`${work.title} Preview`}
                    className="w-full h-auto object-cover"
                  />
                  <motion.div
                    animate={{
                      opacity: [0.5, 0.7, 0.5],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg blur"
                  ></motion.div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
