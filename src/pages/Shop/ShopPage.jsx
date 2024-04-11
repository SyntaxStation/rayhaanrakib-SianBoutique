import React, { useEffect, useState } from 'react';
import ShopFilter from './ShopFilter';

const ShopPage = () => {
    const [products, setProducts] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const url = `https://si-an-boutique-server.vercel.app/products`;
    useEffect(() => {
        fetch(url, { credentials: 'include' })
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setIsLoading(false);
            })
    }, [url])

    return (
        <div>
            <p className="bg-black py-4 text-primary text-center">GET 20% SALE WITH COUPON CODE CGBNJKI25</p>

            <ShopFilter products={products} isLoading={isLoading} />

            
        </div>
    );
};

export default ShopPage;