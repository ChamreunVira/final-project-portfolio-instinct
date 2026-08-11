import ServicesCard from "../components/ui/ServicesCard";
import { MdWeb } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { DiGitMerge } from "react-icons/di";
import { AiFillHdd } from "react-icons/ai";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";
import { motion } from "framer-motion";
import { BsAndroid } from "react-icons/bs";

function Services() {
  const dataCard = [
    {
      icon: <TbWorld />,
      name: "Full-Stack Development",
      title:
        "Building modern web applications with React, Next.js, Spring Boot, and scalable backend architectures.",
    },
    {
      icon: <MdWeb />,
      name: "Frontend Development",
      title:
        "Creating responsive and user-friendly interfaces with modern UI frameworks and best practices.",
    },
    {
      icon: <AiFillHdd />,
      name: "Backend Development",
      title:
        "Designing secure REST APIs, database systems, authentication, and business logic using Spring Boot.",
    },
    {
      icon: <DiGitMerge />,
      name: "DevOps & Cloud",
      title:
        "Deploying applications with Docker, CI/CD pipelines, cloud platforms, and server management.",
    },
    {
      icon: <BsAndroid />,
      name: "Mobile Development",
      title:
        "Developing Android applications using Kotlin and Jetpack Compose with modern architecture.",
    },
    {
      icon: <TbWorld />,
      name: "IoT & AI Solutions",
      title:
        "Building smart systems with IoT devices, computer vision, and AI technologies.",
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
    <section
      id="services"
      className="scroll-mt-20 bg-white py-24 pb-12 dark:bg-primary"
    >
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
            I offer a full range of digital services to help businesses grow and
            succeed in the modern world.
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
