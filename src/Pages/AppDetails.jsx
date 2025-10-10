import React from 'react';
import { Link, useParams } from 'react-router';
import useProducts from '../Hooks/useProducts';
import downlogo from '../assets/icon-downloads.png'
import starlogo from '../assets/icon-ratings.png'
import reviewlogo from '../assets/icon-review.png'

const AppDetails = () => {
    const { id } = useParams()
    const { products, loading, error } = useProducts()
    console.log(products)
    const product = products.find(p => String(p.id) === id)
    console.log(product)
    if (loading) return <p>Loading...</p>
    const { image, title, companyName, description, size, reviews, ratingAvg, downloads, ratings } = product

    const handleAddToList = () => {
        const existingList = JSON.parse(localStorage.getItem('wishlist'))
        let updatedList = []
        if(existingList) {
            const isDuplicate = existingList.some(p => p.id === product.id)
            if(isDuplicate) return alert('sorry vai')
                updatedList=[...existingList,product]
        }
        else{
              updatedList.push(product)
        }
        localStorage.setItem('wishlist',JSON.stringify(updatedList))
    }

    return (
        <div className='p-3 sm:p-8 md:p-14 lg:p-20'>

            <div className="flex gap-[30px]">
                <div className="">
                    <img className='h-full' src={image} alt="company-img" />
                </div>
                <div className="">
                    <h1 className='font-bold text-[32px]'>{title}</h1>
                    <p className='font-bold text-[20px]'>{description}</p>
                    <p className='font-bold text-[16px]'>Developed by {companyName}</p>

                    <div className="flex gap-[24px] items-center pt-8 pb-6">
                        <div className="">
                            <img className='h-7 w-7' src={downlogo} alt="" />
                            <p className='font-normal text-[16px]'>Downloads</p>
                            <h1 className='font-extrabold text-[30px]'>{downloads}</h1>
                        </div>
                        <div className="">
                            <img className='h-7 w-7' src={starlogo} alt="" />
                            <p className='font-normal text-[16px]'>Average Ratings</p>
                            <h1 className='font-extrabold text-[30px]'>{ratingAvg}</h1>
                        </div>
                        <div className="">
                            <img className='h-7 w-7' src={reviewlogo} alt="" />
                            <p className='font-normal text-[16px]'>Total Reviews</p>
                            <h1 className='font-extrabold text-[30px]'>{reviews}</h1>
                        </div>
                    </div>
                     <Link onClick={handleAddToList} className='btn btn-secondary'>Install Now ({size}MB)</Link>
                </div>
            </div>

        </div>
    );
};

export default AppDetails;