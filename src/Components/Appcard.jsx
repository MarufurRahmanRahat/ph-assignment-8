import React from 'react';
import {Link} from 'react-router';

const Appcard = ({ product }) => {
    const { title, image, downloads, ratingAvg, id } = product
    return (
        <div>
            <Link to = {`/app-details/${id}`}>
            <div className="card bg-base-100 border shadow-sm hover:scale-105 transition ease-in-out">
                <figure className='h-48 overflow-hidden'>
                    <img className='w-full object-cover'
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <div className="card-actions justify-between">
                        <button className="btn btn-primary">{downloads}</button>
                        <button className="btn btn-primary">{ratingAvg}</button>
                    </div>
                </div>
            </div>
            </Link>
        </div>
    );
};

export default Appcard;