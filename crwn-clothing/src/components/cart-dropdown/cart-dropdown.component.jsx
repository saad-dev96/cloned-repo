import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {toggleCartHidden} from '../../redux/cart/cart.actions'

import CartItem from '../cart-item/cart-item.component'
import {selectCartItems} from '../../redux/cart/cart.selectors'
import {withRouter} from 'react-router-dom'
const CartDropdown = ({cartItems,history, dispatch}) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
    { cartItems.length ? 
      ( 
            cartItems.map(cartItem => 
                <CartItem key={cartItem.id} item= {cartItem}/>
            )
      )
      : (<span className='empty-message'>No Items added</span>) 
      }
     </div>
    <CustomButton onClick={()=>{
    history.push('/checkout'); 
    dispatch(toggleCartHidden());
    }} >GO TO CHECKOUT</CustomButton>
  </div>
);




const mapStateToProps = createStructuredSelector(
    {
        cartItems : selectCartItems
    }
)

export default withRouter(connect(mapStateToProps)(CartDropdown));