import React from 'react'
import { useState } from 'react';

export const PromoCode = ({ onEnterPromoCode,
    checkPromoCode }) => {

    const [promoCode, setPromoCode] = useState("");
    const [discountPercent, setDiscountPercent] = useState(0);

    onEnterPromoCode = (event) => {
        setPromoCode(event.target.value);
    };
    const onSubmit = (e) => {
        e.preventDefault();
        console.log("refresh prevented");
    };
    const PROMOTIONS = [
        {
            code: "ONE",
            discount: 40
        },
        {
            code: "TWO",
            discount: 20
        },
        {
            code: "THREE",
            discount: 10
        },
        {
            code: "FOUR",
            discount: 5
        },
        {
            code: "FIVE",
            discount: 15
        },
    ]

    checkPromoCode = () => {
        for (var i = 0; i < PROMOTIONS.length; i++) {
            if (promoCode === PROMOTIONS[i].code) {
                setDiscountPercent(parseFloat(PROMOTIONS[i].discount));
                return;
            }
        }
        alert("Sorry, the Promotional code you entered is not valid!");
    };
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" className="form-control" autoComplete="off" placeholder="Promo code" onChange={onEnterPromoCode} />
                <button className='btn Button-Red-Border d-block w-100 mt-3' onClick={checkPromoCode}>Apply promo code</button>
            </form>
        </div>
    )
}
