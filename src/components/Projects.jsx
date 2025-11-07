import React from "react";
import weatherImg from "../assets/weatherapp.png";
import portfolio from "../assets/portfolio.png";

const projects = [
  {
    title: "E-Commerce Website",
    tech: "React, Redux, Node, MongoDB",
    img: "https://source.unsplash.com/600x400/?ecommerce,website",
    github: "https://github.com/",
    demo: "https://example.com/",
  },
  {
    title: "Portfolio Website",
    tech: "React, Tailwind CSS",
    img: portfolio,
    github: "https://github.com/Komal80064/My-Portfolio.git",
    demo: "https://my-portfolio-komal.vercel.app/",
  },
  {
    title: "Weather Forecast App",
    tech: "React, API Integration",
    img: weatherImg,
    github: "https://github.com/Komal80064/Weather-App.git",
    demo: "https://example.com/",
  },
];

const Projects = () => {
  return (
        <section id="projects" className="min-h-screen bg-gray-950 text-white pt-15 px-6">
        <h2 className="text-5xl font-extrabold text-center mb-5 pb-10 bg-gradient-to-r from-teal-400 to-purple-500 text-transparent bg-clip-text drop-shadow-lg">
             My Projects
        </h2>


      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900 p-5 rounded-2xl shadow-lg border border-gray-700 hover:scale-105 transition-all duration-500 hover:border-teal-400"
          >
            <img
              src={project.img}
              alt={project.title}
              className="rounded-xl mb-4 w-full h-44 object-cover"
            />

            <h3 className="text-2xl font-semibold">{project.title}</h3>
            <p className="text-gray-400 text-sm mt-1">{project.tech}</p>

            <div className="flex justify-between mt-4">
              <a
                href={project.github}
                target="_blank"
                className="px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 hover:border-purple-500 hover:bg-gray-900 transition-all"
              >
                GitHub
              </a>

              <a
                href={project.demo}
                target="_blank"
                className="px-4 py-2 bg-teal-500 rounded-lg hover:bg-teal-600 transition-all text-black font-semibold"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
