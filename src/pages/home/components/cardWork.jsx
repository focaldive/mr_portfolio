import React from "react";

const CardWork = ({ title, description, img_src, techs = [] }) => {
  const truncatedDescription =
    description.length > 240 ? description.slice(0, 240) + "..." : description;

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-[#141414] dark:border-gray-700 relative">
      <a href="#">
        <img className="rounded-t-lg bg-cover" src={img_src} />
      </a>
      <div className="w-full p-5" style={{ marginBottom: "50px" }}>
        <a>
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {truncatedDescription}
        </p>
        <div className="w-fit">
          {techs.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <br />
      <div className="absolute bottom-4 left-4">
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-[#fdda32] rounded-lg hover:bg-[#f4e7a6] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-[#fdda32]"
        >
          Read More
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default CardWork;
