import React from 'react';

function Header () {
    return (
        <section className="header">
            <section className="header-top">
                <section className="header-top-logo">
                    <a href="/" className="header-logo">GOTTA CATCH THEM ALL</a> 
                </section>
                <section className="header-top_navbar">

                </section>
            </section>
            <section className="header-bottom">
                <section className="header-bottom_phone">
                    1-800-Pokemon
                </section>
                <section className="header-bottom_email">
                    pokemon.info@gmail.com
                </section>
            </section>
        </section>
    )
}

export default Header;