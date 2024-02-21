import React from 'react';
import ProductCard from './../../shared/ProductCard';

const NewArrivals = () => {
    return (
        <div className='container mx-auto px-10 lg:px-0'>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-self-center justify-between items-center gap-5 lg:gap-10'>
                <ProductCard></ProductCard>
            </div>
        </div>
    );
};

export default NewArrivals;