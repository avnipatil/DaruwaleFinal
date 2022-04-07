import React ,{useEffect} from "react";
import { Link } from "react-router-dom";
const Submit = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    
    return (
        <div className="Align-thankYou">
            <div className="container mt-3 mb-sm-4">
                <div className="pt-2">
                    <div className="card py-2 mt-sm-3">
                        <div className="card-body text-center">
                            <h2 className="h4 pb-3">Thank you for your order!</h2>
                            <p className="fs-sm mb-2 text-muted">Your order has been placed and will be processed as soon as possible.</p>
                            <p className="fs-sm mb-2 text-muted">Make sure you make note of your order number, which is <span className="fw-medium">34VB5540K83.</span></p>
                            <p className="fs-sm text-muted">You will be receiving an email shortly with confirmation of your order. <u>You can now:</u></p>
                            <div className="OrderSubmitButton">
                                <Link className='btn-Gray me-3 ' to='/product'>
                                    <i className="fa fa-angle-left me-2"></i>Back to Shopping
                                </Link>

                                <Link className='Button-Full-Red ' to="/order-tracking" >
                                    <i className="fa fa-map-marker" aria-hidden="true"></i>&nbsp;Track order
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Submit;
