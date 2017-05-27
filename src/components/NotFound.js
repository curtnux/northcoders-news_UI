import React from 'react';

import NavBar from './NavBar';
import Footer from './Footer';

const NotFound = () => {
    return (
        <div>
            <NavBar />
            <p>Ooops... Apologies, but this page does not exist</p>
            <Footer />
        </div>
    );
};

export default NotFound;
