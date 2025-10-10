import React from 'react';
import glogo from '../assets/google play-logo.png';
import applogo from '../assets/app-store-logo.png';
import hero from '../assets/hero.png';
import { Link } from 'react-router';

const Banner = () => {
    return (
        <div>
            <div className=" px-3 sm:px-8 md:px-14 lg:px-20 pt-3 sm:pt-8 md:pt-14 lg:pt-20 " >
                <div className="  text-center">
                    <div className=" text-center mb-[50px]">
                        <h1 className="mb-5 text-3xl sm:text-5xl font-bold text-center">We Build<br/>
                           <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>Productive</span>  Apps</h1>
                        <p className="mb-5 text-[#627382]">
                            At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br/>Our goal is to turn your ideas into digital experiences that truly make an impact.
                        </p>
                        <Link to='https://play.google.com/store' target="_blank" className="btn  mr-2"><img src={glogo} alt="google-logo" className='w-8 h-8 ' />
                            Google Play</Link>
                        <Link to='https://www.apple.com/app-store/' target="_blank" className="btn "><img src={applogo} alt="app-store-logo" className='w-8 h-8' />
                            App Store</Link>
                    </div>
                    <div className=''>
                        <img className='mx-auto pt-10' src={hero} alt="hero-logo" />
                    </div>
                </div>

            </div>

            <div className="p-3 sm:p-8 md:p-14 lg:p-20 text-white bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)]">
                <h1 className='text-center font-bold text-3xl sm:text-[48px] mb-10'>Trusted By Millions, Built for You</h1>
                <div className="flex flex-col gap-7 md:flex-row md:justify-around justify-center items-center">
                    <div className="">
                        <p className='font-normal text-[16px]'>Total Downloads</p>
                        <p className='font-extrabold text-3xl sm:text-[64px]'>29.6M</p>
                        <p className='font-normal text-[16px]'>21% more than last month</p>
                    </div>
                    <div className="">
                        <p className='font-normal text-[16px]'>Total Reviews</p>
                        <p className='font-extrabold text-3xl sm:text-[64px]'>906K</p>
                        <p className='font-normal text-[16px]'>46% more than last month</p>
                    </div>
                    <div className="">
                        <p className='font-normal text-[16px]'>Active Apps</p>
                        <p className='font-extrabold text-3xl sm:text-[64px]'>132+</p>
                        <p className='font-normal text-[16px]'>31 more will Launch</p>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Banner;