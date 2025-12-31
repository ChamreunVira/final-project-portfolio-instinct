import React from "react";
import { RiPhoneFill, RiUserLocationFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import Socail from "./UI/Socail";
import { motion } from "framer-motion";

function Contact() {
  return (
    <section className="bg-white dark:bg-primary min-h-screen py-24 pb-12">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-xl font-mono text-accent mb-2">Get in Touch</h2>
          <h1 className="text-4xl md:text-5xl font-bold text-primary dark:text-white">
            Contact Me<span className="text-accent">.</span>
          </h1>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Form Section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-3/5 bg-gray-50 dark:bg-[#232329] p-8 md:p-12 rounded-3xl"
          >
            <h3 className="text-2xl font-bold text-primary dark:text-accent mb-6">Let's work together!</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Fill out the form below and I'll get back to you as soon as possible.
            </p>
            
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full bg-white dark:bg-primary px-6 py-4 rounded-xl border border-gray-200 dark:border-gray-800 focus:border-accent outline-none text-primary dark:text-white placeholder:text-gray-400 transition-colors"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full bg-white dark:bg-primary px-6 py-4 rounded-xl border border-gray-200 dark:border-gray-800 focus:border-accent outline-none text-primary dark:text-white placeholder:text-gray-400 transition-colors"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-white dark:bg-primary px-6 py-4 rounded-xl border border-gray-200 dark:border-gray-800 focus:border-accent outline-none text-primary dark:text-white placeholder:text-gray-400 transition-colors"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full bg-white dark:bg-primary px-6 py-4 rounded-xl border border-gray-200 dark:border-gray-800 focus:border-accent outline-none text-primary dark:text-white placeholder:text-gray-400 transition-colors"
              />
              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full bg-white dark:bg-primary px-6 py-4 rounded-xl border border-gray-200 dark:border-gray-800 focus:border-accent outline-none text-primary dark:text-white placeholder:text-gray-400 transition-colors resize-none"
              ></textarea>
              
              <button 
                type="submit"
                className="w-full md:w-auto bg-accent text-primary font-bold px-8 py-4 rounded-full hover:bg-accent-hover transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Info Section */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full lg:w-2/5 flex flex-col space-y-8"
          >
             <div className="flex items-start gap-4">
                <div className="p-4 rounded-xl bg-gray-50 dark:bg-[#232329] text-accent text-2xl">
                   <RiPhoneFill />
                </div>
                <div>
                   <h4 className="text-gray-500 dark:text-gray-400 text-sm mb-1">Phone</h4>
                   <p className="text-xl font-bold text-primary dark:text-white">+855 97 30 56 747</p>
                </div>
             </div>
             <div className="flex items-start gap-4">
                <div className="p-4 rounded-xl bg-gray-50 dark:bg-[#232329] text-accent text-2xl">
                   <MdEmail />
                </div>
                <div>
                   <h4 className="text-gray-500 dark:text-gray-400 text-sm mb-1">Email</h4>
                   <p className="text-xl font-bold text-primary dark:text-white">virachamreun@gmail.com</p>
                </div>
             </div>
             <div className="flex items-start gap-4">
                <div className="p-4 rounded-xl bg-gray-50 dark:bg-[#232329] text-accent text-2xl">
                   <RiUserLocationFill />
                </div>
                <div>
                   <h4 className="text-gray-500 dark:text-gray-400 text-sm mb-1">Address</h4>
                   <p className="text-xl font-bold text-primary dark:text-white">Phnom Penh, Cambodia</p>
                </div>
             </div>

             <div className="pt-8">
               <h3 className="text-2xl font-bold text-primary dark:text-white mb-6">Follow Me</h3>
               <Socail />
             </div>

             <div className="w-full h-64 rounded-2xl overflow-hidden shadow-lg mt-auto">
                <iframe
                title="map"
                className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d284677.57715565845!2d104.72537628291832!3d11.57931763901341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109513dc76a6be3%3A0x9c010ee85ab525bb!2sPhnom%20Penh!5e1!3m2!1sen!2skh!4v1731968055250!5m2!1sen!2skh"
                loading="lazy"
                ></iframe>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
