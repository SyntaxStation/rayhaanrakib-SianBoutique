import React from 'react';
import Banner from './Banner';
import Category from './Category';
import Heading from './../../shared/Heading';
import Featured from './Featured';
import NewArrivals from './NewArrivals';
import Shop from './Shop';
import TopSale from './TopSale';
import Social from './Social';
import CustomerReviews from './CustomerReviews';
import Articles from './Articles';
import Faq from './Faq';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='py-16 lg:py-24'>
                <Category></Category>
            </div>
            <div className='py-16 lg:py-24'>
                <Heading text="Featured Products" tagline="Spotlight on Style: Elevate Your Look with Our Trending Must-Haves!"></Heading>
                <Featured></Featured>
            </div>
            
        </div>
    );
};

export default Home;