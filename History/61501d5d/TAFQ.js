import React from 'react'

import "./SubTotal.css"
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'

const SubTotal = () => {
    const [{basket} , dispatch ] = useStateValue()

    let totalMoney = 0
    basket.map((item , index ,arrary) => {  

        totalMoney = item.price + totalMoney
        
    });
    return (
        <>
            <div className="subtotal">

                

                <CurrencyFormat renderText={(value) => (
                    <>
                        <p>
                            Subtotal (0 items) : <strong>{totalMoney}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order containas a gift
                        </small>
                    </>
                )}

                    decimalScale={2}
                    value={0}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                />

                <button>Proceed to Checkout</button>

            </div>
        </>
    )
}

export default SubTotal