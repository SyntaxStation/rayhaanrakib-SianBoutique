import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';

const ProductDetails = () => {
    const [products, setProducts] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const magnifierHeight = 100;
    const magnifieWidth = 100;
    const zoomLevel = 2;
    const [imgWidth, setImgWidth] = useState(0);
    const [imgHeight, setImgHeight] = useState(0);
    const [showMagnifier, setShowMagnifier] = useState(false);
    const [[x, y], setXY] = useState([0, 0]);
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
    const [selectedImg, setSelectedImg] = useState(image1);



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
                <div className="relative">
                    <div className="relative h-[550px] w-full mb-3">
                        <img
                            src={selectedImg || image1}
                            className="h-[550px] w-full object-cover"
                            onMouseEnter={(e) => {
                                const elem = e.currentTarget;
                                const { width, height } = elem.getBoundingClientRect();
                                setImgWidth(width);
                                setImgHeight(height);
                                setShowMagnifier(true);
                            }}
                            onMouseMove={(e) => {
                                const elem = e.currentTarget;
                                const { top, left } = elem.getBoundingClientRect();
                                const x = e.pageX - left - window.pageXOffset;
                                const y = e.pageY - top - window.pageYOffset;
                                setXY([x, y]);
                            }}
                            onMouseLeave={() => {
                                setShowMagnifier(false);
                            }}
                            alt="img"
                        />

                        {showMagnifier && (
                            <div
                                className="absolute pointer-events-none border border-gray-200 bg-white"
                                style={{
                                    height: `${magnifierHeight}px`,
                                    width: `${magnifieWidth}px`,
                                    top: `${y - magnifierHeight / 2}px`,
                                    left: `${x - magnifieWidth / 2}px`,
                                    backgroundImage: `url('${selectedImg || image1}')`,
                                    backgroundSize: `${imgWidth * zoomLevel}px ${imgHeight * zoomLevel}px`,
                                    backgroundPositionX: `${-x * zoomLevel + magnifieWidth / 2}px`,
                                    backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`
                                }}
                            />
                        )}
                    </div>
                    <div className='flex gap-3'>
                        <img onClick={()=>setSelectedImg(image1)} className='w-[90px] h-[90px] object-cover rounded-t-sm' src={image1} alt="" />
                        <img onClick={() => setSelectedImg(image2)} className='w-[90px] h-[90px] object-cover rounded-t-sm transition-opacity duration-700' src={image2} alt="" />
                    </div>

                </div>
                <div className="py-10 lg:py-0 h-[500px]">
                    <h2 className='font-medium text-lg tracking-wide'>By <span className='text-accent cursor-pointer'>{brand_name}</span></h2>
                    <h1 className='text-2xl md:text-4xl font-medium my-3'>{name}</h1>
                    <h2 className='text-lg mb-3'>Type : <a href="">{type}</a></h2>
                    <div className="rating rating-sm">
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                    </div>
                    <h3 className='mt-4 font-medium'>Details:</h3>
                    <p>{details}</p>
                    <h2 className='my-6 text-2xl md:text-3xl'>Price : ${price} </h2>
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




