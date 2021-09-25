import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
const element = <FontAwesomeIcon icon={faShoppingCart} />
const Product = (props) => {
    // console.log(props)
    const { name, img, seller, price, stock } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="product-item">
                <h4 className="name">{name}</h4>
                <p>by: {seller}</p>
                <p><strong>Price:</strong> ${price}</p>
                <p><small>only {stock} piece product is available</small></p>
                <button onClick={() => props.AddToCart(props.product)} className="btn-regular">{element}add to cart</button>

            </div>

        </div>
    );
};

export default Product;