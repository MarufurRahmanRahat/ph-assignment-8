import React from 'react';
import { Link, useRouteError } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import apperror from '../assets/App-Error.png'

const Error = () => {
    const error = useRouteError();
    return (
        <div>
            <Navbar />
            <div className='text-center p-3 sm:p-8 md:p-14 lg:p-20 bg-[#F5F5F5]'>
                <img className='mx-auto' src={apperror} alt="" />
                <h1 className='font-bold text-5xl py-4'>OPPS!! APP NOT FOUND</h1>
                <p className='font-normal text-[20px] py-1.5'>The App you are requesting is not found on our system.  please try another apps</p>
                <Link to='/apps' className='btn btn-primary mt-4'>Go Back</Link>
            </div>
            <Footer />

        </div>
    )
};

export default Error;