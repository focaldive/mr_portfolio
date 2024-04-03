import React from 'react'

const CardTestimonials = () => {
    return (
        <figure className="flex flex-col justify-start p-8 text-left bg-white border border-gray-200 rounded-lg  md:border-e dark:bg-[#141414] dark:border-gray-700">
            <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                <p className="my-4">"Rishad is a digital design maestro! He took our vision and turned it into a digital masterpiece. Every pixel, every interaction felt tailored for our audience. If you're looking for a designer who truly listens and delivers, Rishad's your guy."</p>
            </blockquote>
            <figcaption className="flex flex-row start items-center justify-center ">
                <img className="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture" />
                <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                    <div>Bonnie Green</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 ">Developer at Open AI</div>
                </div>
            </figcaption>
        </figure>

    )
}

export default CardTestimonials