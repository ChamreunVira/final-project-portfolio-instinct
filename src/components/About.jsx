import React, { useState } from "react";
import mainLogo from "../assets/vira-main-log.png";
import {
  DiHtml5,
  DiCss3,
  DiJavascript,
  DiReact,
  DiBootstrap,
} from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import SkillBar from "./UI/SkillBar";
import Projects from "./UI/Project";
import imgInstict from "../assets/instinct.jpg";
import imgRupp from "../assets/slider1.jpg";
import { IoSchoolSharp, IoPerson, IoCodeSlash, IoBriefcase } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState("about");

  const tabs = [
    { id: "about", label: "About Me", icon: <IoPerson /> },
    { id: "education", label: "Education", icon: <IoSchoolSharp /> },
    { id: "skills", label: "Skills", icon: <IoCodeSlash /> },
    { id: "projects", label: "Projects", icon: <IoBriefcase /> },
  ];

  return (
    <section className="min-h-screen py-24 bg-white dark:bg-primary transition-colors duration-300">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar / Navigation */}
          <div className="w-full lg:w-1/3 flex flex-col space-y-6">
            <div className="bg-gray-100 dark:bg-[#232329] p-8 rounded-2xl flex flex-col items-center text-center shadow-lg border border-gray-200 dark:border-gray-800">
              <div className="w-40 h-40 rounded-full p-1 border-2 border-accent mb-6">
                <img
                  src={mainLogo}
                  alt="Chamreun Vira"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <h2 className="text-2xl font-bold text-primary dark:text-white mb-2">Chamreun Vira</h2>
              <p className="text-accent font-medium mb-6">Web Developer</p>
              
              <div className="w-full flex flex-col space-y-3">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-3 px-6 py-3 rounded-xl transition-all duration-300 font-medium ${
                      activeTab === tab.id
                        ? "bg-accent text-primary shadow-md transform scale-105"
                        : "bg-white dark:bg-primary/50 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
                    }`}
                  >
                    <span className="text-xl">{tab.icon}</span>
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="w-full lg:w-2/3">
            <div className="bg-gray-50 dark:bg-[#232329] p-6 md:p-10 rounded-3xl min-h-[500px]">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* About Content */}
                  {activeTab === "about" && (
                    <div className="space-y-6">
                      <h2 className="text-4xl font-bold text-primary dark:text-white mb-6">
                        Why hire me?
                      </h2>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                        Hello! I'm <span className="text-accent font-bold">Chamreun Vira</span>, a passionate 18-year-old web developer. 
                        I specialize in building modern, responsive applications with a focus on seamless user experiences.
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg pb-6 border-b border-gray-200 dark:border-gray-700">
                        Currently pursuing Software Engineering at <span className="text-blue-600 font-semibold">RUPP</span> and refining my skills at <span className="text-accent font-semibold">Instinct Institute</span>. 
                        My goal is to become a full-stack expert and contribute to the cyber-security landscape.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                         <div className="bg-white dark:bg-[#1c1c22] p-4 rounded-xl border border-gray-200 dark:border-gray-800">
                            <span className="block text-gray-500 dark:text-gray-400 text-sm mb-1">Phone</span>
                            <span className="text-lg font-semibold text-primary dark:text-white">+855 97 30 56 747</span>
                         </div>
                         <div className="bg-white dark:bg-[#1c1c22] p-4 rounded-xl border border-gray-200 dark:border-gray-800">
                            <span className="block text-gray-500 dark:text-gray-400 text-sm mb-1">Email</span>
                            <span className="text-lg font-semibold text-primary dark:text-white">virachamreun@gmail.com</span>
                         </div>
                         <div className="bg-white dark:bg-[#1c1c22] p-4 rounded-xl border border-gray-200 dark:border-gray-800">
                            <span className="block text-gray-500 dark:text-gray-400 text-sm mb-1">Experience</span>
                            <span className="text-lg font-semibold text-primary dark:text-white">1+ Years</span>
                         </div>
                         <div className="bg-white dark:bg-[#1c1c22] p-4 rounded-xl border border-gray-200 dark:border-gray-800">
                            <span className="block text-gray-500 dark:text-gray-400 text-sm mb-1">Nationality</span>
                            <span className="text-lg font-semibold text-primary dark:text-white">Cambodian</span>
                         </div>
                      </div>
                    </div>
                  )}

                  {/* Education Content */}
                  {activeTab === "education" && (
                    <div className="space-y-8">
                      <h2 className="text-3xl font-bold text-primary dark:text-white mb-8">My Education</h2>
                      
                      <div className="relative border-l-2 border-accent ml-3 space-y-10 pl-8 pb-4">
                        <div className="relative">
                           <span className="absolute -left-[41px] top-0 p-2 rounded-full bg-accent text-primary">
                              <IoSchoolSharp size={20}/>
                           </span>
                           <h3 className="text-2xl font-bold text-primary dark:text-white">Instinct Institute</h3>
                           <span className="text-accent font-mono text-sm">2023 - Present</span>
                           <p className="mt-2 text-gray-600 dark:text-gray-400">
                             Studying frontend development and modern web technologies under the mentorship of Teacher Long Madeth.
                           </p>
                           <div className="mt-4 overflow-hidden rounded-xl h-48 md:h-64">
                              <img src={imgInstict} alt="Instinct" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"/>
                           </div>
                        </div>

                        <div className="relative">
                           <span className="absolute -left-[41px] top-0 p-2 rounded-full bg-accent text-primary">
                              <IoSchoolSharp size={20}/>
                           </span>
                           <h3 className="text-2xl font-bold text-primary dark:text-white">Royal University of Phnom Penh (RUPP)</h3>
                           <span className="text-accent font-mono text-sm">2024 - Present</span>
                           <p className="mt-2 text-gray-600 dark:text-gray-400">
                             Pursuing a Bachelor's Degree in Software Engineering. Building strong foundations in computer science and programming.
                           </p>
                           <div className="mt-4 overflow-hidden rounded-xl h-48 md:h-64">
                              <img src={imgRupp} alt="RUPP" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"/>
                           </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Skills Content */}
                  {activeTab === "skills" && (
                    <div className="space-y-6">
                      <h2 className="text-3xl font-bold text-primary dark:text-white mb-8">Technical Skills</h2>
                      <p className="text-gray-600 dark:text-gray-400 mb-8">
                         I work with a variety of modern web technologies to build robust and scalable applications.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                        <SkillBar
                          skill="HTML5"
                          percentage={95}
                          color="from-orange-400 to-orange-600"
                          logo={<DiHtml5 className="text-3xl text-orange-500" />}
                        />
                        <SkillBar
                          skill="CSS3"
                          percentage={85}
                          color="from-blue-400 to-blue-600"
                          logo={<DiCss3 className="text-3xl text-blue-500" />}
                        />
                         <SkillBar
                          skill="JavaScript"
                          percentage={75}
                          color="from-yellow-400 to-yellow-600"
                          logo={<DiJavascript className="text-3xl text-yellow-500" />}
                        />
                        <SkillBar
                          skill="React"
                          percentage={70}
                          color="from-cyan-400 to-cyan-600"
                          logo={<DiReact className="text-3xl text-cyan-400" />}
                        />
                        <SkillBar
                          skill="Tailwind"
                          percentage={90}
                          color="from-teal-400 to-teal-600"
                          logo={<SiTailwindcss className="text-3xl text-teal-400" />}
                        />
                        <SkillBar
                          skill="Bootstrap"
                          percentage={60}
                          color="from-purple-400 to-purple-600"
                          logo={<DiBootstrap className="text-3xl text-purple-600" />}
                        />
                      </div>
                    </div>
                  )}

                  {/* Projects Content */}
                  {activeTab === "projects" && (
                    <div className="space-y-6">
                      <h2 className="text-3xl font-bold text-primary dark:text-white mb-6">Recent Projects</h2>
                      <Projects />
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
