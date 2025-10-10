import React from 'react';
import { Link } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import error from '../assets/error-404.png';

const ErrorAppNotFound = () => {
    return (
        <div>
           <Navbar />
            <div className='text-center p-3 sm:p-8 md:p-14 lg:p-20 bg-[#F5F5F5]'>
                <img className='mx-auto' src={error} alt="" />
                <h1 className='font-bold text-5xl py-4'>Oops, page not found!</h1>
                <p className='font-normal text-[20px] py-1.5'>The page you are looking for is not available.</p>
                <Link to='/' className='btn btn-primary mt-4'>Go Back</Link>
            </div>
            <Footer />
        </div>
    );
};

export default ErrorAppNotFound;