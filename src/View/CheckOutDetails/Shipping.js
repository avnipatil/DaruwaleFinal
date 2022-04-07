import React from "react";
import { useEffect, useState } from "react";
import OrderSummary from "./OrderSummary";
import { methods } from "../../assets/Data/data";
import { FormField } from "./FormFiels";
import { Link } from "react-router-dom";

const Shipping = ({ setForm, navigation, shipMethod, setshipmethod, onEnterPromoCode, checkPromoCode }) => {
  const { shippingmethod, ShipCharge, ShpName } = shipMethod;

  const { previous, next } = navigation;
  const { go } = navigation;

  ///formdata start 
  const [Buttonvalue, setButtonvalue] = useState();
  const handleShipping = (event) => {
    // event.preventDefault();
    console.log(Buttonvalue)
    next();
  }
  ////formdata end

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  return (
    <div className="Checkout-Shipping" id="shipping">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 Minus-margin-ProgressBar">
            <div className='mt-4'>
              <div className="ProgressBardesign">
                <ul id="progressbar" >
                  <li className="active">
                    <Link className="btn" to="cart">
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
                  <li className="active">
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
              {/* <form onSubmit={()=>handleShipping}> */}
              <form onSubmit={handleShipping}>
                <h2 className="h5 pb-3 mb-2">Choose shipping method</h2>
                <div className="table-responsive" style={{overflow:"hidden"}}>

                  <table className="table table-hover fs-sm border-top">
                    <thead>
                      <tr>
                        <th className="align-middle"></th>
                        <th className="align-middle SM-table-heading">Shipping method</th>
                        <th className="align-middle SM-table-heading">Delivery time</th>
                        <th className="align-middle SM-table-heading">Handling fee</th>
                      </tr>
                    </thead>
                    <tbody>
                      {methods.map((v, i) => {
                        return (
                          <tr key={i}>
                            <td className='p-3 align-middle'>
                              <div className="mb-4">
                                {/* <input className="form-check-input" 
                                type="radio" 
                                id="courier" 
                                value={v.type} 
                                name="shippingmethod" 
                                checked={Buttonvalue === v.type} 
                                onChange={(e) => setButtonvalue(e.target.value)} /> */}
                                <FormField name={v.type}>

                                  <input

                                    className="form-check-input"
                                    label={v.type}
                                    type="radio"
                                    id={v.type}
                                    name="shippingmethod"
                                    value={v.Tax}
                                    checked={shippingmethod === v.type}
                                    onChange={setshipmethod}


                                  />
                                </FormField>
                                <label className="form-check-label" name="ShpName" value={v.type} ></label>
                              </div>
                            </td>
                            <td className="align-middle"><span className="SM-table-heading">{v.type}</span><br /><span className="text-muted SM-Address-D">{v.Info}</span></td>
                            <td className="align-middle text-muted SM-Address-D">{v.Time}</td>
                            <td className="align-middle text-muted SM-Address-D">$ {v.Tax}</td>
                          </tr>
                        )
                      }
                      )}

                      {/* ///////////////////////////////////////////////////////// */}
                    </tbody>
                  </table>
                  <div className='row my-5'>
                    <div className='col-lg-6'>
                      <a className='d-block btn-Gray w-100' onClick={previous}><i className="fa fa-angle-left me-2"></i>Back to address</a>
                    </div>
                    <div className='col-lg-6'>
                      <button className='d-block Button-Full-Red w-100' type="submit">Proceed to Payment &nbsp;<i className="fa fa-angle-right"></i></button>
                    </div>
                  </div>
                  {/* <p>Shipping Method: {formData.shippingmethod}</p> */}
                  <p>{Buttonvalue}</p>
                </div>
              </form>
            </div>
          </div>
          <div className='col-lg-4 Minus-margin'>
            <OrderSummary SCharge={shippingmethod} SMethodName={`${ShpName}`} onEnterPromoCode={onEnterPromoCode}
              checkPromoCode={checkPromoCode}></OrderSummary>
          </div>
        </div>
      </div>
      {/* <h3>Address</h3>
      <ItemForm
        label="Address"
        name="address"
        value={address}
        onChange={setForm}
      />
      <ItemForm label="City" name="city" value={city} onChange={setForm} />
      <StateDrop label="State" name="state" value={state} onChange={setForm} />
      <ItemForm label="Zip" name="zip" value={zip} onChange={setForm} />
      <div>
        <button onClick={previous}>Previous</button>
        <button onClick={next}>Next</button>
      </div> */}
    </div>
  );
};

export default Shipping;
