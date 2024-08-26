import React from "react";
import { motion } from "framer-motion";
import { IoLogoJavascript, IoLogoHtml5 } from "react-icons/io5";
import { DiMongodb } from "react-icons/di";
import { LiaNode } from "react-icons/lia";
import { GrReactjs } from "react-icons/gr";
import { SiNextdotjs } from "react-icons/si";

const SkillIcon = ({ Icon, name, link }) => (
  <motion.a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="flex flex-col items-center"
  >
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Icon size={80} className="text-blue-500" />
    </motion.div>
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="mt-2 text-sm text-gray-400"
    >
      {name}
    </motion.span>
  </motion.a>
);

export default function Skillsetui() {
  const skills = [
    {
      Icon: IoLogoJavascript,
      name: "JavaScript",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      Icon: IoLogoHtml5,
      name: "HTML5",
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    { Icon: DiMongodb, name: "MongoDB", link: "https://www.mongodb.com/" },
    { Icon: GrReactjs, name: "React", link: "https://react.dev/" },
    { Icon: LiaNode, name: "Node.js", link: "https://nodejs.org/en" },
    { Icon: SiNextdotjs, name: "Next.js", link: "https://nextjs.org/" },
  ];

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
            className="text-4xl sm:text-5xl font-bold text-blue-500 mt-10"
          >
            My Skillsets
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-gray-400 mt-4 text-lg"
          >
            Technologies I love and work with
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-gray-900 rounded-3xl shadow-2xl overflow-hidden hover:shadow-blue-500/20 hover:shadow-lg transition duration-300 p-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            {skills.map((skill, index) => (
              <SkillIcon key={index} {...skill} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
