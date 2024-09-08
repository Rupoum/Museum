"use client";
import React, { useState } from "react"; // Import useState hook
import { Clock2, User2 } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Main from "./Main";
import { FlipWords } from "./ui/flip-words";
import Highlights from "./Highlights";
import Member from "./Member";
import Footer from "./Footer";
import toast, { Toaster } from "react-hot-toast";
import DialogflowWidget from "./bot";

const Navbar: React.FC = () => {
  const words = ["Culture", "Pride", "Heritage", "Tradition", "Diversity"];

  const [language, setLanguage] = useState<string>("en"); // Add state for language
  const [key, setKey] = useState(0);
  const handleLanguageChange = (selectedLanguage: string) => {
    setLanguage(selectedLanguage);
    setKey((prevKey) => prevKey + 1); // Force re-render by changing the key
  };

  const notify = () =>
    toast.custom((t) => (
      <div
        className={`${
          t.visible ? "animate-enter" : "animate-leave"
        } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      >
        <div className="flex-1 w-0 p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-0.5">
              <User2 />
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-gray-900">Developer</p>
              <p className="mt-1 text-sm text-gray-500">
                Hello! Feature coming soon
              </p>
            </div>
          </div>
        </div>
        <div className="flex border-l border-gray-200">
          <button
            onClick={() => toast.dismiss(t.id)}
            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-black hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Close
          </button>
        </div>
      </div>
    ));

  return (
    <div>
      <Toaster position="bottom-right" reverseOrder={false} />
      {/* Navbar Section */}
      <motion.div className="px-20 py-5 h-32">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 3, ease: "easeOut" }}
          className="flex justify-between items-center"
        >
          <div className="text-3xl font-[400] tracking-wide">
            NATIONAL <span>MUSEUM</span>
            <div className="w-12 h-1 bg-black" />
          </div>
          <div className="flex items-center gap-4">
            <span>
              <Clock2 className="h-6 w-6" />
            </span>
            <p className="text-sm font-semibold">
              Open Every day 10:00 to 19:00
            </p>
            <button
              onClick={notify}
              className="rounded-xl border-2 border-dashed border-black bg-white px-6 py-1 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
            >
              Donate
            </button>

            {/* Language Buttons */}
            <button
              onClick={() => handleLanguageChange("en")}
              className="font-bold hover:text-gray-700 "
            >
              En
            </button>
            <button
              onClick={() => handleLanguageChange("hi")}
              className="font-bold hover:text-gray-700"
            >
              Hi
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 3, ease: "easeOut" }}
          className="uppercase gap-5 flex mt-4"
        >
          <Link href={"#"}>Home</Link>
          <Link href={"#"} className="text-gray-400">
            Visit
          </Link>
          <Link href={"#"} className="text-gray-400">
            Discover
          </Link>
          <Link href={"#"} className="text-gray-400">
            Join & Support
          </Link>
          <Link href={"#"} className="text-gray-400">
            Book Tickets
          </Link>
        </motion.div>
      </motion.div>

      {/* Image and Text Section */}
      <motion.div
        className="relative w-full h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: `url("/assets/museum3.jpg")`,
          transformOrigin: "center",
        }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Text content */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center gap-1 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 2.5 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <h1 className="text-white text-4xl font-bold">
            Welcome to the National Museum{" "}
          </h1>{" "}
          <br />
          <span className="text-white text-3xl">
            An expedition of our{" "}
            <FlipWords className="text-white" words={words} />
          </span>
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <Main />

      {/* Pass selected language to DialogflowWidget */}
      <DialogflowWidget language={language} key={key} />

      <div className="mt-9 bg-black py-28">
        <Highlights />
      </div>
      <Member />
      <Footer />
    </div>
  );
};

export default Navbar;
