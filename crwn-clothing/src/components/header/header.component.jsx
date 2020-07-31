import React from 'react';
import './header.component.styles.scss';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.utils'
import {connect} from 'react-redux'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import {createStructuredSelector} from 'reselect'
import {selectCartHidden} from '../../redux/cart/cart.selectors'
import {selectCurrentUser} from '../../redux/user/user.selectors'

const Header = ({currentUser, hidden}) => (
    <div className= 'header'>
        <Link className = 'logo-container' to="/">
            <Logo className = 'logo'></Logo>
        </Link>
        <div className='options'>
            <Link className = 'option' to='/shop'>Shop</Link>
            <Link className = 'option' to='/shop'>Contact</Link>
            {
            currentUser ? (<div className = 'option' onClick={() => {auth.signOut()}}>Sign-out</div>)
            : (<Link className= 'option' to= '/signIn'>Sign-in</Link>)
            }
            <CartIcon/>
        </div>
        {hidden ? null : 
        <CartDropdown/>}
    </div>
);
const mapStateToProps =  createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});


export default connect(mapStateToProps)(Header);