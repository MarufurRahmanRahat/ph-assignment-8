import React from 'react';
import { useParams } from 'react-router';
import useProducts from '../Hooks/useProducts';

const AppDetails = () => {
    const {id} = useParams()
    const {products, loading, error} = useProducts()
    console.log(products)
    const product = products.find(p => String(p.id)===id)
    console.log(product)
    if(loading) return <p>Loading...</p>
    const {image,title,companyName,description,size,reviews,ratingAvg,downloads,ratings } = product
    return (
        <div>
            <h1>details</h1>
        </div>
    );
};

export default AppDetails;