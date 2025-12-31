import React from "react";
import ServicesCard from "./UI/ServicesCard";
import { MdWeb } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { DiGitMerge } from "react-icons/di";
import { AiFillHdd } from "react-icons/ai";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";
import { motion } from "framer-motion";

function Services() {
  const dataCard = [
    {
      icon: <MdWeb />,
      name: "Web Design",
      title: "Creating visually stunning and user-friendly designs that capture your brand's essence.",
    },
    {
      icon: <TbWorld />,
      name: "Web Development",
      title: "Building robust, scalable, and high-performance websites using modern technologies.",
    },
    {
      icon: <FaMoneyBillTrendUp />,
      name: "Digital Marketing",
      title: "Boosting your online presence through targeted strategies and data-driven campaigns.",
    },
    {
      icon: <AiFillHdd />,
      name: "Web Hosting",
      title: "Reliable and secure hosting solutions to keep your website always accessible.",
    },
    {
      icon: <FaApple />,
      name: "App Development",
      title: "Developing native and cross-platform mobile applications for iOS and Android.",
    },
    {
      icon: <DiGitMerge />,
      name: "IoT Solutions",
      title: "Connecting devices and systems to create smart, automated environments.",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="bg-white dark:bg-primary min-h-screen py-24 pb-12">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-xl font-mono text-accent mb-2">My Services</h2>
          <h1 className="text-4xl md:text-5xl font-bold text-primary dark:text-white mb-4">
            What I Do<span className="text-accent">.</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            I offer a full range of digital services to help businesses grow and succeed in the modern world.
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {dataCard.map((card, index) => (
             <motion.div variants={item} key={index}>
                <ServicesCard {...card} />
             </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
