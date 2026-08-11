import { useState } from "react";
import {
  RiPhoneFill,
  RiSendPlaneFill,
  RiUserLocationFill,
} from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { FiCheckCircle } from "react-icons/fi";
import Socail from "../components/ui/Socail";
import { motion } from "framer-motion";
import { sendContact } from "../lib/api";

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
};

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [sending, setSending] = useState(false);

  const updateField = (event) =>
    setForm((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));

  const sendWithTelegram = (event) => {
    event.preventDefault();
    const text = `New portfolio message\nName: ${form.firstName} ${form.lastName}\nEmail: ${form.email}\nPhone: ${form.phone || "Not provided"}\n\n${form.message}`;
    window.open(
      `https://t.me/share/url?url=&text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  const submit = async (event) => {
    event.preventDefault();
    setSending(true);
    setStatus({ type: "", message: "" });
    try {
      const result = await sendContact(form);
      setStatus({
        type: "success",
        message: result.message || "Your message has been sent.",
      });
      setForm(initialForm);
    } catch (error) {
      setStatus({ type: "error", message: error.message });
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="scroll-mt-20 bg-white py-24 pb-12 dark:bg-primary"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-2 text-xl font-mono text-accent">Get in Touch</h2>
          <h1 className="text-4xl font-bold text-primary dark:text-white md:text-5xl">
            Contact Me<span className="text-accent">.</span>
          </h1>
        </motion.div>
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full rounded-3xl bg-gray-50 p-8 dark:bg-[#232329] md:p-12 lg:w-3/5"
          >
            <h3 className="mb-3 text-2xl font-bold text-primary dark:text-accent">
              Let&apos;s work together!
            </h3>
            <p className="mb-8 text-gray-600 dark:text-gray-400">
              Send a message here and it will be delivered to Telegram. You can
              also open Telegram directly with the message ready to send.
            </p>
            <form onSubmit={submit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <input
                  required
                  name="firstName"
                  value={form.firstName}
                  onChange={updateField}
                  type="text"
                  placeholder="First Name"
                  className="contact-field"
                />
                <input
                  name="lastName"
                  value={form.lastName}
                  onChange={updateField}
                  type="text"
                  placeholder="Last Name"
                  className="contact-field"
                />
              </div>
              <input
                required
                name="email"
                value={form.email}
                onChange={updateField}
                type="email"
                placeholder="Email Address"
                className="contact-field"
              />
              <input
                name="phone"
                value={form.phone}
                onChange={updateField}
                type="tel"
                placeholder="Phone Number"
                className="contact-field"
              />
              <textarea
                required
                name="message"
                value={form.message}
                onChange={updateField}
                rows="5"
                placeholder="Tell me a little about your project"
                className="contact-field resize-none"
              />
              {status.message && (
                <p
                  role="status"
                  className={`flex items-center gap-2 rounded-xl px-4 py-3 text-sm ${status.type === "success" ? "bg-green-100 text-green-800 dark:bg-green-500/15 dark:text-green-300" : "bg-red-100 text-red-800 dark:bg-red-500/15 dark:text-red-300"}`}
                >
                  {status.type === "success" && <FiCheckCircle />}
                  {status.message}
                </p>
              )}
              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  disabled={sending}
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-4 font-bold text-primary transition hover:bg-accent-hover disabled:cursor-wait disabled:opacity-70"
                >
                  <RiSendPlaneFill /> {sending ? "Sending…" : "Send message"}
                </button>
                <button
                  type="button"
                  onClick={sendWithTelegram}
                  className="rounded-full border border-gray-200 px-7 py-4 font-semibold text-primary transition hover:border-accent hover:text-accent dark:border-gray-700 dark:text-white"
                >
                  Open in Telegram
                </button>
              </div>
            </form>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex w-full flex-col space-y-8 lg:w-2/5"
          >
            <ContactItem
              icon={<RiPhoneFill />}
              label="Phone"
              value="+855 97 30 56 747"
            />
            <ContactItem
              icon={<MdEmail />}
              label="Email"
              value="virachamreun@gmail.com"
            />
            <ContactItem
              icon={<RiUserLocationFill />}
              label="Address"
              value="#261, Boeung Salang, Toul Kork, Phnom Penh, Cambodia"
            />
            <div className="pt-3">
              <h3 className="mb-6 text-2xl font-bold text-primary dark:text-white">
                Follow Me
              </h3>
              <Socail />
            </div>
            <div className="mt-auto h-64 w-full overflow-hidden rounded-2xl shadow-lg">
              <iframe
                title="Phnom Penh map"
                className="h-full w-full grayscale transition-all duration-500 hover:grayscale-0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d284677.57715565845!2d104.72537628291832!3d11.57931763901341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109513dc76a6be3%3A0x9c010ee85ab525bb!2sPhnom%20Penh!5e1!3m2!1sen!2skh!4v1731968055250!5m2!1sen!2skh"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({ icon, label, value }) {
  return (
    <div className="flex items-start gap-4">
      <div className="rounded-xl bg-gray-50 p-4 text-2xl text-accent dark:bg-[#232329]">
        {icon}
      </div>
      <div>
        <h4 className="mb-1 text-sm text-gray-500 dark:text-gray-400">
          {label}
        </h4>
        <p className="text-xl font-bold text-primary dark:text-white">
          {value}
        </p>
      </div>
    </div>
  );
}

export default Contact;
