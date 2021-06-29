import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg'

const Header = () => {
    return (
        <header className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo'/>
            </Link>
            <nav className='nav'>
                <Link className='option' to='/shop'>SHOP</Link>
                <Link className='option' to='/contact'>CONTACT</Link>
            </nav>
        </header>
    )
}

export default Header;
