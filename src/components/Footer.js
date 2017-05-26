import React from 'react';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='container'>
                <div className='content has-text-centered'>
                    <p>
                        <strong>Northcoders News</strong> by Curtis Johnson.
                    </p>
                    <p>
                        All source code for this project can be found <strong><a href="www.github.com/curtisjohnson1">here</a></strong>.
                    </p>
                    <p>
                        <a href="https://github.com/curtisjohnson1">
                        <i className='fa fa-github' />
                        </a>
                    </p>
                </div>  
            </div>
        </footer>
    );
};

export default Footer;
