import React from "react";

const CardWork = ({ title, description, img_src }) => {
  const truncatedDescription =
    description.length > 240 ? description.slice(0, 240) + "..." : description;

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-[#141414] dark:border-gray-700 relative">
      <a href="#">
        <img
          className="rounded-t-lg"
          src={img_src}
          alt=""
          style={{ width: 430, height: 280 }}
        />
      </a>
      <div className="p-5" style={{ marginBottom: "50px" }}>
        <a>
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {truncatedDescription}
        </p>
      </div>
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
