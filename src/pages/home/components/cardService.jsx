import React from "react";

const CardService = ({ title, description }) => {
  return (
    <div>
      <a className="block my-5 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-[#141414] dark:border-gray-700 dark:hover:bg-gray-800">
        <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-[#fdda34]">
          {title}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
      </a>
    </div>
  );
};

export default CardService;
