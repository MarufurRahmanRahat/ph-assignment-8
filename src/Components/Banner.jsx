import React from 'react';
import glogo from '../assets/google play-logo.png';
import applogo from '../assets/app-store-logo.png';
import hero from '../assets/hero.png';

const Banner = () => {
    return (
        <div>
            <div className="border-2 border-amber-400 " >
                <div className="hero-content  text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">We Build
                            Productive Apps</h1>
                        <p className="mb-5">
                            At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.
                        </p>
                        <button className="btn btn-primary mr-2"><img src={glogo} alt="google-logo" className='w-8 h-8 ' />
                            Google Play</button>
                        <button className="btn btn-primary"><img src={applogo} alt="app-store-logo" className='w-8 h-8' />
                            App Store</button>
                        <div className='mb-[-16px]'>
                            <img src={hero} alt="hero-logo" className='pt-10' />
                        </div>
                    </div>
                </div>
            </div>
          
          <div className="p-3 sm:p-8 md:p-14 lg:p-20 text-white bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)]">
            <h1 className='text-center font-bold text-[48px] mb-10'>Trusted By Millions, Built for You</h1>
            <div className="flex flex-col gap-7 md:flex-row justify-around items-center">
                <div className="">
                    <p className='font-normal text-[16px]'>Total Downloads</p>
                    <p className='font-extrabold text-[64px]'>29.6M</p>
                    <p className='font-normal text-[16px]'>21% more than last month</p>
                </div>
                <div className="">
                    <p className='font-normal text-[16px]'>Total Reviews</p>
                    <p className='font-extrabold text-[64px]'>906K</p>
                    <p className='font-normal text-[16px]'>46% more than last month</p>
                </div>
                <div className="">
                    <p className='font-normal text-[16px]'>Active Apps</p>
                    <p className='font-extrabold text-[64px]'>132+</p>
                    <p className='font-normal text-[16px]'>31 more will Launch</p>
                </div>
            </div>
          </div>


        </div>
    );
};

export default Banner;