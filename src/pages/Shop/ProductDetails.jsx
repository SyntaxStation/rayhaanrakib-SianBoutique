import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const ProductDetails = () => {
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
    const location = useLocation();
    const pathname = location.pathname;
    const id = pathname.slice(pathname.lastIndexOf('/') + 1);
    const product = products?.find(item => item._id == id);
    const { _id, name, type, rating, brand_name, details, image1, image2, price } = product || {};

    return (
        <div className='container mx-auto px-10 lg:px-0 py-10'>
            <div className='flex flex-col lg:flex-row gap-5 justify-between'>
                <div className="one"></div>
                <div className="two"></div>
            </div>
        </div>
    );
};

export default ProductDetails;