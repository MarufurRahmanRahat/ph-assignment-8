import React from 'react';
import { useLoaderData } from 'react-router';
import Banner from '../Components/Banner';

const Home = () => {
    const products = useLoaderData()
    console.log(products)
    return (
        
        <div>
            <Banner />
            {
                
                products.map(product =>( 
                    <h1>{product.title}</h1>
                ))
            }
        </div>
    );
};

export default Home;