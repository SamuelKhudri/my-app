import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    // another state declare for cart handle
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    // create addtocart function for common btn click

    function AddToCart(product) {
        // console.log(product)
        const newcart = [...cart, product]
        setCart(newcart);
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                <h4>Product: {products.length}</h4>
                {
                    products.map(product => <Product
                        key={product.key}
                        // warning remove korar jonne
                        AddToCart={AddToCart}
                        product={product}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;