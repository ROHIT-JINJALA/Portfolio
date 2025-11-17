import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMail } from "react-icons/hi";
import emailjs from "emailjs-com";

const containerVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const popupVariants = {
  hidden: { opacity: 0, scale: 0.8, y: -20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    y: -20,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);

  // form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // validation
  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // handle send
  const [loading, setLoading] = useState(false);
  const handleSendMessage = (e) => {
    e.preventDefault();

    if (!validate()) return; // stop if invalid
    setLoading(true); // show "Please wait..."

    // send via EmailJS
const serviceID = import.meta.env.VITE_SERVICE_ID;
const templateID = import.meta.env.VITE_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_PUBLIC_KEY;

    console.log(serviceID, templateID, publicKey);
    emailjs
      .send(
        serviceID, templateID, 
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        publicKey 
      )
      .then(
        () => {
          setShowPopup(true);
          setTimeout(() => setShowPopup(false), 2000);
          setFormData({ name: "", email: "", subject: "", message: "" }); // clear form
          setErrors({});
          setLoading(false); // reset button text
        },
        (error) => {
          console.error("Email send failed:", error.text);
          alert("Failed to send message. Try again.");
          setLoading(false); // reset if failed
        }
      );
  };

  return (
    <motion.section
      id="contact"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="bg-white text-gray-900 min-h-screen flex flex-col items-center justify-center p-8 "
    >
      {/* Title */}
      <motion.h1
        variants={itemVariants}
        className="md:text-5xl text-4xl font-bold mb-2 mt-15"
      >
        Get In Touch
      </motion.h1>

      {/* line */}
      <motion.p
        variants={itemVariants}
        className="text-gray-700 mb-8 text-center"
      >
        Ready to collaborate or have a question? Reach out and I'll respond as
        soon as possible!
      </motion.p>

      <motion.div
        variants={itemVariants}
        className="flex flex-col md:flex-row gap-8 w-full max-w-4xl bg-white p-8 rounded-2xl shadow-lg"
      >
        {/* Left side*/}
        <motion.div
          variants={itemVariants}
          className="flex-1 flex flex-col space-y-4 "
        >
          <h2 className="text-2xl font-semibold mb-4">Send Me a Message</h2>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}

          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.subject ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.subject && (
            <p className="text-red-500 text-sm">{errors.subject}</p>
          )}

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className={`w-full p-3 h-32 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.message ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message}</p>
          )}

          <motion.button
            whileHover={{ scale: !loading ? 1.05 : 1 }}
            whileTap={{ scale: !loading ? 0.95 : 1 }}
            onClick={handleSendMessage}
            disabled={loading}
            className={`w-full py-3 rounded-lg transition text-white ${
              loading
                ? "bg-purple-400 cursor-not-allowed"
                : "bg-purple-600 hover:bg-purple-700"
            }`}
          >
            {loading ? "Please wait..." : "Send Message"}
          </motion.button>
        </motion.div>

        {/* Right side*/}
        <motion.div
          variants={itemVariants}
          className="bg-gray-100 rounded-lg p-6 hidden md:block text-center shadow-inner flex-1"
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            Let's Connect
          </h2>
          <p className="text-gray-700 mb-6">
            I'm currently available for freelance work or full-time positions.
            If you have a project that you want to get started or need help with
            something, feel free to reach out.
          </p>
          <p className="text-purple-600 font-medium mb-6">
            rohitjinjala50@gmail.com
          </p>
          <div className="p-4 bg-white rounded-full border w-fit m-auto text-2xl text-gray-800 border-gray-300">
            <a href="mailto:rohitjinjala50@gmail.com">
              <HiOutlineMail />
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Popup Notification */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            variants={popupVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                       bg-purple-600 text-white px-6 py-3 rounded-lg shadow-2xl 
                       text-sm md:text-lg flex items-center justify-between gap-3 w-64 md:w-fit"
          >
            <span>Message Sent Successfully!</span>
            <button
              onClick={() => setShowPopup(false)}
              className="text-white hover:text-gray-200"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Contact;