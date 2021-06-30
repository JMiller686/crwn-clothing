import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils';
import { directive } from '@babel/types';

const Header = ({ currentUser }) => {
    return (
        <header className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo'/>
            </Link>
            <nav className='nav'>
                <Link className='option' to='/shop'>SHOP</Link>
                <Link className='option' to='/contact'>CONTACT</Link>
                {
                    currentUser ? 
                    <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                    : 
                    <Link className='option' to='/signin'>SIGN IN</Link>
                }
            </nav>
        </header>
    )
}

export default Header;
