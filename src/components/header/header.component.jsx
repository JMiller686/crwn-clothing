import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';

import { auth } from '../../firebase/firebase.utils';

import { HeaderContainer, LogoContainer, NavContainer, OptionLink} from './header.styles';
import { ReactComponent as Logo } from '../../assets/crown.svg'
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';




const Header = ({ currentUser, hidden, signOutStart }) => {
    return (
        <HeaderContainer>
            <LogoContainer to='/'>
                <Logo />
            </LogoContainer>
            <NavContainer>
                <OptionLink to='/shop'>SHOP</OptionLink>
                <OptionLink to='/contact'>CONTACT</OptionLink>
                {
                    currentUser ? 
                    <OptionLink as='div' onClick={signOutStart}>SIGN OUT</OptionLink>
                    : 
                    <OptionLink to='/signin'>SIGN IN</OptionLink>
                }
                <CartIcon />
            </NavContainer>
            {
                hidden ? null : <CartDropdown />
            }
            
        </HeaderContainer>
    )
}

const mapStateToProps = createStructuredSelector({//state is root-reducer
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
