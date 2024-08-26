import React from "react";
import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="h-screen w-full bg-gradient-to-b from-black to-gray-800 text-white">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center h-full"
        >
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-4xl sm:text-7xl font-bold"
          >
            Hello, It's Me
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-4xl sm:text-7xl font-bold text-blue-500 py-2"
          >
            Prity Tewary
          </motion.h1>
          <motion.h3
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-2xl sm:text-4xl py-2"
          >
            And I'm a <span className="text-blue-500">Frontend Developer</span>
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="text-gray-500 py-4 max-w-md"
          >
            I'm a programmer, Security Researcher and Opensource Enthusiast. I
            am potential on Frontend and Backend development with Javascript &
            Typescript. See my Skillsets & Projects for more.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="flex space-x-4 mt-4"
          >
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              <FaFacebook className="text-3xl cursor-pointer hover:text-blue-500" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              <FaGithub className="text-3xl cursor-pointer hover:text-gray-400" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              <FaTwitter className="text-3xl cursor-pointer hover:text-blue-400" />
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2"
        >
          <div className="relative mt-8 md:mt-0">
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-500"
            >
              <img
                src="/hero.png"
                alt="Prity Tewary"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              animate={{
                opacity: [0.5, 0.8, 0.5],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur opacity-75"
            ></motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
