import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      name="About"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-screen-lg p-8 mx-auto flex flex-col justify-center w-full h-full"
      >
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="pb-8"
        >
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </motion.div>

        <motion.p
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-xl mt-20"
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, sit
          voluptatem architecto explicabo similique aspernatur vero soluta,
          asperiores minus maiores reiciendis pariatur quos natus voluptatum
          earum alias incidunt quis distinctio.
        </motion.p>

        <motion.p
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl mt-4"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
          inventore beatae quaerat officiis commodi ipsam veritatis eaque omnis
          explicabo optio dolor praesentium atque in similique maxime
          consequuntur, alias deleniti sequi eius accusantium labore? Iusto,
          nihil expedita, earum adipisci maiores consequatur vitae harum
          corrupti, incidunt mollitia voluptatibus beatae pariatur illum
          voluptatem.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default About;
