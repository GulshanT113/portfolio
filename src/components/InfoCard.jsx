import React from "react";

const InfoCard = ({
  section,
  position,
  company,
  description,
  tools_tech,
  url,
}) => {
  return (
    <div className="px-2 sm:px-4 md:px-6 lg:px-8 py-4 w-full md:w-1/2">
      <div className="bg-[rgb(12,12,12)] shadow-xl rounded-xl p-6 w-full transition hover:shadow-2xl h-full">
        {/* Data Section */}
        <div className="text-4xl font-bold uppercase tracking-wide text-orange-400 font-semibold mb-2">
          {section}
        </div>

        {/* Company Name */}
        <h3 className="text-2xl text-gray-300 mb-4">{company}</h3>

        {/* Title / Position */}
        <h2 className="text-3xl text-white font-bold text-gray-800 mb-2">
          {position}
        </h2>

        {/* Tools & Tech */}
        {tools_tech ? (
          <h2 className="text-2xl text-white font-semibold text-gray-800 mb-2">
            Tool & Tech: {tools_tech}
          </h2>
        ) : (
          ""
        )}


        {/* Paragraph / Description */}
        <p className="text-xl text-gray-100 leading-relaxed">{description}</p>
        {url ? (
          <div className="flex items-center">
            <h1 className="text-xl font-bold pe-2 py-2">URL / Link: </h1>
            <a
              href={url}
              className="text-gray-300 font-bold hover:text-orange-600 underline text-lg sm:text-xl break-words"
            >
              E-commerce Web App
            </a>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default InfoCard;
