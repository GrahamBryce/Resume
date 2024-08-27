import React, { useState } from 'react';
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiMongodb } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { motion } from "framer-motion";
import Degree from "../assets/Degree.jpg"; 

const about = {
  title: "About me",
  description: "I am a well-rounded MERN Stack Web Developer with a strong grasp of front-end best practices. I value structure, clean code, and quality, and take pride in perfecting all of the details and optimizing web applications. While I enjoy working in a collaborative team environment where learning is accelerated, I am also proficient at working independently to deliver high-quality results.",
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
  description: "Entry-level programmer with 3 years of experience and a Bachelor's degree in Web Development. Graduated as Valedictorian, showcasing a strong commitment to excellence. Currently working part-time as a Support Engineer.",
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
    { icon: <RiNextjsFill />, name: 'Next.js' },
    { icon: <SiTailwindcss />, name: 'Tailwind CSS' },
    { icon: <FaNodeJs />, name: 'Node.js' },
    { icon: <SiMongodb />, name: 'MongoDB' },
  ]
};

function Resume() {
  const [activeTab, setActiveTab] = useState('experience');
  const [showModal, setShowModal] = useState(false);

  const handleDegreeClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

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
              className={`py-2 px-4 rounded-md font-semibold w-[300px] text-center ${activeTab === 'experience' ? 'bg-accent text-black' : 'bg-gray-700 text-white'}`}
            >
              Experience
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab('skills')}
              className={`py-2 px-4 rounded-md font-semibold w-[300px] text-center ${activeTab === 'skills' ? 'bg-accent text-black' : 'bg-gray-700 text-white'}`}
            >
              Skills
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab('about')}
              className={`py-2 px-4 rounded-md font-semibold w-[300px] text-center ${activeTab === 'about' ? 'bg-accent text-black' : 'bg-gray-700 text-white'}`}
            >
              About Me
            </button>
          </li>
        </ul>
        <div className="bg-black text-white rounded-lg w-full">
          {activeTab === 'experience' && (
            <div className='text-center sm:mt-6 md:mt-6 lg:mt-0 xl:mt-0 lg:text-left xl:text-left'>
              <h3 className="text-4xl font-bold text-white mb-2">My Experience</h3>
              <p className="text-lg font-bold mt-6 mb-6 text-white/60 mb-2">{relevantExperience.description}</p>
              <div className='flex sm:flex-col md:flex-col lg:flex-row xl:flex-row xl:justify-start lg:justify-start md:justify-center sm:justify-center sm:items-center md:items-center xl:items-start lg:items-start gap-8'>
                {relevantExperience.items.map((item, index) => (
                  <div
                    key={index}
                    className="block w-[330px] h-[175px] p-6 bg-gray-800 border border-gray-700 rounded-lg shadow cursor-pointer"
                    onClick={item.position === "Bachelors Degree in Web Development" ? handleDegreeClick : null}
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
              <ul className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {skills.skillList.map((skill, index) => (
                  <li 
                    key={index} 
                    className="flex flex-col items-center justify-center p-6 border border-gray-700 rounded-lg bg-gray-800 hover:text-accent transition-colors duration-300"
                  >
                    <div className="text-4xl hover:text-accent mb-2">
                      {skill.icon}
                    </div>
                    <span className=" ">{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {activeTab === 'about' && (
            <div className='text-center sm:mt-6 md:mt-6 lg:mt-0 xl:mt-0 flex flex-col lg:gap-[10px] xl:gap-[10px] sm:gap-[30px] md:gap-[30px] lg:text-left xl:text-left'>
              <h3 className="text-4xl font-bold text-white mb-2">About Me</h3>
              <p className='text-white/60 mt-4 mb-6'>{about.description}</p>
              <ul className='grid grid-cols-1 text-center xl:grid-cols-2 lg:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0 lg:mx-0 '>
                {about.info.map((infoItem, index) => (
                  <li key={index} className="mb-2 flex sm:justify-center md:justify-center lg:justify-start xl:justify-start">
                    <span className='text-white/60'>{infoItem.fieldName}: </span>
                    <span className='pl-2 text-lg'>{infoItem.FieldValue}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      {showModal && (
      <div 
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50" 
        onClick={handleCloseModal} 
      >
        <div 
          className="relative bg-white p-4 rounded-lg shadow-lg max-w-[90%] max-h-[90%]" 
          onClick={(e) => e.stopPropagation()} 
        >
          <button
            className="absolute top-2 right-2 text-black font-bold text-lg"
            onClick={handleCloseModal}
          >
            &times;
          </button>
          <img src={Degree} alt="Degree" className="w-full h-auto max-w-[500px] max-h-[500px] rounded-lg" />
        </div>
      </div>
      )}
    </motion.div>
  );
}

export default Resume;
