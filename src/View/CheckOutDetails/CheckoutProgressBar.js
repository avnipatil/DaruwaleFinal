import React from "react";
const CheckoutProgressBar = (navigation) => {
  const { go } = navigation;
  return (
    <div className="Checkout-ProgressBar">
      <div className="ProgressBardesign">
        <ul id="progressbar" >
          <li className="active">
            <Link className="btn" to="/cart">
              <div className="mt-2 ProgressBar-Text">
                <i className="fa fa-shopping-cart me-2"></i>Cart
              </div>
            </Link>
          </li>
          <li className="active">
            <button className="btn" onClick={() => go("details")}>
              <div className="mt-2 ProgressBar-Text">
                <i className="fa fa-user me-2" aria-hidden="true"></i>Details
              </div>
            </button>
          </li>
          <li >
            <button className="btn" onClick={() => go("shipping")}>
              <div className="mt-2 ProgressBar-Text">
                <i className="fa fa-user me-2" aria-hidden="true"></i>Shipping
              </div>
            </button>
          </li>
          <li>
            <button className="btn" onClick={() => go("payment")}>
              <div className="mt-2 ProgressBar-Text">
                <i className="fa fa-credit-card me-2"></i>Payment
              </div>
            </button>
          </li>
          <li>
            <button className="btn" onClick={() => go("review")}>
              <div className="mt-2 ProgressBar-Text">
                <i className="fa fa-check-square me-2"></i>Review
              </div>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CheckoutProgressBar;
