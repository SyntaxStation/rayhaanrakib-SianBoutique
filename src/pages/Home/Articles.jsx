import React from 'react';

const Articles = () => {
    return (
        <div className='container mx-auto flex flex-col lg:flex-row gap-8 px-12'>
            <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200 group">
                {/*  <!-- Image --> */}
                <figure className='w-96 h-56 overflow-hidden'>
                    <img
                        src="https://media.istockphoto.com/id/626856214/photo/women-clothing-fall-winter-collection.jpg?s=612x612&w=0&k=20&c=I9gqM2C3sxR6e_NgelLInb_wt5R89IT6swiy0VFhhqw="
                        alt="card image"
                        className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                    />
                </figure>
                {/*  <!-- Body--> */}
                <div className="p-6">
                    <header className="mb-4 flex gap-4">
                        <a
                            href="#"
                            className="relative inline-flex h-12 w-12 items-center justify-center rounded-full text-white"
                        >
                            <img
                                src="https://i.pravatar.cc/48?img=25"
                                alt="user name"
                                title="user name"
                                width="48"
                                height="48"
                                className="max-w-full rounded-full"
                            />
                        </a>
                        <div>
                            <h3 className="font-medium text-slate-700">
                                Trendy Winter Layering Tips
                            </h3>
                            <p className="text-sm text-slate-400"> By Si'an Boutique, Feb 19, 2024</p>
                        </div>
                    </header>
                    <p>
                        Day to day life operates outside, so get ready to see the beach
                        become the living room, and the street the kitchen. A beautiful, way of life that explains the sunny outlook.
                    </p>
                </div>
                {/*  <!-- Action base sized link button --> */}
                <div className="flex justify-end gap-2 p-2 pt-0">
                    <button className="inline-flex h-10 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded px-5 text-sm font-medium tracking-wide text-accent transition duration-300 hover:bg-accent/60 hover:text-white focus:bg-emerald-200 focus:text-accent focus-visible:outline-none disabled:cursor-not-allowed disabled:text-emerald-300 disabled:shadow-none disabled:hover:bg-transparent">
                        <span>Read more</span>
                    </button>
                </div>
            </div>
            <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200 group">
                {/*  <!-- Image --> */}
                <figure className='w-96 h-56 overflow-hidden'>
                    <img
                        src="https://media.istockphoto.com/id/1316887150/video/male-visual-merchandising-professional-uses-tablet-computer-to-create-collection-fashionable.jpg?s=640x640&k=20&c=iaX-ZKgJIAzD9CWdRnii3pot5C8iLmhWHbLG2IszKvE="
                        alt="card image"
                        className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                    />
                </figure>
                {/*  <!-- Body--> */}
                <div className="p-6">
                    <header className="mb-4 flex gap-4">
                        <a
                            href="#"
                            className="relative inline-flex h-12 w-12 items-center justify-center rounded-full text-white"
                        >
                            <img
                                src="https://i.pravatar.cc/48?img=25"
                                alt="user name"
                                title="user name"
                                width="48"
                                height="48"
                                className="max-w-full rounded-full"
                            />
                        </a>
                        <div>
                            <h3 className="font-medium text-slate-700">
                                Tips for Professional Attire
                            </h3>
                            <p className="text-sm text-slate-400"> By Si'an Boutique, Feb 19, 2024</p>
                        </div>
                    </header>
                    <p>
                        Discover simple yet sophisticated office attire tips to help you command the boardroom with confidence. Master the art of professional dressing with our expert advice.
                    </p>
                </div>
                {/*  <!-- Action base sized link button --> */}
                <div className="flex justify-end gap-2 p-2 pt-0">
                    <button className="inline-flex h-10 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded px-5 text-sm font-medium tracking-wide text-accent transition duration-300 hover:bg-accent/60 hover:text-white focus:bg-emerald-200 focus:text-accent focus-visible:outline-none disabled:cursor-not-allowed disabled:text-emerald-300 disabled:shadow-none disabled:hover:bg-transparent">
                        <span>Read more</span>
                    </button>
                </div>
            </div>
            <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200 group">
                {/*  <!-- Image --> */}
                <figure className='w-96 h-56 overflow-hidden'>
                    <img
                        src="https://robbreport.com/wp-content/uploads/2020/07/trunk.jpg"
                        alt="card image"
                        className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                    />
                </figure>
                {/*  <!-- Body--> */}
                <div className="p-6">
                    <header className="mb-4 flex gap-4">
                        <a
                            href="#"
                            className="relative inline-flex h-12 w-12 items-center justify-center rounded-full text-white"
                        >
                            <img
                                src="https://i.pravatar.cc/48?img=25"
                                alt="user name"
                                title="user name"
                                width="48"
                                height="48"
                                className="max-w-full rounded-full"
                            />
                        </a>
                        <div>
                            <h3 className="font-medium text-slate-700">
                                Chic Summer Style Guide
                            </h3>
                            <p className="text-sm text-slate-400"> By Si'an Boutique, Feb 19, 2024</p>
                        </div>
                    </header>
                    <p>
                        Explore our curated selection of chic summer essentials to elevate your warm-weather wardrobe. From breezy dresses to stylish accessories, stay on-trend all season long.
                    </p>
                </div>
                {/*  <!-- Action base sized link button --> */}
                <div className="flex justify-end gap-2 p-2 pt-0">
                    <button className="inline-flex h-10 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded px-5 text-sm font-medium tracking-wide text-accent transition duration-300 hover:bg-accent/60 hover:text-white focus:bg-emerald-200 focus:text-accent focus-visible:outline-none disabled:cursor-not-allowed disabled:text-emerald-300 disabled:shadow-none disabled:hover:bg-transparent">
                        <span>Read more</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Articles;
