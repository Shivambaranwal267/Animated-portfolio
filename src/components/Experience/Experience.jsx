import React from "react";
import { experiences } from "../../constants"; // Import your data

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient "
    >
      {/* Section Title */}
      <div className="mb-16 text-center">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 mx-auto mt-4 bg-purple-500"></div>
        <p className="mt-4 text-lg font-semibold text-gray-400">
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-0 w-1 h-full transform -translate-x-1/2 bg-white sm:left-1/2 sm:translate-x-0"></div>
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={` flex flex-col sm:flex-row items-center mb-16 ${
              index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
            }`}
          >
            {/* Timeline Circle
            <div className="absolute left-0 transform -translate-x-1/2 bg-gray-400 sm:left-1/2 vorder-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10">
              <img
                src={experience.img}
                alt={experience.company}
                className="object-cover w-full h-full rounded-full"
              />
            </div> */}

            {/* Content */}
            <div
              className={`w-full max-w-lg p-6 rounded-2xl  border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_30px_2px_rgba(130,69,236,0.5)] ${
                index % 2 === 0 ? "sm:mr-12" : "sm:ml-12"
              } mt-12 sm:mt-0`}
            >
              <div className="flex items-center space-x-6">
                <div className="w-16 h-16 overflow-hidden bg-white rounded-md">
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white sm:text-2xl">
                    {experience.role}
                  </h3>
                  <h4 className="text-sm text-gray-300">
                    {experience.company}
                  </h4>
                  <p className="mt-2 text-sm text-gray-500">
                    {experience.date}
                  </p>
                </div>
              </div>

              <p className="mt-4 text-gray-400">{experience.desc}</p>

              <div className="mt-4">
                <h5 className="font-medium text-white">Skills:</h5>
                <ul className="flex flex-wrap mt-2">
                  {experience.skills.map((skill, idx) => (
                    <li
                      key={idx}
                      className="bg-[#8245ec] text-gray-300 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
