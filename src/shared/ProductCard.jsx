import React from 'react';

const ProductCard = ({ product }) => {
    console.log(product);
    const { _id, name, type, rating, brand_name, details, image1, image2, price } = product || {};

    return (
        <div className='group lg:w-52 w-[185] md:w-48 rounded-t-sm'>
            <div className='relative'>
                <img className='lg:w-52 w-[185] md:w-48 h-60 object-cover rounded-t-sm' src={image1} alt="" />
                <img className='absolute top-0 left-0 lg:w-52 w-[185] md:w-48 h-60 object-cover rounded-t-sm opacity-0 transition-opacity duration-700 group-hover:opacity-100' src={image2} alt="" />
                <a href={`/product/${_id}`} className='absolute bottom-0 w-full text-center py-2 text-primary bg-black rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500'>Details</a>
                <span className='absolute top-0 px-5 py-1 text-white bg-accent rounded-sm text-sm'>{type}</span>
            </div>
            <h2 className='font-medium mt-3 text-lg'>{name}</h2>
            <h2 className='my-1'>By {brand_name}</h2>
            <div className="rating rating-sm">
                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
            </div>
        </div>
    );
};

export default ProductCard;