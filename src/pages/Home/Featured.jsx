import React from 'react';
import PrimaryButton from './../../shared/PrimaryButton';

const Featured = () => {
    return (
        <div className='container mx-auto py-10 px-5 md:px-0'>
            <div className='flex flex-col md:flex-row items-center justify-between gap-24 md:gap-6'>
                <div className="one relative flex justify-center sm:w-full lg:w-1/2 group ">
                    <div className='overflow-hidden rounded'>
                        <img src="https://images.pexels.com/photos/7375091/pexels-photo-7375091.jpeg?cs=srgb&dl=pexels-stanislav-kondratiev-7375091.jpg&fm=jpghttps://images.pexels.com/photos/7375091/pexels-photo-7375091.jpeg?cs=srgb&dl=pexels-stanislav-kondratiev-7375091.jpg&fm=jpg" className='h-[450px] w-full object-cover rounded group-hover:scale-125 transition-all duration-700' alt="" />
                    </div>

                    <div className='absolute -bottom-20 w-80 py-5 flex flex-col justify-center items-center gap-5 bg-white'>
                        <h3 className='text-2xl font-medium'>Seasonal Collections</h3>
                        <PrimaryButton text="Get Now" url="/shop"></PrimaryButton>
                    </div>
                </div>
                <div className="two relative flex justify-center sm:w-full lg:w-1/2 group ">
                    <div className='overflow-hidden rounded'>
                        <img src="https://images.pexels.com/photos/7164523/pexels-photo-7164523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='h-[450px] w-full object-cover rounded group-hover:scale-125 transition-all duration-700' alt="" />
                    </div>

                    <div className='absolute -bottom-20 w-80 py-5 flex flex-col justify-center items-center gap-5 bg-white'>
                        <h3 className='text-2xl font-medium'>Limited Edition</h3>
                        <PrimaryButton text="Get Now" url="/shop"></PrimaryButton>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Featured;