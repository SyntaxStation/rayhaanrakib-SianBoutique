import React, { useEffect, useState } from 'react';
import ProductCard from './../../shared/ProductCard';

const NewArrivals = () => {
    const [products, setProducts] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const url = `https://si-an-boutique-server.vercel.app/featured`;
    useEffect(() => {
        fetch(url, { credentials: 'include' })
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setIsLoading(false);
            })
    }, [url])

    return (
        <div className='container mx-auto px-10 lg:px-0'>
            {
                isLoading ? (<div className='w-full flex justify-center items-center justify-items-center'><img className='w-80' src="https://i.ibb.co/TqhV9yt/loading.gif" alt="" /></div>)
                    :
                    (<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-between items-center gap-5 lg:gap-10'>
                        {
                            products?.map(product => <ProductCard key={product._id} product={product} ></ProductCard>)
                        }
                    </div>)
            }
        </div>
    );
};

export default NewArrivals;