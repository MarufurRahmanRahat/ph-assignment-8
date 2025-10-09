import React from 'react';
import useProducts from '../Hooks/useProducts';
import { Link } from 'react-router';
import Appcard from '../Components/Appcard';

const Apps = () => {
    const {products}=useProducts()
    return (
        <div>
           <div className="p-3 sm:p-8 md:p-14 lg:p-20  py-3 sm:py-8 md:py-14 lg:py-20">
                <div className="text-center pb-10">
                    <h1 className='font-bold text-5xl pb-4'>Trending Apps</h1>
                    <p className='font-normal text-[20px]'>Explore All Trending Apps on the Market developed by us</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
                    {
                        products.map(product => (
                            <Appcard key={product.id} product={product} />
                        ))
                    }
                </div>
                <div className="py-10 text-center">
                    <Link className='btn btn-primary ' to='/apps'>Show All</Link>
                </div>
            </div>
        </div>
    );
};

export default Apps;