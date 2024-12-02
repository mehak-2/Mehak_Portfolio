"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiGithub, FiExternalLink } from "react-icons/fi"; // Add icons for GitHub and deployed links

const items = [
  {
    id: 1,
    color: "from-indigo-600 via-blue-600 to-teal-500",
    title: "FaHub",
    desc: "An Ecommerce Shopping Website",
    image: "/1pro.jpeg",
    link: "https://react-shop-plum-seven.vercel.app/",
    deployedLink: "https://react-shop-plum-seven.vercel.app/",
    githubLink: "https://github.com/mehak-2/react_shop",
  },
  {
    id: 2,
    color: "from-green-400 via-yellow-500 to-pink-500",
    title: "Chat App",
    desc: "A Chat App built with React JS, API",
    image: "/2pro.jpeg",
    link: "https://luxury-squirrel-100f11.netlify.app/",
    deployedLink: "https://luxury-squirrel-100f11.netlify.app/",
    githubLink: "https://github.com/mehak-2/react-chatapp",
  },
  {
    id: 3,
    color: "from-purple-600 via-pink-500 to-red-500",
    title: "Grocery Store",
    desc: "An Ecommerce Website built with React JS",
    image: "/3pro.jpeg",
    link: "https://ecommerceweb-kappa.vercel.app/",
    deployedLink: "https://ecommerceweb-kappa.vercel.app/",
    githubLink: "https://github.com/mehak-2/ecommerceweb",
  },
  {
    id: 4,
    color: "from-cyan-500 via-indigo-600 to-purple-700",
    title: "School Management System",
    desc: "A Management System built with Java, MySQL, J2EE, and more",
    image: "/4pro.jpeg",
    link: "https://github.com/mehak-2/school-management-web-app",
    deployedLink: "https://github.com/mehak-2/school-management-web-app",
    githubLink: "https://github.com/mehak-2/school-management-web-app",
  },
  {
    id: 5,
    color: "from-yellow-500 via-red-600 to-orange-700",
    title: "Keyframes App",
    desc: "Built using React Js, APIs, and JSON",
    image: "/5pro.jpeg",
    link: "https://keyframes-app.vercel.app/",
    deployedLink: "https://keyframes-app.vercel.app/",
    githubLink: "https://github.com/mehak-2/keyframes_app",
  },
  {
    id: 6,
    color: "from-yellow-500 via-red-600 to-orange-700",
    title: "CarWash App",
    desc: "Built using React Js, Talwind css, Typescript",
    image: "/6pro.jpeg",
    link: "https://carwash-pi.vercel.app/",
    deployedLink: "https://carwash-pi.vercel.app/",
    githubLink: "https://github.com/mehak-2/carwash",
  },
  {
    id: 7,
    color: "from-yellow-500 via-red-600 to-orange-700",
    title: "Quiz App",
    desc: "Built using Next Js, Talwind css, Typescript",
    image: "/7pro.jpeg",
    link: "https://quizassign.vercel.app/",
    deployedLink: "https://quizassign.vercel.app/",
    githubLink: "https://github.com/mehak-2/quizassign",
  },
  {
    id: 8,
    color: "from-yellow-500 via-red-600 to-orange-700",
    title: "Pokemon App",
    desc: "Built using React JS, Css,API",
    image: "/8pro.jpeg",
    link: "https://pokemon-app1-iota.vercel.app/",
    deployedLink: "https://pokemon-app1-iota.vercel.app/",
    githubLink: "https://github.com/mehak-2/pokemon-app1",
  },
  {
    id: 9,
    color: "from-yellow-500 via-red-600 to-orange-700",
    title: "Canva Clone",
    desc: "Built using Html, Css,Js",
    image: "/9pro.jpeg",
    link: "https://canva-task-1.vercel.app/",
    deployedLink: "https://canva-task-1.vercel.app/",
    githubLink: "https://github.com/mehak-2/canva-task-1",
  },
  {
    id: 10,
    color: "from-yellow-500 via-red-600 to-orange-700",
    title: "Weather App",
    desc: "Built using React Js, Javascript, CSS, API",
    image: "/10pro.jpeg",
    link: "https://react-weatherapp-mehak-2.vercel.app/",
    deployedLink: "https://react-weatherapp-mehak-2.vercel.app/",
    githubLink: "https://github.com/mehak-2/react-weatherapp",
  },
  {
    id: 11,
    color: "from-yellow-500 via-red-600 to-orange-700",
    title: "Shopping Web",
    desc: "Built using React Js, Javascript, CSS, Firebase",
    image: "/11pro.jpeg",
    link: "https://www.fabricfashion.in.net/",
    deployedLink: "https://www.fabricfashion.in.net/",
    githubLink: "https://github.com/mehak-2/fabricfashion",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  return (
    <motion.div className="h-full">
      <div className="min-h-screen relative overflow-y-auto" ref={ref}>
        <motion.div
          className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center relative"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.h1
            className="text-white font-bold text-6xl sm:text-8xl lg:text-9xl xl:text-10xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{
              letterSpacing: "2px",
              textShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
              color: "black",
            }}
          >
            My Works
          </motion.h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              className="bg-gradient-to-r rounded-lg shadow-xl transform transition-transform duration-500 hover:scale-105"
              style={{
                background: `linear-gradient(135deg, ${item.color})`,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: index * 0.3,
              }}
            >
              <div className="relative h-64">
              <img
  src={item.image}
  alt={item.title}
  className="rounded-t-lg w-full h-full object-cover"
/>

              </div>
              <div className="p-6 text-white flex flex-col">
                <motion.h2
                  className="text-2xl font-semibold mb-4 text-black"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {item.title}
                </motion.h2>
                <p className="text-sm mb-6 text-blue-400">{item.desc}</p>
                <div className="flex gap-4">
                  <Link
                    href={item.deployedLink}
                    aria-label={`Visit deployed ${item.title}`}
                    className="flex items-center justify-center text-lg py-2 px-4 bg-blue-600 rounded-md hover:bg-blue-500 transition"
                  >
                    <FiExternalLink className="mr-2" />
                    Deployed
                  </Link>
                  <Link
                    href={item.githubLink}
                    aria-label={`Visit GitHub repo for ${item.title}`}
                    className="flex items-center justify-center text-lg py-2 px-4 bg-gray-800 rounded-md hover:bg-gray-700 transition"
                  >
                    <FiGithub className="mr-2" />
                    GitHub
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center bg-gray-400 z-20">
          <h1 className="text-8xl text-white">Do you have a project?</h1>
          <div className="relative">
            <motion.svg
              animate={{ rotate: 360 }}
              transition={{
                duration: 8,
                ease: "linear",
                repeat: Infinity,
              }}
              viewBox="0 0 300 300"
              className="w-64 h-64 md:w-[500px] md:h-[500px]"
            >
              <defs>
                <path
                  id="circlePath"
                  d="M 150, 150 m -60, 0 a 60, 60 0 0, 1 120, 0a 60,60 0 0, 1 -120 ,0"
                />
              </defs>
              <text fill="#000">
                <textPath xlinkHref="#circlePath" className="text-xl">
                  Full Stack Developer
                </textPath>
              </text>
            </motion.svg>

            <Link
              href="/contact"
              aria-label="Contact me"
              className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center z-10"
            >
              Hire Me
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;