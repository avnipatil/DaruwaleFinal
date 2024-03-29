import React from "react";
import EmptyCart from '../../assets/images/checkout-details/empty_cart.jpeg'

const NoDataInCart = React.memo(props => {
    return (
        <div className="mb-5">
            <div className=" row d-flex justify-content-center">
                <div className="col-6">
                    <img src={EmptyCart} className="" alt="empty-cart" height="300px" ></img>
                </div>
            </div>
            <div className="row d-flex justify-content-center">
                <div className="col-6 text-center">
                <h4>{props.Message}</h4>
                <p>{props.suggestion}</p>
                <div className="mt-4">
                <a className="Button-Full-Red block" href={props.pagehref}><i className="fa fa-shopping-cart me-2"></i>{props.ButtonName}</a>
                </div>
                </div>
                
            </div>

        </div>
    )
})
export default NoDataInCart;