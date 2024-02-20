import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className='scroll-smooth select-none'>
            <Nav></Nav>
            <Outlet />
            <Footer></Footer>
        </div>
    );
};

export default Layout;