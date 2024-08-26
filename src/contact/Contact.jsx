"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contactui() {
  const [data, setdata] = useState({
    email: "",
    name: "",
    subject: "",
    message: "",
  });

  const contact = async () => {
    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (response.ok) {
      alert("Message was sent");
    } else {
      alert(json.message);
    }
  };

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
            Contact Me
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-gray-400 mt-4 text-lg"
          >
            I'd love to hear from you! Fill out the form below to get in touch.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-gray-900 rounded-3xl shadow-2xl overflow-hidden hover:shadow-blue-500/20 hover:shadow-lg transition duration-300 p-8"
        >
          <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <label
                htmlFor="name"
                className="block text-blue-500 font-bold mb-2"
              >
                I'm
              </label>
              <input
                type="text"
                id="name"
                className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg py-2 px-4 focus:outline-none focus:border-blue-500 transition duration-300"
                value={data.name}
                onChange={(e) => setdata({ ...data, name: e.target.value })}
                placeholder="Your Name"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <label
                htmlFor="subject"
                className="block text-blue-500 font-bold mb-2"
              >
                and contacting you because,
              </label>
              <select
                id="subject"
                className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg py-2 px-4 focus:outline-none focus:border-blue-500 transition duration-300"
                value={data.subject}
                onChange={(e) => setdata({ ...data, subject: e.target.value })}
              >
                <option value="I wanted to say Hi">I wanted to say Hi</option>
                <option value="I wanted to give you a job">
                  I wanted to give you a job
                </option>
                <option value="Something Product Related">
                  Something Product Related
                </option>
                <option value="To appreciate your work">
                  To appreciate your work
                </option>
              </select>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <label
                htmlFor="email"
                className="block text-blue-500 font-bold mb-2"
              >
                Here is my Email Address:
              </label>
              <input
                type="email"
                id="email"
                className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg py-2 px-4 focus:outline-none focus:border-blue-500 transition duration-300"
                value={data.email}
                onChange={(e) => setdata({ ...data, email: e.target.value })}
                placeholder="your.email@example.com"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <label
                htmlFor="message"
                className="block text-blue-500 font-bold mb-2"
              >
                I wanted to tell you this
              </label>
              <textarea
                id="message"
                className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg py-2 px-4 focus:outline-none focus:border-blue-500 transition duration-300"
                rows={4}
                value={data.message}
                onChange={(e) => setdata({ ...data, message: e.target.value })}
                placeholder="Your message here..."
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
                onClick={contact}
              >
                Send to Prity
              </motion.button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
