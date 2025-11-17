import Wanderlust from "../assets/images/Wanderlust.png"
import RGPT from "../assets/images/R-gpt.png"
import { image } from "framer-motion/client";
import ClothOra from "../assets/images/ClothOra.png"

const projectData = [
  {
    name: "Wanderlust",
    description:
      "A full-stack travel blog application allowing users to share their travel experiences. Features user authentication, post creation, and interactive maps.",
    techStack: ["MongoDB", "Express.js", "React.js", "Node.js"],
    demoLink: "https://wanderlust-kztr.onrender.com/listings",
    githubLink: "https://github.com/ROHIT-JINJALA/wanderlust",
    image: Wanderlust,
    // image: "https://github.com/ROHIT-JINJALA/wanderlust/raw/main/image.png",

  },
  {
    name: "R-gpt",
    description:
      "R-GPT is an AI-powered chat application inspired by ChatGPT, It supports conversation history, thread management, and an interactive UI for a smooth user experience. ",
    techStack: ["MongoDB", "React.js", "Node.js", "API Integration"],
    demoLink: "https://r-gpt-nine.vercel.app/",
    githubLink: "https://github.com/ROHIT-JINJALA/R-GPT",
    image: RGPT,
    // image: "https://github.com/ROHIT-JINJALA/R-GPT/raw/main/image.png"
  },
  {
    name: "ClothOra",
    description:
      "An e-commerce platform with secure payment integration, product management, and user review features. Built with the MERN stack.",
    techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "Stripe"],
    demoLink: "https://cloth-ora.vercel.app/",
    githubLink: "https://github.com/ROHIT-JINJALA/ClothOra",
    image: ClothOra,
  },
];

export default projectData;
