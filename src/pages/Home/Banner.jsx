import React, { useEffect } from "react"
import Glide from "@glidejs/glide"
import PrimaryButton from './../../shared/PrimaryButton';
import { Fade } from 'react-awesome-reveal';
import SecondaryButton from './../../shared/SecondaryButton';


const Banner = () => {
    return (
        <div>
                <CarouselIndicatorsInside></CarouselIndicatorsInside>
            <div className="container mx-auto my-8 px-6 lg:px-0">
                <div className="flex flex-col lg:flex-row gap-5 justify-items-center items-center justify-between">
                    <div data-aos="fade-up" data-aos-duration="500" className="one relative overflow-hidden rounded-md shadow-md w-full lg:w-1/3 h-[250px] group">
                        <img className="rounded-md group-hover:scale-110 object-cover transition duration-700 w-full h-[250px]" src="https://i.ibb.co/3Tq15PW/home-2-banner-grid-1.jpg" alt="" />
                        <div className="absolute top-1/3 left-5">
                            <h2 className="text-2xl font-medium mb-3">Men's Shirts</h2>
                            <SecondaryButton text="Shop Now"></SecondaryButton>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000" className="two relative overflow-hidden rounded-md shadow-md w-full lg:w-1/3 h-[250px] group">
                        <img className="rounded-md group-hover:scale-110 object-cover transition duration-700 w-full h-[250px]" src="https://i.ibb.co/mSr2Wy5/home-2-banner-grid-2.jpg" alt="" />
                        <div className="absolute top-1/3 left-5">
                            <h2 className="text-2xl font-medium mb-3">Summer Offers</h2>
                            <SecondaryButton text="Shop Now"></SecondaryButton>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1500" className="three relative overflow-hidden rounded-md shadow-md w-full lg:w-1/3 h-[250px] group">
                        <img className="rounded-md group-hover:scale-110 object-cover transition duration-700 w-full h-[250px]" src="https://i.ibb.co/BcLrJLv/home-2-banner-grid-3.jpg" alt="" />
                        <div className="absolute top-1/3 left-5">
                            <h2 className="text-2xl font-medium mb-3">Limited Edition</h2>
                            <SecondaryButton text="Shop Now"></SecondaryButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Banner;





function CarouselIndicatorsInside() {
    useEffect(() => {
        const slider = new Glide(".glide-02", {
            type: "carousel",
            focusAt: "center",
            perView: 1,
            autoplay: 3500,
            animationDuration: 1000,
            gap: 32,
            classNames: {
                nav: {
                    active: "[&>*]:bg-wuiSlate-700",
                },
            },
            breakpoints: {
                1024: {
                    perView: 1,
                },
                640: {
                    perView: 1,
                },
            },
        }).mount()

        return () => {
            slider.destroy()
        }
    }, [])

    return (
        <>
            <div className="glide-02 relative w-full">
                {/*    <!-- Slides --> */}
                <div className="overflow-hidden" data-glide-el="track">
                    <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
                       
                        <li className="relative flex flex-col justify-center items-center">
                            <img
                                src="https://i.ibb.co/frwF0zd/pexels-ksenia-chernaya-3965545.jpg"
                                className="m-auto h-[600px] object-cover w-full max-w-full"
                            />
                            <div className="absolute bg-primary/80 shadow-md px-8 py-6 md:px-16 md:py-8 lg:px-20 lg:py-12 rounded-lg text-center group">
                                <h2 className="text-xl lg:text-3xl font-semibold tracking-widest my-3 text-secondary"><Fade cascade damping={0.1}>Summer Collection</Fade></h2>
                                <h3 className="text-base lg:text-lg capitalize font-medium my-5 text-gray">So called give, one whales tree seas dry <br /> place own day, winged tree created spirit.</h3>
                                <PrimaryButton text="view details"></PrimaryButton>
                            </div>

                        </li>
                        <li className="relative flex flex-col justify-center">
                            <img
                                src="https://i.ibb.co/sVQMSdp/pexels-tobi-713070.jpg"
                                className="m-auto h-[600px] object-cover w-full max-w-full"
                            />
                            <div className="absolute left-[5%] lg:left-[8%] bg-primary/80 shadow-md px-12 py-6 md:px-16 md:py-8 lg:px-20 lg:py-12 rounded-lg group">
                                <h2 className="text-xl lg:text-3xl font-semibold tracking-widest my-3 text-secondary"><Fade cascade damping={0.1}>Winter Sale</Fade></h2>
                                <span className="text-5xl lg:text-7xl font-extrabold text-accent">70%</span>
                                <h3 className="text-base lg:text-xl capitalize font-semibold my-3 text-secondary">with <span className="text-primaryV">promo</span> code CNSH32W</h3>
                                <PrimaryButton text="shop now"></PrimaryButton>
                            </div>

                        </li>
                        <li className="relative flex flex-col justify-center">
                            <img
                                src="https://i.ibb.co/2vhY5XR/pexels-photo-8311894.webp"
                                className="m-auto h-[600px] object-cover w-full max-w-full"
                            />
                            <div className="absolute left-[5%] lg:left-[10%] bg-primary/80 shadow-md px-4 py-6 md:px-12 md:py-8 lg:px-16 lg:py-10 rounded-lg group">
                                <h2 className="text-xl lg:text-3xl font-semibold tracking-widest my-3"><Fade cascade damping={0.1}>Limited Edition</Fade></h2>
                                <span className="text-5xl lg:text-7xl font-extrabold text-accent">10% OFF</span>
                                <h3 className="text-sm lg:text-lg capitalize font-semibold my-5 text-secondary">on our limited edition collection until <span className="text-primaryV">30/03/24.</span> <br />Don't miss out on this opportunity to add <br /> unique pieces to your wardrobe.</h3>
                                <PrimaryButton text="get now"></PrimaryButton>
                            </div>

                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
