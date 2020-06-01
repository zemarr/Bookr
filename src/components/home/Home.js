import React, { Fragment } from 'react';
import Hero from './Hero';
import Conferencerooms from './Conferencerooms';
import Features from './Features';
// import Support from './Support';
import Footer from './Footer';

const Home = () => {
    return (
        <Fragment>
            <div>
                <Hero />
                <Conferencerooms />
                <Features />
                {/* <Support /> */}
                <Footer />
            </div>
        </Fragment>
    )
}

export default Home;