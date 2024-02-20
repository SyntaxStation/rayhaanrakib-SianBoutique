import React from 'react';

const PrimaryButton = ({ text }) => {
    return (
        <div>
            <a href="#_" class="relative inline-block px-5 py-3 rounded-sm font-medium group">
                <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0 rounded-sm"></span>
                <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black rounded-sm"></span>
                <span class="relative text-black group-hover:text-white capitalize text-lg">{text}</span>
            </a>
        </div>



    );
};

export default PrimaryButton;