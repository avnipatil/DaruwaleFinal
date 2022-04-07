import React from "react";
import { useForm } from 'react-hook-form';
import CreditCardTypes from '../../assets/images/checkout-details/cards.png'
import { Accordion } from 'react-bootstrap';
import Cards from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'
import './CheckOutDetails.css'
import { useEffect } from "react";
import OrderSummary from "./OrderSummary";
import ItemForm from "./ItemForm";
import { Link } from "react-router-dom";

const Payment = ({ setForm, Paymentfields, shipMethod, formData, setPaymentfields, navigation }) => {
  const { cardnumber, name, expiry, cvc } = Paymentfields;
  const { shippingmethod, ShipCharge } = shipMethod;

  const { previous, next } = navigation;
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const onSubmit = (data) => {
    next()
    reset();
  }
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleCardData = (e) => {
    e.preventDefault();
    const cardData = {
      "number": cardnumber,
      "name": name,
      "expiry": expiry,
      "CVC": cvc,
    }

    console.log(cardData)
  }
  const { go } = navigation;
  

  return (
    <div>
      <div className="container CheckOut-Payment">
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
                        <i className="fa fa-user me-2" aria-hidden="true"></i>Shipping</div>
                    </button>
                  </li>
                  <li className="active">
                    <button className="btn" onClick={() => go("payment")}>
                      <div className="mt-2 ProgressBar-Text">
                        <i className="fa fa-credit-card me-2"></i>Payment
                      </div>
                    </button>
                  </li>
                  <li><button className="btn" onClick={() => go("review")}>
                    <div className="mt-2 ProgressBar-Text">
                      <i className="fa fa-check-square me-2"></i>Review
                    </div>
                  </button>
                  </li>
                </ul>
              </div>
              {/* <CheckoutProgressBar></CheckoutProgressBar> */}
              <h2 className="h5 pb-3 mb-2">Choose shipping method</h2>
              <Accordion defaultActiveKey='0'>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Pay with Credit Card</Accordion.Header>
                  <Accordion.Body>
                    <p className="fs-sm">We accept following credit cards:&nbsp;&nbsp;
                      <img className="d-inline-block align-middle" src={CreditCardTypes} width="187" alt="Cerdit Cards" /></p>
                    <div className='Credit-card-design mt-4 pt-2'>
                      <Cards
                        number={cardnumber}
                        name={name}
                        expiry={expiry}
                        cvc={cvc}
                      // focused={focus} 
                      />
                      <form onSubmit={handleCardData}>
                        <div className='row mt-4'>
                          <div className='col-lg-6'>
                            <div className="form-group mb-3">
                              {/* <input type="text"
                                name="number"
                                placeholder="Card Number"
                                minLength={16}
                                maxLength={16}
                                value={number}
                                onChange={e => setNumber(e.target.value)}
                                // onFocus={e => setFocus(e.target.name)}
                                className="form-control" /> */}
                              <ItemForm
                                type="text"
                                name="cardnumber"
                                required={true}
                                minLength="16"
                                maxLength="16"
                                placeholder="Card Number"
                                value={cardnumber}
                                onChange={setPaymentfields}
                              />
                            </div>
                          </div>
                          <div className='col-lg-6'>
                            <div className="form-group mb-3">
                              <input type="text"
                                name="name"
                                placeholder="Name"
                                value={name}
                                onChange={setPaymentfields}
                                // onFocus={e => setFocus(e.target.name)}
                                className="form-control" />
                            </div>
                          </div>
                        </div>
                        <div className='row'>
                          <div className='col-lg-3'>
                            <div className="form-group mb-3">
                              <input type="tel"
                                name="expiry"
                                onkeyup="formatString(event);"
                                placeholder="MM/YY"
                                // pattern={"\d*"}
                                minLength={4}
                                maxLength={4}
                                value={expiry}
                                onChange={setPaymentfields}
                                // onFocus={e => setFocus(e.target.name)}
                                className="form-control" />

                            </div>
                          </div>
                          <div className='col-lg-3'>
                            <input type="text"
                              name="cvc"
                              placeholder="CVC"
                              maxLength={3}
                              value={cvc}
                              onChange={setPaymentfields}
                              // onFocus={e => setFocus(e.target.name)}
                              className="form-control" />
                          </div>
                          <div className='col-lg-6'>
                            <button className='btn d-block Button-Red-Border w-100' type="submit" >Submit</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Pay with PayPal</Accordion.Header>
                  <Accordion.Body>
                    <p><span className="fw-medium"><b>PayPal</b></span> - the safer, easier way to pay</p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className='row'>
                        <div className='col-lg-6'>
                          <div className="form-group mb-3">
                            <input type="email"
                              autoComplete="off"
                              {...register("email", { required: true })}
                              className="form-control" placeholder='E-mail' />
                            <span className="error-msg" title="invalid email address">{errors.email && "please provide valid e-mail address."}</span>
                          </div>
                        </div>
                        <div className='col-lg-6'>
                          <div className="form-group mb-3">

                            <input type="password"
                              autoComplete="off"
                              {...register("password", { required: true })}
                              className="form-control" placeholder='Password' />
                            <span className="error-msg" title="invalid password">{errors.password && "please provide valid password"}</span>
                          </div>
                        </div>
                      </div>
                      <div className='row d-flex align-items-center'>
                        <div className='col-lg-6'>
                          <a className='text-muted'>Forgot Password ?</a>
                        </div>
                        <div className='col-lg-6 d-flex justify-content-end'>
                          <button className='Button-Full-Red'>Log in</button>
                        </div>
                      </div>
                    </form>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Redeem Reward Points</Accordion.Header>
                  <Accordion.Body>
                    <p>You currently have<span className="fw-medium">&nbsp;<b>384</b></span>&nbsp;Reward Points to spend.</p>
                    <div className="form-check d-block">
                      <input className="form-check-input" type="checkbox" id="use_points" />
                      <label className="form-check-label" for="use_points">Use my Reward Points to pay for this order.</label>
                    </div>

                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <div className='row my-5'>
                <div className='col-lg-6'>
                  <a className='d-block btn-Gray w-100' onClick={previous}>
                    <i className="fa fa-angle-left me-2"></i>Back to Shipping
                  </a>
                </div>
                <div className='col-lg-6'>
                  <button className='d-block Button-Full-Red w-100' type='submit' onClick={next}>Review Your Order &nbsp;
                    <i className="fa fa-angle-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-4 Minus-margin'>
            <OrderSummary SCharge={shippingmethod}></OrderSummary>
          </div>
        </div>
      </div>
      {/* <h3>Contact </h3>
      <ItemForm label="Phone" name="phone" value={phone} onChange={setForm} />
      <ItemForm label="E-mail" name="email" value={email} onChange={setForm} />
      <div>
        <button onClick={previous}>Previous</button>
        <button onClick={next}>Next</button>
      </div> */}
    </div>
  );
};

export default Payment;
