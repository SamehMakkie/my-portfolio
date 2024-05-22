import React from "react";
import IconLink from "../../components/IconLink/IconLink";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="w-full flex flex-col gap-3 py-10 justify-center items-center">
      <div className="flex gap-3">
        <IconLink link="https://linkedin.com/in/sameh-makkie-286306207" Icon={FaLinkedin} color="text-blue-700" />
        <IconLink link="https://github.com/SamehMakkie?tab=repositories" Icon={FaGithub} color="text-black" />
      </div>
      <p className="text-black text-md text-center">Sameh Makkie</p>
      <p className="text-black text-md text-center">
        © {year} - All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
