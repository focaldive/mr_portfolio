import React from 'react'
import CardExperience from './components/cardExperience'
import CardTestimonials from './components/cardTestimonials'

const About = () => {
    return (
        <div id='about' className='my-20'>
            <h1 className='font-medium text-3xl'>About me</h1>
            <br />
            <p className='text-gray-400'>As a Full Stack Developer with expertise in React, Node, NextJS, MERN, Flutter, and React Native, I provide cost-effective solutions without compromising on quality. My services are affordably priced to ensure the best value for your investment. With a fluent command of English and five years of experience in the field, my aim is to foster enduring professional partnerships.</p>
            <br />
            <br />
            <h1 className='text-xl font-medium'>Work Experience</h1>
            <CardExperience />
            <CardExperience />
            <CardExperience />
            <br />
            <br />
            <h1 className='text-xl font-medium'>Testimonials</h1>
            <div className='my-5 grid gap-5 rounded-lg shadow-sm md:mb-12 md:grid-cols-2 dark:bg-[#141414]'>
                <CardTestimonials />
                <CardTestimonials />
                <CardTestimonials />

            </div>
            
        </div>
    )
}

export default About