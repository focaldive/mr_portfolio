import React from "react";

const CardExperience = ({ company, duration, description }) => {
  return (
    <div>
      <a className="block my-5 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-[#141414] dark:border-gray-700 dark:hover:bg-gray-800">
        <h5 className="text-lg font-medium tracking-tight text-gray-900 dark:text-white">
          {company}
        </h5>
        <p className="text-gray-500 mb-3">{duration}</p>
        <p className="font-normal text-gray-700 dark:text-gray-400 text-sm">
          {description}
        </p>
      </a>
    </div>
  );
};

export default CardExperience;
