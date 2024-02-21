import React from 'react';

const ProductCard = () => {
    return (
        <div className='group lg:w-52 w-[185] md:w-48 rounded-t-sm'>
            <div className='relative'>
                <img className='lg:w-52 w-[185] md:w-48 h-60 object-cover rounded-t-sm' src="https://razziwp.com/fashion/wp-content/uploads/sites/2/2020/12/m51.jpg" alt="" />
                <img className='absolute top-0 left-0 lg:w-52 w-[185] md:w-48 h-60 object-cover rounded-t-sm opacity-0 transition-opacity duration-700 group-hover:opacity-100' src="https://razziwp.com/fashion/wp-content/uploads/sites/2/2020/10/m52-370x444.webp" alt="" />
                <a href='/product' className='absolute bottom-0 w-full text-center py-2 text-primary bg-black rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500'>Details</a>
                <span className='absolute top-0 px-5 py-1 text-white bg-accent rounded-sm text-sm'>Special</span>
            </div>
            <h2 className='font-medium mt-3 text-lg'>Bag With Flap</h2>
            <h2 className='my-1'>Women's</h2>
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