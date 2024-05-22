"use client";
import React, { useRef } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

const Contact = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isHeadingView = useInView(headingRef, { once: true });
  const isFormView = useInView(formRef, { once: true });

  return (
    <section className="w-full min-h-screen flex flex-col px-5 sm:px-16 py-28 md:px-32 gap-24 justify-center items-center">
      <motion.h2
        ref={headingRef}
        style={{
          transform: isHeadingView ? "none" : "translateY(200px)",
          opacity: isHeadingView ? 1 : 0,
          transition: "all 1s",
        }}
        className="text-[15vw] md:text-[10vw] lg:text-[146px] text-black font-bold text-center">
        Contact
      </motion.h2>
      <motion.form
        ref={formRef}
        style={{
          transform: isHeadingView ? "none" : "translateY(200px)",
          opacity: isHeadingView ? 1 : 0,
          transition: "all 1s",
        }}
        className="w-full max-w-2xl flex flex-col p-12 sm:p-32 gap-20 rounded-[75px] sm:rounded-[150px] bg-black">
        <div className="flex flex-col gap-5 items-center">
          <div className="w-full flex p-3 gap-2 border rounded-xl items-center text-white border-white transition-colors duration-500 focus-within:border-blue-500 focus-within:text-blue-500 focus-within:border-2">
            <MdOutlineEmail size={24} className="" />
            <input
              type="text"
              className="grow bg-transparent text-white placeholder:text-gray-400 focus:outline-none"
              placeholder="Email"
            />
          </div>

          <textarea
            placeholder="Message"
            rows={5}
            className="w-full flex p-3 gap-2 border rounded-xl items-center bg-transparent text-white border-white focus:outline-none transition-colors duration-500 focus-within:border-blue-500  focus-within:border-2"
          />
          <button className="w-full p-3 bg-white text-black rounded-xl focus:outline-none transition-colors duration-500 focus:border-blue-500 focus:border-2">
            Send
          </button>
        </div>
      </motion.form>
    </section>
  );
};

export default Contact;
