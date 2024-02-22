import React from 'react';
import ProductCard from '../../shared/ProductCard';

const ShopPage = () => {
    return (
        <div>
            <p className="bg-black py-4 text-primary text-center">GET 20% SALE WITH COUPON CODE CGBNJKI25</p>
            <div className='container mx-auto py-8 px-10 lg:px-0'>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-self-center justify-between items-center gap-5 lg:gap-10'>
                    <ProductCard></ProductCard>
                </div>
            </div>
        </div>
    );
};

export default ShopPage;