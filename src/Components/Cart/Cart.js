import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    console.log(props)
    let Total = 0
    for (const product of cart)
        Total = Total + product.price
    const shipping = (Total * 5) / 100;
    const tax = (Total * 3) / 100;
    const AllTotall = Total + shipping + tax;
    return (
        <div>
            <h4 className="cart-middle">Order Summary</h4>
            <p className="cart-middle">Items ordered: <strong> {cart.length}</strong></p>
            <p>Product Total:<strong> ${Total.toFixed(2)}</strong></p>
            <p>Shipping maintanance:<strong>${shipping.toFixed(2)}</strong></p>
            <p>Tax: <strong>${tax.toFixed(2)}</strong></p>
            <p id="all-total" className="cart-middle" ><strong>All Total: ${AllTotall.toFixed(2)}</strong></p>
            <button className="btn-press">Review Press Order</button>


        </div>
    );
};

export default Cart;