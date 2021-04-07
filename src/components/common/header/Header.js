import React from 'react';
import { Navbar } from '../../common';
import './Header.css'


function Header () {
    return (
        <section className="header">
            <section className="header-top">
                <section className="header-top-logo">
                    <a href="/" className="header-logo">GOTTA CATCH THEM ALL</a> 
                </section>
                <section className="header-top_navbar">
                    <Navbar />
                </section>
            </section>
            <section className="header-bottom">
                
            </section>
        </section>
    )
}

export default Header;