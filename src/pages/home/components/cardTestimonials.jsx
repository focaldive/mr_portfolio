import React from "react";

const CardTestimonials = ({ testimonial, job, name, img, company, href }) => {
  return (
    <figure className="relative flex flex-col justify-start p-8 text-left bg-white border border-gray-200 rounded-lg md:border-e dark:bg-[#141414] dark:border-gray-700">
      <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
        <p className="my-4">&quot;{testimonial}&quot;</p>
      </blockquote>
      <figcaption className="flex flex-row items-center justify-center absolute bottom-0 left-0 w-full p-4">
        <img className="rounded-full w-9 h-9" src={img} alt="profile picture" />
        <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
          <div>{name}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {job} at {"\t"}
            <a href={href} target="_blank" className="underline">
              {company}
            </a>
            {"\t"}
            Company
          </div>
        </div>
      </figcaption>
    </figure>
  );
};

export default CardTestimonials;
