import Socail from "../components/ui/Socail";
import Stat from "../components/Stats";
import mainLogo from "../../src/assets/profile.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section
      id="home"
      className="bg-white dark:bg-primary min-h-screen relative overflow-hidden flex flex-col justify-center scroll-mt-20"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 lg:px-8 py-20 pb-12 pt-32 lg:pt-40">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left order-2 lg:order-1"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-xl md:text-2xl font-mono text-gray-600 dark:text-accent mb-4"
            >
              Full Stack Developer
            </motion.h2>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold font-primary leading-tight text-primary dark:text-white mb-6"
            >
              Hello, I&apos;m <br />
              <span className="text-accent animate-pulse">Chamreun Vira</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="max-w-2xl mx-auto lg:mx-0 text-gray-500 dark:text-gray-400 text-lg mb-8 leading-relaxed font-secondary"
            >
              I am a Computer Science student and Full-Stack Developer
              passionate about building scalable web applications. I specialize
              in React, Next.js, Spring Boot, and database design, with
              experience creating REST APIs, responsive interfaces, and
              real-world software solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start"
            >
              <a
                href="/cv.pdf"
                download="Chamreun_Vira_CV.pdf"
                className="inline-block px-3 py-2 font-semibold bg-accent text-white rounded-lg hover:bg-accent/80 transition-colors duration-300"
              >
                Download CV
              </a>
              <a href="/#projects">
                <button className="px-3 py-2 font-semibold bg-dark border border-accent text-white rounded-lg hover:bg-accent/80 transition-colors duration-300">
                  View Projects
                </button>
              </a>
            </motion.div>
            {/* <Socail /> */}
          </motion.div>

          {/* Image/Visual content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] xl:w-[500px] xl:h-[500px]">
              {/* Spinning Circle */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-dotted border-accent/30"
              ></motion.div>

              <div className="absolute inset-4 rounded-full border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#1a1a20] flex items-center justify-center overflow-hidden shadow-2xl group hover:border-accent transition-colors duration-500">
                <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img
                  src={mainLogo}
                  alt="Chamreun Vira"
                  className="w-full h-full object-cover p-2 rounded-full transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 lg:mt-32">
          <Stat />
        </div>
      </div>
    </section>
  );
}

export default Home;
