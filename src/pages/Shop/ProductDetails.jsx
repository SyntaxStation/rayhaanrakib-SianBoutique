import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';

const ProductDetails = () => {
    const [products, setProducts] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const { user, loading } = useAuth();
    const userEmail = user?.email;
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


    const handleAddToCart = (id) => {
        const cartProduct = { _id, name, type, rating, brand_name, details, image1, image2, price, userEmail }
        fetch(`https://si-an-boutique-server.vercel.app/cart_products`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(cartProduct),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Successfully Added',
                        showConfirmButton: false
                    })
                }
            })
    }


    return (
        <div className='container mx-auto px-10 lg:px-0 py-10'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 justify-between'>
                <div className="relative group">
                    <img className='w-full lg:w-[600px] h-[500px] object-cover rounded-t-sm' src={image1} alt="" />
                    <img className='absolute top-0 left-0 w-full lg:w-[600px] h-[500px] object-cover rounded-t-sm opacity-0 transition-opacity duration-700 group-hover:opacity-100' src={image2} alt="" />
                </div>
                <div className="py-10 lg:py-0 h-[500px]">
                    <h2 className='font-medium text-lg tracking-wide'>By <span className='text-accent'>{brand_name}</span></h2>
                    <h1 className='text-2xl md:text-4xl font-medium my-3'>{name}</h1>
                    <h2 className='text-lg mb-3'>Type : <a href="">{type}</a></h2>
                    <div className="rating rating-sm">
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                    </div>
                    <h3 className='my-3 font-medium'>Rating : {rating}</h3>
                    <p>{details}</p>
                    <h2 className='my-6 text-2xl md:text-3xl'>Price : {price} </h2>
                    {user ? <a onClick={() => handleAddToCart(_id)} class="relative cursor-pointer inline-block px-5 py-3 rounded-sm font-medium group">
                        <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0 rounded-sm"></span>
                        <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black rounded-sm"></span>
                        <span class="relative text-black group-hover:text-white capitalize text-lg">Add To Cart</span>
                    </a> : <a href='/login' class="relative cursor-pointer inline-block px-5 py-3 rounded-sm font-medium group">
                        <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0 rounded-sm"></span>
                        <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black rounded-sm"></span>
                        <span class="relative text-black group-hover:text-white capitalize text-lg">Add To Cart</span>
                    </a>}
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default ProductDetails;