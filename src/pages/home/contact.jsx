import React from 'react'
import MailIcon from '@mui/icons-material/Mail';
import ContactForm from './components/ContactForm';
import logo from '../../assets/logo.png'
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Contact = () => {
    return (
        <div className='my-20' id='contact'>
            <div className='block xl:hidden lg:hidden md:hidden'>
                <img src={logo} alt="logo" className='xl:w-[150px] lg:w-[150px] md:w-[150px] w-[100px]' />
                <br />
                <div className='flex gap-4 justify-start text-white'>
                    <XIcon className='hover:text-[#fdda34] hover:cursor-pointer' fontSize='medium' />
                    <LinkedInIcon className='hover:text-[#fdda34] hover:cursor-pointer' fontSize='medium' />
                    <InstagramIcon className='hover:text-[#fdda34] hover:cursor-pointer' fontSize='medium' />
                </div>
            </div>
            <h1 className='mt-10 text-3xl font-medium'>Get in touch</h1>
            <br />
            <p className='text-gray-400'>Whether you have a question, a project idea, or just want to say hello, I'd love to hear from you. Reach out and let's start a conversation.</p>
            <div className='mt-8 flex items-center gap-3'>
                <MailIcon className='hover:text-[#fdda34] hover:cursor-pointer' fontSize='medium' />
                <h1 className='text-xl font-medium hover:text-[#fdda34] hover:cursor-pointer'>rishadmohamed@gmail.com</h1>
            </div>
            <div className="py-8 lg:py-10 mx-auto">
                <ContactForm />
            </div>
        </div>
    )
}

export default Contact