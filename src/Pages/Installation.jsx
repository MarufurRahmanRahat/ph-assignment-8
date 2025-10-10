import React, { useContext, useEffect, useState } from 'react';
import star from '../assets/star.png'
import down from '../assets/down.png'
import { toast } from 'react-toastify';
import useProducts from '../Hooks/useProducts';
import LoadingSpinner from '../Components/LoadingSpinner';
import { ContextApiInstalled } from './ContextApiInstalled';


const Installation = () => {
    const {loading} = useProducts();
    const {install,setInstall} = useContext(ContextApiInstalled)
    const [wishlist, setWishlist] = useState([])
    const [sortOrder,setSortOrder] = useState('none')
    useEffect(() => {
        const savedList = JSON.parse(localStorage.getItem('wishlist'))
        if (savedList) setWishlist(savedList)
    }, [])
if(loading) return <LoadingSpinner></LoadingSpinner>
    
    const sortedItem = (
        () => {
        if(sortOrder==='price-asc'){
            return [...wishlist].sort((a,b) => {
                const A = parseFloat(a.downloads.replace('M', ''));
                const B = parseFloat(b.downloads.replace('M', ''));
          return A - B;  
            })
        }
        else if(sortOrder==='price-desc'){
            return [...wishlist].sort((a,b) =>  {
                const A = parseFloat(a.downloads.replace('M', ''));
                const B = parseFloat(b.downloads.replace('M', ''));
          return B - A;  
            })
        }
        else{
            return wishlist
        }
    })()

    const handleRemove = (id,title) => {
        toast.success(`${title} uninstalled!!`)
        const existingList = JSON.parse(localStorage.getItem('wishlist'))
        let updatedList = existingList.filter(p => p.id !== id)
        //for ui instant update
        setWishlist(prev => prev.filter(p => p.id !== id))
        
        localStorage.setItem('wishlist',JSON.stringify(updatedList))
    }

    return (
        <div className='p-3 sm:p-8 md:p-14 lg:p-20 '>
            <div className="text-center mb-10">
                <h1 className='font-bold text-3xl sm:text-[48px]'>Your Installed Apps</h1>
                <p className='font-normal text-[20px]'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className="flex justify-between mb-5">
                <h1 className='font-semibold text-[24px]'>({sortedItem.length})Apps found</h1>
                <label className='form-control w-full max-w-xs'>
                    <select
                    className='select select-bordered' 
                    value={sortOrder}
                onChange={e => setSortOrder(e.target.value)}>
                    <option value="none">Sort by Download</option>
                    <option value="price-asc">Low-&gt;High</option>
                    <option value="price-desc">High-&gt;Low</option>
                </select>
                </label>
            </div>

            <div className="">
                {
                    sortedItem.map(p => (
                        <div className="flex flex-col gap-6 sm:flex-row justify-between items-center p-4 bg-[#FFFFFF] mb-4">
                            <div className="flex items-center gap-[20px]">
                                <img className='w-20 h-20 rounded-xl' src={p.image} alt="" />
                                <div className="">
                                <h1 className='font-medium text-[20px]'>{p.title}</h1>
                                <div className="flex gap-[20px]">
                                    <p className='font-medium text-[16px] text-[#00D390] flex gap-1 justify-center items-center'>
                                        <img className='w-4 h-4' src={down} alt="" />{p.downloads}</p>
                                    <p className='font-medium text-[16px] text-[#FF8811] flex gap-1 justify-center items-center'>
                                       <img className='w-4 h-4' src={star} alt="" />{p.ratingAvg}</p>
                                    <p className='font-medium text-[16px] text-[#627382]'>{p.size} MB</p>
                                </div>
                            </div>
                            </div>
                            
                            <div className="">
                                <button 
                                onClick={() => {
                                   handleRemove(p.id,p.title)
                                   localStorage.removeItem(`Item_${p.id}`)
                                }
                                    
                                    
                                }  
                                className='btn bg-[#00D390] text-[#FFFFFF] '>Uninstall</button>
                            </div>

                        </div>
                    ))
                }


            </div>
        </div>
    );
};

export default Installation;