import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export default function FooterGlobal() {
    return (
        <div className='bg-[#2B2121] w-full'>
            <div className='w-[90%] mx-auto flex flex-col lg:flex-row gap-10 lg:gap-2  lg:items-start lg:justify-between lg:pt-20 pt-5 lg:pb-5 pb-5 text-white text-center lg:text-start'>
                <div className='lg:space-y-3 space-y-2 lg:border-r lg:w-[30%] lg:pr-5 flex flex-col items-center lg:items-start border-b pb-5 lg:border-b-0 lg:pb-0 lg:h-[200px]'>
                    <Image src='https://iili.io/2TwgNxp.png' alt='webbriks' width={171} height={30} priority={true}/>
                    <p>
                        We offer a range of services to help your business succeed, from design and development to digital marketing and more.
                    </p>
                    <p className='font-semibold'>
                        Follow Us On Social Media
                    </p>
                    <div className='flex gap-3 items-center justify-start'>
                        <Link href='/' target='_blank'>
                            <FaFacebookF className=''/>
                        </Link>
                        <Link href='/' target='_blank'>
                            <FaLinkedinIn className=''/>
                        </Link>

                    </div>
                </div>


                <div className=' lg:space-y-3 space-y-2 lg:border-r lg:w-[15%] border-b pb-5 lg:border-b-0 lg:pb-0 lg:h-[200px]'>
                    <h2 className='text-xl font-semibold '>Quick Links</h2>
                    <div className='flex flex-col space-y-2'>
                        <Link href='#'>Term & Condition</Link>
                        <Link href='#'>Privacy Policy</Link>
                        <Link href='#'>Refund Policy</Link>
                        <Link href='#'>Disclaimer Policy</Link>
                    </div>
                </div>


                <div className=' lg:space-y-3 space-y-2 lg:border-r lg:w-[15%] border-b pb-5 lg:border-b-0 lg:pb-0 lg:h-[200px]'>
                    <h2 className='text-xl font-semibold'>Quick Links</h2>
                    <div className='flex flex-col space-y-2'>
                        <Link href='#'>Term & Condition</Link>
                        <Link href='#'>Privacy Policy</Link>
                        <Link href='#'>Refund Policy</Link>
                        <Link href='#'>Disclaimer Policy</Link>
                    </div>
                </div>

                <div className=' lg:space-y-3 space-y-2 lg:w-[20%]'>
                    <h2 className='text-xl font-semibold'>Contact Us</h2>
                    <p>
                        Email: info@webbriks.com
                    </p>
                    <p>
                    Phone: +1 718 577 1232
                    </p>
                    <p>
                    Address: Web briks, LLC. 1209, Mountain Road PL NE, STE R, ALBUQUERQUE, NM, 87110
                    </p>
                </div>
            </div>
        </div>
    )
}
