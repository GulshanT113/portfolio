import React from "react";
import InfoCard from "../components/InfoCard";

const projectData = [
  {
    section: "July 2023 - Feb 2025",
    position: "Frontend Developer",
    company: "RSK Business Solutions PVT",
    description:
      "Worked on building scalable and responsive web applications using React.js and Next.js, Tailwind CSS Bootstrap CSS and Custom CSS too, and integrated REST APIs. Focused on performance and clean UI and mobile-friendly layouts too.",
  },
  {
    section: "April 2023 - June 2023",
    position: "Frontend Developer Internship",
    company: "RSK Business Solutions PVT",
    description:
      "Built dynamic 'forms library', reusable components, and handled state using Redux and Context API. Delivered mobile-friendly layouts with Tailwind and custom css too.",
  },
  {
    section: "Dec 2022 - March 2023",
    position: "Technical Program Manager",
    company: "Geekster.in",
    description:
      "As a Technical Program Manager at Geekster, I was responsible for creating and uploading technical courses focused on software development and interview preparation. I also managed student conduct during online assessments by identifying instances of cheating through accuracy checks, conducting meetings with involved students, and taking appropriate disciplinary actions based on the outcomes.",
  },
  {
    section: "Sep 2022 - Nov 2022",
    position: "Teaching Assistant in (DSA)",
    company: "Geekster.in",
    description:
      "In this role, I have actively supported students in developing their problem-solving and logical thinking. I assist them when they encounter difficulties in understanding or building logic for given questions.",
  },
];

const Experience = () => {
  return (
    <div className="">
      {/* min-h-screen  */}
      <div className="flex justify-center">
        <h1 className="text-4xl font-bold text-orange-400 text-center border-4 border-gray-500 w-60 rounded-xl py-4 mb-10">
          Experience
        </h1>
      </div>
      <div className="flex flex-wrap justify-center">
        {projectData.map((item, index) => (
          <InfoCard
            key={index}
            section={item.section}
            position={item.position}
            company={item.company}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
