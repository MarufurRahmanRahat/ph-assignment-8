import React from 'react';
import { Link, useLoaderData } from 'react-router';
import Banner from '../Components/Banner';
import Appcard from '../Components/Appcard';
import useProducts from '../Hooks/useProducts';
import LoadingSpinner from '../Components/LoadingSpinner';

const Home = () => {
    // const products = useLoaderData()
    const {products,loading,error} = useProducts()
    if(loading) return <LoadingSpinner></LoadingSpinner>
    const featuredProducts = products.slice(0, 8);
    
    return (

        <div>
            <Banner />
            <div className="p-3 sm:p-8 md:p-14 lg:p-20  py-3 sm:py-8 md:py-14 lg:py-20">
                <div className="text-center pb-10">
                    <h1 className='font-bold text-3xl md:text-5xl pb-4'>Trending Apps</h1>
                    <p className='font-normal text-[16px] sm:text-[20px] text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
                    {
                        featuredProducts.map(product => (
                            <Appcard key={product.id} product={product} />
                        ))
                    }
                </div>
                <div className="py-10 text-center">
                    <Link className='btn btn-primary bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)100%)] ' to='/apps'>Show All</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;