import React from 'react'
import dp from '../../assets/dp.jfif'
import Work from './work'
import Services from './services'
import logo from '../../assets/logo.png'
import About from './about'
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import Contact from './contact'

const Home = () => {
    return (
        <>
            <div className='hidden xl:block lg:block md:block'>
                <div className='fixed right-5 bottom-5'>
                    <img src={logo} alt="logo" className='xl:w-[150px] lg:w-[150px] md:w-[150px] w-[100px]' />
                    <br />
                    <div className='flex gap-4 justify-end text-white'>
                        <XIcon className='hover:text-[#fdda34] hover:cursor-pointer' fontSize='medium' />
                        <LinkedInIcon className='hover:text-[#fdda34] hover:cursor-pointer' fontSize='medium' />
                        <InstagramIcon className='hover:text-[#fdda34] hover:cursor-pointer' fontSize='medium' />
                    </div>
                </div>
            </div>
            <div className='text-white xl:mx-[350px] lg:mx-[200px] md:mx-[120px] mx-[75px]'>
                <div id='intro' className='my-20'>
                    <div className='w-24 rounded-full'>
                        <img src={dp} alt='profile' className='rounded-full' />
                    </div>
                    <br />
                    <h1 className='text-4xl font-medium'>Hey I'm <span className='text-[#fdda32] font-bold'>M</span>ohamed <span className='text-[#fdda32] font-bold'>R</span>ishad</h1>
                    <br />
                    <p className='text-gray-400'>Full Stack Developer proficient in React, Node, NextJS, MERN, Flutter, and React Native. I am offering cost-efficient services at affordable prices with a focus on high-quality work. Fluent in English, with 5 years of experience, I prioritize long-term working relationships.</p>
                </div>
                <Work />
                <Services />
                <About />
                <Contact />
            </div>
        </>

    )
}

export default Home