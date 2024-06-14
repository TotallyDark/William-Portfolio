import React from 'react';
import '../../App.css'
import FrontPage from '../FrontPage'
import Cards from '../Cards';
import Footer from '../Footer';

function Home () {
    return (
        <>
            <FrontPage/>
            <Cards />
            <Footer />
        </>
    )
}

export default Home;