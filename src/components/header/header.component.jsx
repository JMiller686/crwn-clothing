import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = ({ currentUser, hidden }) => {
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
                <CartIcon />
            </nav>
            {
                hidden ? null : <CartDropdown />
            }
            
        </header>
    )
}

const mapStateToProps = ({ user: {currentUser}, cart: {hidden} }) => ({//state is root-reducer
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);
