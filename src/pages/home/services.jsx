import React from 'react'
import CardService from './components/cardService'

const Services = () => {
  return (
    <div id='service' className='my-20'>
        <h1 className='font-medium text-3xl'>Services</h1>
        <br />
        <CardService />
        <CardService />
        <CardService />
    </div>
  )
}

export default Services