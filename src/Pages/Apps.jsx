import React, { useState } from 'react';
import useProducts from '../Hooks/useProducts';
import { Link } from 'react-router';
import Appcard from '../Components/Appcard';
import LoadingSpinner from '../Components/LoadingSpinner';

const Apps = () => {
    const {products,loading}=useProducts()
    const [search,setSearch] = useState('')
    const [loader,setLoader] = useState(false);
    const handleSearchItem = (item)=>{
          setSearch(item.target.value)
          setLoader(true);
          setTimeout(() => {
      setLoader(false);
    }, 500);
    }
    if(loading) return <LoadingSpinner></LoadingSpinner>
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
                        onChange={handleSearchItem}
                         type="search" placeholder='Search Apps' />
                    </label>
                </div>
                {
                    loader&&<LoadingSpinner></LoadingSpinner>
                }
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
                    {!loader && searchedProducts.length?(
                      searchedProducts.map(product => (
                            <Appcard key={product.id} product={product} />
                        ))
                    ):(!loader && 
                    <div className=' flex items-center justify-center col-span-full py-20'>
                        <p className='text-[#627382] text-6xl font-semibold'>No Apps Found</p>
                    </div>)
                        
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