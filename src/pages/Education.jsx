import React from 'react';
import InfoCard from '../components/InfoCard';

const educationData = [
  {
    section: "2018 - 2022",
    position: "Bachelor of Technology in Computer Science and Engineering",
    company: "Dr. A.P.J. Abdul Kalam Technical University (AKTU)",
    description:
      "Grade: First Division"
  },
  {
    section: "2017 - 2018",
    position: "12th class with PCM (Physics, Chemistry, and Mathematics)",
    company: "SD Inter Collage Sadar Meerut, UP Board",
    description:
      "Grade: First Division"
  },
  {
    section: "2015 - 2016",
    position: "10th class with Science",
    company: "SD Inter Collage Sadar Meerut, UP Board",
    description:
      "Grade: First Division"
  },
];

const Education = () => {
  return (
    <div className="">
      <div className='flex justify-center '>
      <h1 className="text-4xl font-bold text-orange-400 text-center border-4 border-gray-500 w-52 rounded-xl py-4 mb-10">Education</h1>
      </div>
      <div className="flex flex-wrap justify-center">
        {educationData.map((item, index) => (
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

export default Education;

