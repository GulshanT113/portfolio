import React from "react";

const skills = [
  "ReactJS",
  "Next.js",
  "React Native",
  "Next UI",
  "Material UI",
  "Tailwind CSS",
  "Bootstrap CSS",
  "Formik & Yup",
  "JavaScript",
  "TypeScript",
  "GitHub",
  "Azure Dev",
];

const KeySkills = () => {
  return (
    <div className="px-4 py-10">
      <div className="flex justify-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-orange-500 mb-12 border-4 border-gray-500 p-4 w-64 rounded-xl">
          Key Skills
        </h2>
      </div>
      <div className="bg-[rgb(12,12,12)] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8 rounded-xl p-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="font-bold text-center text-gray-300 text-xl py-4 sm:text-lg m-2 p-2 rounded-lg shadow hover:bg-orange-600 hover:text-white transition duration-300"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeySkills;

