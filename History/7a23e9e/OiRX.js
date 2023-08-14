import React from 'react'
import "./Product.css"

const Product = () => {
    return (
        <>
            <div className="product">

                <div className="product__info">

                    <p>The lean Startup</p>

                    <p className="product__price">
                        <small>$</small>
                        <strong>19.99</strong>
                    </p>

                    <div className="product__rating">
                        <p>
                        🌟
                        </p>
                    </div>
                </div>

                <div>
                    <img src="https://images-eu.ssl-images-amazon.com/images/I/81vvgZqCskL._AC_UL210_SR210,210_.jpg" alt="" />
                </div>

                <button>
                    this a button
                </button>

            </div>
        </>
    )
}

export default Product