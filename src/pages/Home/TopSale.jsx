import React from 'react';

const TopSale = () => {
    return (
        <div className="container px-6 m-auto py-5">
            <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
                <div className="col-span-4 lg:col-span-8">
                    <a href="#">
                        <img className='h-full w-full object-cover rounded' src="https://i.pinimg.com/originals/79/7d/fc/797dfc84d7a2149d4b77769c213030f4.jpg" alt="" />
                    </a>
                </div>
                <div className="col-span-4">
                    <a href="#">
                        <img className='h-full w-full object-cover rounded' src="https://i.pinimg.com/originals/d1/2c/60/d12c60e2b00491e1388bd907e1438f14.jpg" alt="" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default TopSale;