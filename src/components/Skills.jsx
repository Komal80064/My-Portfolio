import React from "react";
import {  FaJava,FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";
import { TbSql, TbSquareLetterA } from "react-icons/tb";

const Skills = () => {
  const skills = [
    { name: "HTML", level: "95%", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", level: "90%", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", level: "85%", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "React.js", level: "80%", icon: <FaReact className="text-cyan-400" /> },
    { name: "Tailwind CSS", level: "85%", icon: <SiTailwindcss className="text-teal-400" /> },
    { name: "Node.js", level: "75%", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Express.js", level: "70%", icon: <SiExpress className="text-gray-300" /> },
    { name: "MongoDB", level: "70%", icon: <SiMongodb className="text-green-400" /> },
    { name: "Git & Github", level: "90%", icon: <FaGitAlt className="text-orange-400" /> },
    { name: "Java", level: "80%", icon: < FaJava className="text-teal-400" /> },
    { name: "SQL", level: "90%", icon: <TbSql className="text-purple-400" /> },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen bg-gray-950 text-white flex flex-col items-center pt-10 px-8"
    >
      <h2 className="text-5xl font-extrabold bg-gradient-to-r from-teal-400 to-purple-500 text-transparent bg-clip-text mb-5 pb-10">
        Skills & Experience
      </h2>

      {/* Skill Cards */}
      <div className="max-w-5xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-900 p-4 rounded-2xl shadow-xl border border-gray-800 hover:border-teal-400 hover:scale-105 transition-all duration-500"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-3xl">{skill.icon}</span>
              <p className="text-lg font-semibold">{skill.name}</p>
            </div>

            <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-teal-400 to-purple-500"
                style={{ width: skill.level }}
              ></div>
            </div>

            <p className="text-sm text-gray-400 mt-2">{skill.level}</p>
          </div>
        ))}
      </div>
      <hr />
    </section>
  );
};

export default Skills;
