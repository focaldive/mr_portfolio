import React from 'react'

const CardWork = () => {
    return (
        <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-[#141414] dark:border-gray-700">
            <a href="#">
                <img className="rounded-t-lg" src="https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            </a>
            <div className="p-5">
                <a>
                    <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-[#fdda32] rounded-lg hover:bg-[#f4e7a6] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-[#fdda32] ">
                    Read more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </a>
            </div>
        </div>
    )
}

export default CardWork