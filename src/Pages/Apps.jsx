import React, { useState } from 'react';
import useProducts from '../Hooks/useProducts';
import { Link } from 'react-router';
import Appcard from '../Components/Appcard';

const Apps = () => {
    const {products}=useProducts()
    const [search,setSearch] = useState('')
    const term = search.trim().toLocaleLowerCase()
    const searchedProducts = term
    ? products.filter(product =>
        product.title.toLocaleLowerCase().includes(term)
    )
    : products
    console.log(searchedProducts)
    
    return (
        <div>
           <div className="p-3 sm:p-8 md:p-14 lg:p-20  py-3 sm:py-8 md:py-14 lg:py-20">
                <div className="text-center pb-10">
                    <h1 className='font-bold text-3xl md:text-5xl pb-4'>Our All Applications</h1>
                    <p className='font-normal text-[20px]'>Explore All Apps on the Market developed by us. We code for Millions</p>
                </div>
                <div className="flex justify-between items-center mb-[20px]">
                    <h1 className='font-semibold text-[24px]'>({searchedProducts.length})Apps Found</h1>
                    <label className='input'>
                        <input 
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                         type="search" placeholder='Search Apps' />
                    </label>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
                    {searchedProducts.length?(
                      searchedProducts.map(product => (
                            <Appcard key={product.id} product={product} />
                        ))
                    ):<p>Not found</p>
                        
                    }
                </div>
                {/* <div className="py-10 text-center">
                    <Link className='btn btn-primary ' to='/apps'>Show All</Link>
                </div> */}
            </div>
        </div>
    );
};

export default Apps;