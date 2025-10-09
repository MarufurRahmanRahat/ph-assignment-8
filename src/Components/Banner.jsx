import React from 'react';
import glogo from '../assets/google play-logo.png';
import applogo from '../assets/app-store-logo.png';
import hero from '../assets/hero.png';

const Banner = () => {
    return (
        <div>
            <div className=" " >
                <div className="hero-content  text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">We Build
                            Productive Apps</h1>
                        <p className="mb-5">
                            At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.
                        </p>
                        <button className="btn btn-primary"><img src={glogo} alt="google-logo"  className='w-8 h-8'/>
                            Google Play</button>
                        <button className="btn btn-primary"><img src={applogo} alt="app-store-logo" className='w-8 h-8'/>
                            App Store</button>
                        <img src={hero} alt="hero-logo" className='pt-10' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;