import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'

export default function ServicesHome() {
    return (
        <div className='w-full bg-[#FFFBF4] '>
            <div className='w-[90%] mx-auto max-w-screen-2xl '>
                <div className='flex flex-col gap-5 lg:flex-row items-center justify-between'>
                    <div>
                        <h2 className='lg:text-5xl md:text-4xl text-3xl text-[#2B2121] font-semibold lg:leading-[57px]'>
                            Our Comprehensive Suite Of Digital Marketing Services
                        </h2>
                    </div>
                    <div>
                        <p>
                            {`This growth led us to create "Web Briks LLC." Now, we offer additional services, including virtual assistance and web design.`}
                        </p>
                        <div>
                            <button className='font-semibold underline mt-3 flex items-center gap-1'>
                                Our Works <FiArrowUpRight />
                            </button>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col lg:flex-row items-center justify-between'>
                    <div className='bg-white'>

                    </div>
                </div>

            </div>
        </div>
    )
}
