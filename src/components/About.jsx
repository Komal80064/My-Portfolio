import React from "react";
import profileImg from "../assets/komal.jpg"; // <-- replace with your image path

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center pt-15 px-8"
    >
      {/* TITLE */}
      <h2 className="text-5xl font-extrabold bg-gradient-to-r from-teal-400 to-purple-500 text-transparent bg-clip-text mb-21">
        About Me
      </h2>

      {/* MAIN SECTION */}
      <div className="max-w-6xl flex flex-col lg:flex-row items-center gap-16">

        {/* LEFT IMAGE */}
        <div className="relative group">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-teal-400 blur-2xl opacity-40 group-hover:scale-110 transition-all"></div>

          <img
            src={profileImg}
            alt="profile"
            className="w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-gray-800 shadow-2xl group-hover:scale-105 transition-all duration-500"
          />
        </div>

        {/* RIGHT TEXT */}
        <div className="max-w-xl text-center lg:text-left">
          <h3 className="text-3xl font-bold text-teal-400 mb-4">
            Hi, I’m Komal Panwar 👋
          </h3>

          <p className="text-gray-300 leading-relaxed text-lg">
            I’m a passionate <span className="text-teal-400 font-semibold">MERN Stack Developer</span>.
            I love building dynamic, interactive, and responsive web applications.
            My goal is to create impactful digital experiences using modern web technologies.
          </p>

          <p className="mt-4 text-gray-400">
            I enjoy problem-solving, exploring new technologies, and continuously improving
            my skills as a developer.
          </p>

          {/* DOWNLOAD RESUME */}
          <a
            href="/resume.pdf"
            download
            className="mt-6 inline-block px-6 py-3 text-black font-semibold bg-gradient-to-r from-teal-400 to-purple-500 rounded-full hover:scale-105 hover:shadow-xl transition-all"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* EDUCATION TIMELINE */}
      <div className="mt-20 w-full max-w-4xl">
        <h2 className="text-5xl font-bold mb-20 bg-gradient-to-r from-teal-400 to-purple-500 text-transparent bg-clip-text text-center">
          Education
        </h2>

        <div className="relative border-l border-teal-500 lg:ml-65">

          {/* 12th */}
          <div className="mb-10 ml-6">
            <div className="absolute w-4 h-4 bg-teal-500 rounded-full -left-2.5"></div>
            <h3 className="text-2xl font-bold text-teal-400">12th (Higher Secondary)</h3>
            <p className="text-gray-300">G. M. I. C. Sidhsaur Rudraprayag</p>
            <p className="text-gray-400 text-sm">Year – 2021</p>
          </div>

          {/* Diploma */}
          <div className="mb-10 ml-6">
            <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-2.5"></div>
            <h3 className="text-2xl font-bold text-purple-400">Diploma in Information Technology</h3>
            <p className="text-gray-300">Govt Polytechnic Srinagar Garhwal</p>
            <p className="text-gray-400 text-sm">Year – 2021-2024</p>
          </div>

          {/* B.Tech */}
          <div className="mb-10 ml-6">
            <div className="absolute w-4 h-4 bg-pink-500 rounded-full -left-2.5"></div>
            <h3 className="text-2xl font-bold text-pink-400">B.Tech (Information Technology)</h3>
            <p className="text-gray-300">Pantnagar University</p>
            <p className="text-gray-400 text-sm">Year – 2024 – 2027</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
