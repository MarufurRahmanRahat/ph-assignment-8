import React from 'react';
import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content px-3 py-10 sm:px-8 md:px-14 lg:px-20  ">
            
            <nav>
                <h6 className="font-bold sm:flex justify-center items-center text-white"><img src={logo} alt="hero-logo" className='h-10 w-10' />
                                    HERO.IO</h6>
                <a className="link link-hover sm:pl-[40px]">About us</a>
                <a className="link link-hover sm:pl-[40px]">Contact</a>
                <a className="link link-hover sm:pl-[40px]">Jobs</a>
                <a className="link link-hover sm:pl-[40px]">Press kit</a>
            </nav>
            <nav>
                <h6 className="footer-title mt-3">Services</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <h6 className="footer-title mt-3">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    );
};

export default Footer;