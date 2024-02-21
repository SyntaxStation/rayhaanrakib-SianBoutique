import React from 'react';
import ProductCard from '../../shared/ProductCard';
import PrimaryButton from '../../shared/PrimaryButton';

const Shop = () => {
    return (
        <div className='container mx-auto py-8 px-10 lg:px-0'>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-self-center justify-between items-center gap-5 lg:gap-10'>
                <ProductCard></ProductCard>
            </div>
            <div className='text-center mt-12 lg:mt-16'>
                <PrimaryButton text="All Products" url="/shop"></PrimaryButton>
            </div>

        </div>
    );
};

export default Shop;