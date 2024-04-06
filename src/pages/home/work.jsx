import React from 'react'
import CardWork from './components/cardWork'

const Work = () => {
    return (
        <div className='my-20' id='work'>
            <h1 className='font-medium text-3xl'>Selected Works</h1>
            <br />
            <br />
            <div className='grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-10'>
                <CardWork />
                <CardWork />
                <CardWork />
            </div>
        </div>
    )
}

export default Work