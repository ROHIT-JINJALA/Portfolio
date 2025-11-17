import {
  FileCode,
  Palette,
  SquareCode,
  Atom,
  Boxes,
  Wind,
  Server,
  Code,
  Database,
  DatabaseZap,
  GitBranch,
  Github,
  Send,
  Braces,
  Package,
  FileText,
} from "lucide-react";

const skillData = [
  // Frontend
  {
    name: "HTML5",
    category: "Frontend",
    icon: <FileCode className="w-10 h-10 text-orange-500" />,
  },
  {
    name: "CSS3",
    category: "Frontend",
    icon: <Palette className="w-10 h-10 text-blue-500" />,
  },
  {
    name: "JavaScript",
    category: "Frontend",
    icon: <SquareCode className="w-10 h-10 text-yellow-400" />,
  },
  {
    name: "React",
    category: "Frontend",
    icon: <Atom className="w-10 h-10 text-cyan-400" />,
  },
  {
    name: "Redux",
    category: "Frontend",
    icon: <Boxes className="w-10 h-10 text-purple-500" />,
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    icon: <Wind className="w-10 h-10 text-teal-400" />,
  },
  {
    name: "Bootstrap CSS",
    category: "Frontend",
    icon: <Braces className="w-10 h-10 text-cyan-400" />,
  },
  // backend
  {
    name: "Node.js",
    category: "Backend",
    icon: <Server className="w-10 h-10 text-green-500" />,
  },
  {
    name: "Express.js",
    category: "Backend",
    icon: <Code className="w-10 h-10 text-gray-600" />,
  },
  {
    name: "MongoDB",
    category: "Backend",
    icon: <Database className="w-10 h-10 text-green-600" />,
  },
  {
    name: "PostgreSQL",
    category: "Backend",
    icon: <DatabaseZap className="w-10 h-10 text-sky-600" />,
  },
  {
    name: "EJS",
    category: "Backend",
    icon: <FileText className="w-10 h-10 text-pink-500" />,
  },
  // Tools & Others
  {
    name: "Git",
    category: "Tools & Others",
    icon: <GitBranch className="w-10 h-10 text-red-500" />,
  },
  {
    name: "GitHub",
    category: "Tools & Others",
    icon: <Github className="w-10 h-10 text-gray-800" />,
  },
  {
    name: "Postman",
    category: "Tools & Others",
    icon: <Send className="w-10 h-10 text-orange-400" />,
  },
  {
    name: "npm",
    category: "Tools & Others",
    icon: <Package className="w-10 h-10 text-red-600" />,
  },
  // { name: "DSA", category: "Tools & Others", icon: <Braces className="w-10 h-10 text-indigo-500" /> },
];

export default skillData;
