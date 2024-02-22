import React from 'react';
import Banner from './Banner';
import Category from './Category';
import Heading from './../../shared/Heading';
import Featured from './Featured';
import NewArrivals from './NewArrivals';
import Shop from './Shop';
import TopSale from './TopSale';
import CustomerReviews from './CustomerReviews';
import Articles from './Articles';
import Faq from './Faq';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div data-aos="fade-up" className='py-16 lg:py-20'>
                <Category></Category>
            </div>
            <div data-aos="fade-up" className='py-10 lg:py-16'>
                <Heading text="Shop" tagline="Explore Endless Wardrobe Options: Your One-Stop Fashion Destination!"></Heading>
                <Shop></Shop>
            </div>
            <div data-aos="fade-up" className='py-16 lg:py-20'>
                <Heading text="Featured Products" tagline="Spotlight on Style: Elevate Your Look with Our Trending Must-Haves!"></Heading>
                <Featured></Featured>
            </div>
            <div data-aos="fade-up" className='py-10 lg:py-16'>
                <Heading text="New Arrivals" tagline="Fresh Finds Await: Be the First to Own Our Latest Fashion Forward Pieces!"></Heading>
                <NewArrivals></NewArrivals>
            </div>
            <div data-aos="fade-up" className='py-10 lg:py-16'>
                <Heading text="Top Sale" tagline="Score Big on Style: Grab Unbeatable Deals Before They're Gone!"></Heading>
                <TopSale></TopSale>
            </div>
            <div data-aos="fade-up" className='py-10 lg:py-16'>
                <Heading text="Customer Reviews" tagline="Rave Reviews: Hear What Our Happy Customers Have to Say About Us!"></Heading>
                <CustomerReviews></CustomerReviews>
            </div>
            <div data-aos="fade-up" className='py-10 lg:py-16'>
                <Heading text="Articles" tagline="Unlock Style Secrets: Stay Fashionably Informed with Our Latest Articles and Tips!"></Heading>
                <Articles></Articles>
            </div>
            <div data-aos="fade-up" className='py-10 lg:py-16'>
                <Heading text="frequently asked questions" tagline="Fashionably Asked Questions: Your Go-To Resource for Everything You Need to Know!"></Heading>
                <Faq></Faq>
            </div>
        </div>
    );
};

export default Home;