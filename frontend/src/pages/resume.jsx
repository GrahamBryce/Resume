import React, { useState } from 'react';
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { motion } from "framer-motion";
import { SiTailwindcss } from "react-icons/si";

const about = {
  title: "About me",
  description: "I am a programmer who is ready for work.",
  info: [
    { fieldName: "Name", FieldValue: "Bryce Graham" },
    { fieldName: "Phone", FieldValue: "573 890 0445" },
    { fieldName: "Experience", FieldValue: "3 years" },
    { fieldName: "Email", FieldValue: "brycegraham95@gmail.com" },
  ]
};

const relevantExperience = {
  icon: '/assets/resume/badge.svg',
  title: "My experience",
  description: 'blablabla',
  items: [
    { company: "Full Sail University", position: "Bachelors Degree in Web Development", duration: "2021 December - 2024 May" },
    { company: "Cocoon Data", position: "Support Engineer", duration: "2024 January - Present" },
  ]
};

const skills = {
  title: "My skills",
  description: "These are my skills",
  skillList: [
    { icon: <FaHtml5 />, name: 'HTML 5' },
    { icon: <FaCss3 />, name: 'CSS 3' },
    { icon: <FaJs />, name: 'JavaScript' },
    { icon: <FaReact />, name: 'React.js' },
    { icon: <SiTailwindcss />, name: 'Tailwind CSS' },
    { icon: <FaNodeJs />, name: 'Node.js' },
  ]
};

function Resume() {
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1,
        transition: { delay: .75, duration: 0.4, ease: "easeIn" }
      }}
      className=" flex items-center justify-center py-12 xl:py-0 "
    >
      <div className="container mx-auto flex lg:flex-row xl:flex-row md:flex-col sm:flex-col gap-6">
        <ul className="flex flex-col w-full max-w-[300px] mx-auto xl:mx-0 gap-6">
          <li>
            <button
              onClick={() => setActiveTab('experience')}
              className={`bg-gray-700 py-2 px-4 text-white rounded-md font-semibold w-[300px] text-center ${activeTab === 'experience' && 'bg-accent text-black'}`}
            >
              Experience
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab('skills')}
              className={`bg-gray-700 py-2 px-4 text-white rounded-md font-semibold w-[300px] text-center ${activeTab === 'skills' && 'bg-accent text-black'}`}
            >
              Skills
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab('about')}
              className={`bg-gray-700 py-2 px-4 text-white rounded-md font-semibold w-[300px] text-center ${activeTab === 'about' && 'bg-accent text-black'}`}
            >
              About Me
            </button>
          </li>
        </ul>
        <div className="bg-black text-white rounded-lg w-full">
          {activeTab === 'experience' && (
            <div className='text-center sm:mt-6 md:mt-6 lg:mt-0 xl:mt-0 lg:text-left xl:text-left'>
              <h3 className="text-4xl font-bold text-white mb-2">My Experience</h3>
              <div className='flex  sm:flex-col md:flex-col lg:flex-row xl:flex-row xl:justify-start lg:justify-start md:justify-center sm:justify-center sm:items-center md:items-center xl:items-start lg:items-start gap-8'>
                {relevantExperience.items.map((item, index) => (
                  <div
                    key={index}
                    className="block w-[330px] h-[175px] p-6 bg-gray-800 border border-gray-700 rounded-lg shadow hover:bg-gray-700"
                  >
                    <p className="text-accent mb-2">{item.duration}</p>
                    <h4 className="font-semibold text-white text-xl mb-2">{item.position}</h4>
                    <p className="text-gray-400 mt-4">{item.company}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'skills' && (
            <div className='text-center lg:text-left xl:text-left'>
              <h3 className="text-4xl font-bold text-white mb-6">My Skills</h3>
              <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                {skills.skillList.map((skill, index) => (
                  <li 
                    key={index} 
                    className="flex flex-col items-center justify-center p-4 border border-gray-700 rounded-lg bg-gray-800 hover:bg-accent transition-colors duration-300"
                  >
                    <div className="text-4xl mb-2">
                      {skill.icon}
                    </div>
                    <span className="text-white">{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}



          {activeTab === 'about' && (
            <div className='text-center sm:mt-6 md:mt-6 lg:mt-0 xl:mt-0 flex flex-col lg:gap-[10px] xl:gap-[10px] sm:gap-[30px] md:gap-[30px] lg:text-left xl:text-left'>
              <h3 className="text-4xl font-bold text-white mb-2">About Me</h3>
              <p>{about.description}</p>
              <ul className='grid grid-cols-1 text-center xl:grid-cols-2 lg:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0 lg:mx-0 '>
                {about.info.map((infoItem, index) => (
                  <li key={index} className="mb-2 flex sm:justify-center md:justify-center lg:justify-start xl:justify-start">
                    <span className='text-white/60'>{infoItem.fieldName}: </span>
                    <span className='text-lg'>{infoItem.FieldValue}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default Resume;