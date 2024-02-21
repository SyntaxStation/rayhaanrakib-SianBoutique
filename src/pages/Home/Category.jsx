import React, { useEffect } from "react"
import Glide from "@glidejs/glide"
import Heading from './../../shared/Heading';

function CarouselControlsInside() {
    useEffect(() => {
        const slider = new Glide(".glide-01", {
            type: "carousel",
            focusAt: "center",
            perView: 5,
            animationDuration: 700,
            gap: 20,
            classNames: {
                nav: {
                    active: "[&>*]:bg-wuiSlate-700",
                },
            },
            breakpoints: {
                1024: {
                    perView: 3,
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
            <div className="glide-01 relative w-full px-20">
                <div className="overflow-hidden" data-glide-el="track">
                    <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
                        <li className="relative flex flex-col items-center group h-[250px] overflow-hidden text-center">
                            <img
                                src="https://razziwp.com/fashion/wp-content/uploads/sites/2/2020/10/m52-370x444.webp"
                                className="m-auto h-[250px] object-cover group-hover:scale-125 transition-all duration-500 rounded-md shadow-md w-[300px]"
                            />
                            <h2 className="absolute bottom-2 text-primary text-sm md:text-base font-bold bg-black/40 group-hover:bg-black/90 rounded px-3 py-2">Men's Tshirt</h2>
                        </li>
                        <li className="relative flex flex-col items-center group h-[250px] overflow-hidden">
                            <img
                                src="https://razziwp.com/fashion/wp-content/uploads/sites/2/2020/10/w122-370x444.webp"
                                className="m-auto h-[250px] object-cover group-hover:scale-125 transition-all duration-500 rounded-md shadow-md w-[300px]"
                            />
                            <h2 className="absolute bottom-2 text-primary text-sm md:text-base font-bold bg-black/40 group-hover:bg-black/90 rounded px-3 py-2">Women's</h2>
                        </li>
                        <li className="relative flex flex-col items-center group h-[250px] overflow-hidden">
                            <img
                                src="https://razziwp.com/fashion/wp-content/uploads/sites/2/2020/10/m42-370x444.webp"
                                className="m-auto h-[250px] object-cover group-hover:scale-125 transition-all duration-500 rounded-md shadow-md w-[300px]"
                            />
                            <h2 className="absolute bottom-2 text-primary text-sm md:text-base font-bold bg-black/40 group-hover:bg-black/90 rounded px-3 py-2">Men's Regular</h2>
                        </li>
                        <li className="relative flex flex-col items-center group h-[250px] overflow-hidden">
                            <img
                                src="https://razziwp.com/fashion/wp-content/uploads/sites/2/2020/12/k52-370x444.webp"
                                className="m-auto h-[250px] object-cover group-hover:scale-125 transition-all duration-500 rounded-md shadow-md w-[300px]"
                            />
                            <h2 className="absolute bottom-2 text-primary text-sm md:text-base font-bold bg-black/40 group-hover:bg-black/90 rounded px-3 py-2">Kid's</h2>
                        </li>
                        <li className="relative flex flex-col items-center group h-[250px] overflow-hidden">
                            <img
                                src="https://razziwp.com/fashion/wp-content/uploads/sites/2/2020/12/w72-370x444.webp"
                                className="m-auto h-[250px] object-cover group-hover:scale-125 transition-all duration-500 rounded-md shadow-md w-[300px]"
                            />
                            <h2 className="absolute bottom-2 text-primary text-sm md:text-base font-bold bg-black/40 group-hover:bg-black/90 rounded px-3 py-2">Women's Tshirt</h2>
                        </li>
                    </ul>
                </div>

                <div
                    className="absolute left-0 top-1/2 flex h-0 w-full items-center justify-between px-4 "
                    data-glide-el="controls"
                >
                    <button
                        data-glide-dir="<"
                        aria-label="prev slide"
                    >

                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                    </button>
                    <button
                        data-glide-dir=">"
                        aria-label="next slide"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                    </button>
                </div>
            </div>
        </>
    )
}




const Category = () => {
    return (
        <div className="container mx-auto">
            <Heading text="All Categories" tagline="Explore Endless Styles: From Casual to Couture, We've Got You Covered!"></Heading>
            <CarouselControlsInside></CarouselControlsInside>
        </div>
    );
};

export default Category;