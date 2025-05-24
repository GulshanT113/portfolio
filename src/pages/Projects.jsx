import React from "react";
import InfoCard from "../components/InfoCard";

const projectData = [
  {
    section: "April 2025",
    position: "E-commerce Web App",
    company: "Self Made",
    tools_tech:
      "Reactjs + Vite, Material UI, Tailwind@3 CSS, Formik & Yup, Context Api, Github, etc.",
    description:
      "Overview:- Develop a fully functional e-commerce web application that allows users to browse, search, and purchase products online. The platform will feature a responsive user interface, product listings with detailed information, a shopping cart checkout process is also there.",
    url: "https://e-commerce-shoping-web-uupf.vercel.app/",
  },
  {
    section: "Nov 2024 - Feb 2025",
    position: "CMI Web App (Check Me In)",
    company: "RSK Business Solutions Pvt Ltd",
    tools_tech:
      "Reactjs, Routing, Material UI, Bootstrap CSS, Typescript, Formik & Yup, Redux, GitHub, Azure Devops, etc.",
    description:
      "Overview:- Overall, the CMI (Check Me In) system offers a comprehensive solution for user management, tracking, and safety monitoring across both web and mobile platforms.",
  },
  {
    section: "June 2024 - Oct 2024",
    position: "CMI Mobile App (Check Me In)",
    company: "RSK Business Solutions Pvt Ltd",
    tools_tech:
      "React Native, Routing, Material UI, Bootstrap CSS, Typescript, Formik & Yup, Redux, GitHub, Azure Devops, etc.",
    description:
      "Overview:- Overall, the CMI (Check Me In) system offers a comprehensive solution for user management, tracking, and safety monitoring across both web and mobile platforms.",
  },
  {
    section: "Jan 2024 - May 2024",
    position: "MathChamp Web App",
    company: "RSK Business Solutions Pvt Ltd",
    tools_tech:
      "Nextjs, Typescript, Formik & Yup, Next UI, Tailwind CSS, Github, Azure Dev, etc.",
    description:
      "Overview:- MathChamp is an innovative online platform designed to empower young learners in grades 3 8 by enhancing their mathematical skills from the comfort of their homes.",
  },
  {
    section: "Aug 2023 - Dec 2023",
    position: "DFL Web App (Dynamic Forms Library)",
    company: "RSK Business Solutions Pvt Ltd",
    tools_tech:
      "Reactjs, Typescript, Routing, Formik & Yup, Tailwind CSS & Custom CSS, Github, Azure Dev, etc.",
    description:
      "Overview:- The Dynamic Forms project focused on developing a system that allows users to create and manage customized forms dynamically.",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen">
      <div className="flex justify-center">
        <h1 className="text-4xl font-bold text-orange-400 text-center border-4 border-gray-500 w-48 rounded-xl py-4 mb-10">
          Projects
        </h1>
      </div>
      <div className="flex flex-wrap justify-center">
        {projectData.map((item, index) => (
          <InfoCard
            key={index}
            section={item.section}
            position={item.position}
            company={item.company}
            tools_tech={item.tools_tech}
            description={item.description}
            url={item.url}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
