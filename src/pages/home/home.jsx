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
            <div className='logo'>
                <img src={logo} alt="logo" />
                <br />
                <div className='flex gap-4 justify-end text-white'>
                    <XIcon className='hover:text-[#fdda34] hover:cursor-pointer' fontSize='medium' />
                    <LinkedInIcon className='hover:text-[#fdda34] hover:cursor-pointer' fontSize='medium' />
                    <InstagramIcon className='hover:text-[#fdda34] hover:cursor-pointer' fontSize='medium' />
                </div>
            </div>
            <div className='text-white mx-[350px] '>
                <div id='intro' className='my-20'>
                    <div className='w-24 rounded-full'>
                        <img src={dp} alt='profile' className='rounded-full' />
                    </div>
                    <br />
                    <h1 className='text-4xl font-medium'>Hey I'm <span className='text-[#fdda32] font-extrabold'>M</span>ohamed <span className='text-[#fdda32] font-extrabold'>R</span>ishad</h1>
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