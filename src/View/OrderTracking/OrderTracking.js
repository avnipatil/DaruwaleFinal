import React,{useState} from 'react';
import "./OrderTracking.css";
import { products } from '../../assets/Data/product'
import { Modal } from 'react-bootstrap';
import BreadCrumb from '../../Components/BreadCrumb/Breadcrumb';
import { Link } from 'react-router-dom'


const OrderTracking = () => {
  var totalCartPrice = 0;

  // modal display functionality
  const [lgShow, setLgShow] = useState(false);
  return (
    <>
    {/* breadcrumb for OrderTracking */}
    <BreadCrumb heading='Tracking order: 34VB5540K83' BC1Link='/' breadcrumb1='Home' BC3Link='/' breadcrumb3='Order tracking'/>
      <div className="orderTrack">
        <div className="container py-5 mb-2 mb-md-3">
          {/* -- Details-- */}
          <div className="row gx-4 mb-4">
            <div className="col-md-4 mb-2">
              <div className="bg-light h-100 p-4 text-center rounded-3" style={{fontSize: "16px"}}>
                <span className="text-dark me-2 fw-bold">Shipped via:</span>UPS Ground
              </div>
            </div>
            <div className="col-md-4 mb-2">
              <div className="bg-light h-100 p-4 text-center rounded-3" style={{fontSize: "16px"}}>
                <span className="text-dark me-2 fw-bold">Status:</span>Processing order
              </div>
            </div>
            <div className="col-md-4 mb-2">
              <div className="bg-light h-100 p-4 text-center rounded-3" style={{fontSize: "16px"}}>
                <span className="text-dark me-2 fw-bold">Expected date:</span>October 15,
                2019
              </div>
            </div>
          </div>
          {/* -- Progress-- */}
          <ul className="row ulrow">
            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-3 mb-2 mt-2">
              <li className="card-order">
                <div className="d-flex align-items-center">
                  <div className="back-circle-order bg-light">
                    <i className="fa fa-shopping-bag text-orange"></i>
                  </div>
                  <div className="ps-3">
                    <div className="media-tab-subtitle text-muted mb-1">
                      First step
                    </div>
                    <h6 className="media-tab-title text-nowrap mb-0">
                      Order placed
                    </h6>
                  </div>
                </div>
              </li>
            </div>
            {/* active card */}
            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-3 mb-2 mt-2">
              <li className="card-order">
                <div className="d-flex align-items-center">
                  <div className="back-circle-order active-card">
                    <i className="fa fa-cog text-light" aria-hidden="true"></i>
                  </div>
                  <div className="ps-3">
                    <div className="mb-1 text-orange text-order-active">
                      Second step
                    </div>
                    <h6 className="text-nowrap mb-0 text-orange">
                      Processing order
                    </h6>
                  </div>
                </div>
              </li>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-3 mb-2 mt-2">
              <li className="card-order">
                <div className="d-flex align-items-center">
                  <div className="back-circle-order bg-light">
                    <i className="fa fa-star text-orange"></i>
                  </div>
                  <div className="ps-3">
                    <div className="text-muted mb-1">Third step</div>
                    <h6 className="text-nowrap mb-0">Quality check</h6>
                  </div>
                </div>
              </li>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-3 mb-2 mt-2">
              <li className="card-order">
                <div className="d-flex align-items-center">
                  <div className="back-circle-order bg-light">
                    <i className="fa fa-gift text-orange" aria-hidden="true"></i>
                  </div>
                  <div className="ps-3">
                    <div className="text-muted mb-1">Fourth step</div>
                    <h6 className="text-nowrap mb-0">Product dispatched</h6>
                  </div>
                </div>
              </li>
            </div>
          </ul>
          <div className="d-sm-flex flex-wrap justify-content-between align-items-center text-center pt-4">
          <div className="form-check mt-2 me-3">
            <input
              className="form-check-input"
              type="checkbox"
              id="notify-me"
              defaultChecked
            />
            <label className="form-check-label" htmlFor="notify-me">
              Notify me when order is delivered
            </label>
          </div>
          {/* button for open modal */}
          <button className="mt-2 btn-view-order Button-Red-Border Button-Full-Red text-light"
            data-bs-toggle="modal" onClick={() => setLgShow(true)}>
            View Order Details
          </button>
          {/* modal for order Tracking Product */}
          <Modal centered size="lg" show={lgShow} onHide={() => setLgShow(false)} className="order-details"
          aria-labelledby="example-modal-sizes-title-lg">
             <Modal.Header closeButton className='bg-light'>
                <Modal.Title id="example-modal-sizes-title-lg" className='py-1 ml-4'>
                Order No - 34VB5540K83
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className='container' style={{"height": "360px","overflow": "auto"}}>
                    {
                       products.map((productdata,i)=>{
                        totalCartPrice += productdata.price 

                         return(
                           <div key={i}>
                              <Link to="/product-details/61bc5b0f5b239b3e833a0f14" className='row' 
                              style={{"padding":"5px 10px 5px 10px",color:"#000" , textDecoration:"none"}}>
                                <div className='col-lg-3 d-inline-block flex-shrink-0 mx-auto'>
                                    <div className='d-flex justify-content-center align-items-center'>
                                         <img className='product-img-ordertrack' src={productdata.imgsrc} alt=""></img>
                                    </div>
                                </div>
                                <div className='col-lg-5'>
                                      <div className="d-block d-sm-flex align-items-start text-center text-sm-start">
                                        <div className="product-order-wishlist">
                                          <h6 className="text-dark font-weight-bold fs-base text-sm-start fw-bold mb-2">{productdata.category}</h6>
                                          <div className="fs-sm"><span className="text-muted me-2">Brand:</span>Tommy Hilfiger</div>
                                          <div className="fs-sm"><span className="text-muted me-2">Color:</span>Khaki</div>
                                          <div className="fs-lg text-accent pt-2 text-primary">${productdata.price}</div>
                                          </div></div>
                                </div>
                                <div className='col-lg-2'>
                                      <h6 className='text-muted d-flex justify-content-center align-items-center'>Quantity</h6>
                                      <div className='d-flex justify-content-center align-items-center'>
                                        <p>1</p>
                                      </div>
                                </div>
                                <div className='col-lg-2'>
                                    <h6 className='text-muted d-flex justify-content-center align-items-center'>Subtotal</h6>
                                    <div className='d-flex justify-content-center align-items-center'>
                                      <p>${productdata.price}</p> 
                                    </div>
                                </div>
                                
                            </Link> 
                            <hr style={{"width":"100%","textalign":"left","marginleft":"0"}}></hr>
                            </div>
                         )
                       })
                    } 
                  </div>
              </Modal.Body>
              <Modal.Footer> 
                  <div className='row bg-light py-3'>
                    <div className='col-lg-3'>
                      <p className='foot-text'>Subtotal: ${totalCartPrice}</p>
                    </div>
                    <div className='col-lg-3'>
                      <p className='foot-text'>Shipping: $22.50</p>
                    </div>
                    <div className='col-lg-3'>
                      <p className='foot-text'>Tax: $9.50</p>
                    </div>
                    <div className='col-lg-3'>
                      <p className='foot-text'>Total: ${totalCartPrice+22.50+9.50}</p>
                    </div> 
                </div>
                </Modal.Footer>
          </Modal>
          {/* Modal End */}
          </div>   
        </div>     
      </div>
    </>
  );
};
export default OrderTracking;
