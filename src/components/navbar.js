import React from 'react';
import logo from '../assets/logo.webp';
import search from '../assets/search.png';
import shoppingCart from '../assets/shopping-cart.png';
import person from '../assets/person.png';

function Navbar() {
    return(
        <>
        <div className='navbar'>
            <a href='#'><img src={logo} alt='logo' width='150px' height='100px'/></a>
            <div className='category-links'>
                <a href='#'>Men</a>
                <a href='#'>Women</a>
                <a href='#'>Kids</a>
            </div>
            <div className='nav-icons'>
                <a href='#'><img src={search} alt='search' width='25px' height='25px'/></a>
                <a href='#'><img src={shoppingCart} alt='cart' width='25px' height='25px'/></a>
                <a href='#'><img src={person} alt='person' width='25px' height='25px'/></a>
            </div>
        </div>
        </>
    )
}
export default Navbar;