import React from "react";
import './Navbar.scss'
import Logo from './Logo'
import Search from './Search/Search'
import Rightnav from './Rightnav/Rightnav'

const Navbar = () => {
    return (
        <div id="hvd-navbar">
            {/* <div className="hvd-navbar__display"> */}
                <Logo />

                <Search />

                <Rightnav />
            </div>
        // </div>
    );
};

export default Navbar;
