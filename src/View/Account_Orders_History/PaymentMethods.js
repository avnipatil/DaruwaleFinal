import React, { useState} from 'react'
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { Row, Col, Modal } from "react-bootstrap";
// images payment
import cardvisa from '../../assets/images/AccountHistory/cardvisa.png';
import cardpaypal from '../../assets/images/AccountHistory/cardpaypal.png';
import cardmaster from '../../assets/images/AccountHistory/cardmaster.png';
import { PaymentCardData } from '../../assets/Data/data';
const PaymentMethods = () => {
    const AccountOrdersHistory = React.lazy(() => import('./Account_Orders_History'))
    const BreadCrumb  = React.lazy(() => import('../../Components/BreadCrumb/Breadcrumb'))
    const SignInFirst = React.lazy(() => import('../../Components/SignInFirst/SignInFirst'))
    const userId = localStorage.getItem('id')
    //useform for modal form
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    // modal for payment method  
    const [lgShowpay, setLgShowPay] = useState(false);
    const onPayment = data => {
        console.log(data);
        reset()
    }
    //logout
    const LogOut = () => {
        localStorage.removeItem('name');
        localStorage.removeItem('token');
        localStorage.removeItem('id')
        window.location.reload()
    }
    return (
        <div className='account'>
            <BreadCrumb heading='Payment' BC1Link='/' breadcrumb1='Home' BC3Link='/payment-methods' breadcrumb3='Payment Methods' />
            {userId ?
                <>
                    <div className='Heading-back-com2 pt-4'>
                        <div className='row container'>
                            <div className='col-lg-4'></div>
                            <div className='col-lg-8'>
                                <div className="d-flex justify-content-between align-items-center px-4 ">
                                    <h6 className="text-white fs-base ListSort">Primary payment method is used by default:</h6>
                                    <button className="Button-Red-Border Button-Full-Red text-light me-2 btn-sm signoutbtn" onClick={() => LogOut()}><i className="fa fa-sign-out me-2"></i>Sign out</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='container mb-4'>
                        {/* sidebar  onSelect={handleSelect()} */}
                        <Row>
                            <Col lg={4} className="pt-4 pt-lg-0 pe-xl-5 profile-col-sidebar">
                                <AccountOrdersHistory />
                            </Col>
                            {/* // check user login */}
                            <Col lg={8}>
                                <div className="table-responsive fs-md mb-4">
                                    <table className="table table-hover mb-0">
                                        <thead>
                                            <tr>
                                                <th>Your credit / debit cards</th>
                                                <th>Name on card</th>
                                                <th>Expires on</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                PaymentCardData.map((v, i) => {
                                                    return (
                                                        <>
                                                            <tr>
                                                                <td className="py-3 align-middle">
                                                                    <div className="d-flex align-items-center">
                                                                        <img className="profiletab-img-card" src={cardvisa} alt="payment" />
                                                                        <div className="ps-2"><span className="text-heading me-1">Visa</span>{v.card}<span className="align-middle bg-info badge ms-2 px-2">{v.AddressType}</span></div>
                                                                    </div>
                                                                </td>
                                                                <td className="py-3 align-middle">{v.name}</td>
                                                                <td className="py-3 align-middle">{v.expiry}</td>
                                                                <td className="py-3 align-middle">
                                                                    <button className="btn text-muted me-2" onClick={() => setLgShowPay(true)}><div className="fa fa-edit"></div></button>
                                                                    <Link className="text-danger" to="#">
                                                                        <div className="fa fa-trash"></div>
                                                                    </Link>
                                                                </td>
                                                            </tr>
                                                        </>
                                                    )
                                                })
                                            }                                           
                                        </tbody>
                                    </table>
                                </div>
                                <div className="text-sm-end"><button className="Button-Red-Border Button-Full-Red text-light" onClick={() => setLgShowPay(true)}>Add payment method</button></div>
                                <Modal centered size="lg" show={lgShowpay} onHide={() => setLgShowPay(false)} className="order-details"
                                    aria-labelledby="example-modal-sizes-title-lg">
                                    <Modal.Header closeButton className='bg-light'>
                                        <Modal.Title id="example-modal-sizes-title-lg" className='py-1 ml-4'>
                                            Add a payment method
                                        </Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <form onSubmit={handleSubmit(onPayment)}>
                                            <div className="form-check mb-4">
                                                <input className="form-check-input" {...register("radio", { required: true })} type="radio" value="paypal" />
                                                <label className="form-check-label">PayPal
                                                    <img className="d-inline-block align-middle card-img-pay ms-2" src={cardpaypal} alt="PayPal" /></label>
                                                <div className='text-errormsg'>{errors.radio && "please select payment method"}</div>
                                            </div>
                                            <div className="form-check mb-4">
                                                <input className="form-check-input" {...register("radio", { required: true })} type="radio" value="credit/debit_card" />
                                                <label className="form-check-label">Credit / Debit card<img className="d-inline-block card-img-pay align-middle ms-2" src={cardmaster} alt="Credit card" /></label>
                                                <div className='text-errormsg'>{errors.radio && "please select payment method"}</div>
                                            </div>
                                            <div className="row g-3 mb-2">
                                                <div className="col-sm-6">
                                                    <input className="form-control" type="number" {...register("cardname", { required: true, maxLength: 15 })} placeholder="Card Number" />
                                                    <div className='text-errormsg'>{errors.cardname && "Please fill in the 15 digit card number!"}</div>
                                                    {errors?.cardname?.type === "maxLength" && (<p>Number cannot exceed 20 characters</p>)}
                                                </div>
                                                <div className="col-sm-6">
                                                    <input className="form-control" type="text" {...register("fullname", { required: true, maxLength: 20, pattern: /^[A-Za-z]+$/i })} placeholder="Full Name" />
                                                    <div className='text-errormsg'>{errors.fullname && "Please Fill Only Alphabets!"}</div>
                                                </div>
                                                <div className="col-sm-3">
                                                    <input className="form-control" type="month" {...register("mm_yy", { required: true })} placeholder="MM/YY" />
                                                    <div className='text-errormsg'>{errors.mm_yy && "Please fill Month & year!"}</div>
                                                </div>
                                                <div className="col-sm-3">
                                                    <input className="form-control" type="text" {...register("cvc", { required: true, maxLength: 3 })} placeholder="CVC" />
                                                    <div className='text-errormsg'>{errors.cvc && "Please fill CVC!"}</div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <button className="Button-Red-Border Button-Full-Red text-light d-block w-100" type="submit">Register this card</button>
                                                </div>
                                            </div>
                                        </form>
                                    </Modal.Body>
                                </Modal>
                            </Col>
                        </Row>
                    </div>
                </> : <SignInFirst />}
        </div>
    )
}

export default PaymentMethods
