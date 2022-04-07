import React, { useState} from 'react'
import './Account_Orders_History.css';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { Row, Col, Modal } from "react-bootstrap";
import { AddressData } from '../../assets/Data/data';
const Address = () => {
    const AccountOrdersHistory = React.lazy(() => import('./Account_Orders_History'))
    const  BreadCrumb = React.lazy(() => import('../../Components/BreadCrumb/Breadcrumb'))
    const Pagination = React.lazy(() => import('../../Components/Pagination/Pagination'))
    const SignInFirst = React.lazy(() => import('../../Components/SignInFirst/SignInFirst'))
    const userId = localStorage.getItem('id')

    //update form
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onAddress = data => {
        console.log(data);
        reset();
        handleClose();
    }
    //pagination

    var dataLimit = 5;
    var pageLimit = 2
    const [currentPage, setCurrentPage] = useState(1)

    console.log(currentPage)

    const getPaginatedData = () => {
        const startIndex = currentPage * dataLimit - dataLimit;
        const endIndex = startIndex + dataLimit;
        return AddressData.slice(startIndex, endIndex);
    };
    //logout
    const LogOut = () => {
        localStorage.removeItem('name');
        localStorage.removeItem('token');
        localStorage.removeItem('id')
        window.location.reload()
    }

    // modal functionality close
    const handleClose = () => setLgShowAddress(false);
    //modal for Address Method
    const [lgShowAddress, setLgShowAddress] = useState(false);
    return (
        <div className='account'>
            <BreadCrumb heading='Address' BC1Link='/' breadcrumb1='Home' BC3Link='/address' breadcrumb3='Address' />
            {userId ?
                <>
                    <div className='Heading-back-com2'>
                        <div className='row container'>
                            <div className='col-lg-4'></div>
                            <div className='col-lg-8'>
                                <div className="d-flex justify-content-between align-items-center px-4 mt-2">
                                    <h6 className="text-white ListSort">List of your registered addresses:</h6>
                                    <button className="Button-Red-Border Button-Full-Red text-light me-2  mb-0 btn-sm signoutbtn" onClick={() => LogOut()}>
                                        <i className="fa fa-sign-out me-2"></i>Sign out
                                    </button>
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
                            <Col lg={8} >
                                <div className="table-responsive fs-md">
                                    <table className="table table-hover mb-0">
                                        <thead>
                                            <tr>
                                                <th>Address</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                getPaginatedData().map((v, i) => {
                                                    return (
                                                        <>
                                                            <tr>
                                                                <td className="py-3 align-middle">{v.RoomNo} {v.Address1}, {v.Address2}, {v.city} {v.zip}, {v.country}
                                                                    <span className="align-middle badge bg-info ms-2">{v.AddressType}</span></td>
                                                                <td className="py-3 align-middle">
                                                                    <button className="text-muted me-2 py-3 btn" onClick={() => setLgShowAddress(true)}><i className="fa fa-edit"></i></button>
                                                                    <Link className="text-danger py-3 ml-2" to="#">
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
                                    {
                                        AddressData.length >5 ?
                                            <Pagination
                                                setCurrentPage={setCurrentPage}
                                                dataLimit={dataLimit}
                                                currentPage={currentPage}
                                                pageLimit={pageLimit}
                                                length={AddressData.length}
                                            />
                                            : ""
                                    }
                                    <div className="text-sm-end pt-4"><button className='Button-Red-Border Button-Full-Red text-light' onClick={() => setLgShowAddress(true)}>Add new address</button></div>
                                    <Modal centered size="lg" show={lgShowAddress} onHide={() => setLgShowAddress(false)} className="order-details"
                                        aria-labelledby="example-modal-sizes-title-lg">
                                        <Modal.Header closeButton className='bg-light'>
                                            <Modal.Title id="example-modal-sizes-title-lg" className='py-1 ml-4'>
                                                Add a new address
                                            </Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <form autoComplete='off' onSubmit={handleSubmit(onAddress)}>
                                                <div className="row gx-4 gy-3">
                                                    <div className="col-sm-6">
                                                        <label className="form-label">First name</label>
                                                        <input className="form-control" type="text" {...register("fname", { required: true, maxLength: 10, pattern: /^[A-Za-z]+$/i })} />
                                                        <div className='text-errormsg'>{errors.fname?.type === 'required' && "Please fill firstname maximum 10 alphabets!"}</div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <label className="form-label">Last name</label>
                                                        <input className="form-control" type="text" {...register("lname", { required: true, maxLength: 10, pattern: /^[A-Za-z]+$/i })} />
                                                        <div className="invalid-feedback">Please fill in you last name!</div>
                                                        <div className='text-errormsg'>{errors.lname && "Please fill Lastname maximum 10 alphabets!"}</div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <label className="form-label">Company</label>
                                                        <input className="form-control" type="text" {...register("company", { required: true })} />
                                                        <div className='text-errormsg'>{errors.company && "Enter Your Company Name"}</div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <label className="form-label">Country</label>
                                                        <select className="form-select form-control" {...register("country", { required: true })}>
                                                            <option value="">Select country</option>
                                                            <option value="Argentina">Argentina</option>
                                                            <option value="Belgium">Belgium</option>
                                                            <option value="France">France</option>
                                                            <option value="Germany">Germany</option>
                                                            <option value="Spain">Spain</option>
                                                            <option value="UK">United Kingdom</option>
                                                            <option value="USA">USA</option>
                                                        </select>
                                                        <div className='text-errormsg'>{errors.country && "Please select your country!"}</div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <label className="form-label">City</label>
                                                        <input className="form-control" {...register("city", { required: true })} />
                                                        <div className='text-errormsg'>{errors.city && "Please fill in your city!."}</div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <label className="form-label">Line 1</label>
                                                        <input className="form-control" type="text" {...register("addressL1", { required: true })} />
                                                        <div className='text-errormsg'>{errors.addressL1 && "Please fill in your address!."}</div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <label className="form-label">Line 2</label>
                                                        <input className="form-control" {...register("addressL2", { required: true })} />
                                                        <div className='text-errormsg'>{errors.addressL2 && "Enter Your Address"}</div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <label className="form-label">ZIP code</label>
                                                        <input className="form-control" type="number" {...register("zipcode", { required: true, maxLength: 6 })} />
                                                        <div className='text-errormsg'>{errors.zipcode && "Please add your ZIP code maximum 6 digit!!."}</div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" {...register("primary_address", { required: true })} />
                                                            <label className='form-label'>Make this address primary</label>
                                                            <div className='text-errormsg'>{errors.primary_address && "Make this address primary."}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr></hr>
                                                <div className='closemodal d-flex'>
                                                    <button className="Button-Red-Border Button-Full-Red text-light" type="submit">Add address</button>
                                                    <button className="btn btn-secondary closeModal_Submit" type="submit" onClick={handleClose}>Close</button>
                                                </div>
                                            </form>
                                        </Modal.Body>
                                    </Modal>
                              
                                </div>
                            </Col>
                        </Row>
                    </div>
                </> : <SignInFirst />}
        </div>
    )
}

export default Address
