import React from "react";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gray-950 text-white flex items-center pt-20 relative overflow-hidden"
    >

      {/* Background blur circles */}
      <div className="absolute -top-16 -left-16 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 px-8 z-10">

        {/* IMAGE FIRST ON MOBILE */}
        <div className="flex justify-center order-1 md:order-2 animate-fadeIn">
          <img
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
            alt="Developer"
            className="rounded-2xl shadow-[0_0_60px_-15px_rgba(0,255,255,0.4)] w-[260px] sm:w-[340px] md:w-[450px] hover:scale-105 transition duration-500"
          />
        </div>

        {/* TEXT LEFT */}
        <div className="flex flex-col justify-center space-y-6 order-2 md:order-1 animate-slideUp">

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Hii, I'm <br />
            <span className="bg-gradient-to-r from-teal-400 to-purple-500 bg-clip-text text-transparent">
              Komal Panwar
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-gray-300">
            MERN Stack Developer
          </h2>

          <p className="text-gray-400 max-w-lg">
            I build modern, scalable, and user-focused web applications using MongoDB,
            Express, React, and Node.js. I love solving real-world problems through clean
            UI and strong backend logic.
          </p>

          {/* Buttons */}
          <div className="flex gap-4">
            <a
              href="#projects"
              className="px-7 py-3 rounded-full bg-gradient-to-r from-teal-400 to-purple-500 text-black font-semibold hover:scale-105 transition"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              download
              className="px-7 py-3 rounded-full border border-teal-400 text-teal-300 hover:bg-teal-400 hover:text-black transition font-semibold"
            >
              Download Resume
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Home;
