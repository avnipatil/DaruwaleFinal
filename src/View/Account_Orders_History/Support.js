import React, { useState } from 'react'
import './Account_Orders_History.css';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { Row, Col, Modal } from "react-bootstrap";
import { TicketData } from '../../assets/Data/data';
const Support = () => {
    const AccountOrdersHistory = React.lazy(() => import('./Account_Orders_History'))
    const BreadCrumb = React.lazy(() => import('../../Components/BreadCrumb/Breadcrumb'))
    const Pagination = React.lazy(() => import('../../Components/Pagination/Pagination'))
    const SignInFirst = React.lazy(() => import('../../Components/SignInFirst/SignInFirst'))
    //useform for modal form
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSupport = data => {
        console.log(data);
        reset()
    }
    // modal functionality close
    const handleClose = () => setLgShow(false);
    // modal for support ticket
    const [lgShow, setLgShow] = useState(false);

    //logout
    const LogOut = () => {
        localStorage.removeItem('name');
        localStorage.removeItem('token');
        localStorage.removeItem('id')
        window.location.reload()
    }

    //pagination

    var dataLimit = 5;
    var pageLimit = 2
    const [currentPage, setCurrentPage] = useState(1)

    console.log(currentPage)

    const getPaginatedData = () => {
        const startIndex = currentPage * dataLimit - dataLimit;
        const endIndex = startIndex + dataLimit;
        return All.slice(startIndex, endIndex);
    };
    //
    //check filter
    const [All, setAllData] = useState(TicketData);
    const FilterData = (event) => {
        switch (event) {
            case "All":
                const AllData = TicketData;
                setAllData(AllData)
                return console.log(AllData);
            case "Open":
                const result = TicketData.filter(word => word.value === "Open");
                setAllData(result)
                return console.log(result);
            case "Closed":
                const result2 = TicketData.filter(word => word.value === "Closed");
                setAllData(result2)
                return console.log(result2);
            default:
        }
    }
    //

    const userId = localStorage.getItem('id')
    return (
        <div className='account'>
            {/*Support_Ticket*/}
            <BreadCrumb heading='Support Tickets' BC1Link='/' breadcrumb1='Home' BC3Link='/support-tickets' breadcrumb3='Support Tickets' />
            {userId ?
                <>
                    <div className='Heading-back-com2'>
                        <div className='row container'>
                            <div className='col-lg-5'></div>
                            <div className='col-lg-7 pt-2'>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex align-items-center">
                                        <label className=" text-nowrap me-2 text-white">Sort tickets:</label>
                                        <select className="form-select" id="ticket-sort" onChange={(e) => FilterData(e.target.value)}>
                                            <option value="All">All</option>
                                            <option value="Open">Open</option>
                                            <option value="Closed">Closed</option>
                                        </select>
                                    </div>
                                    <button className="Button-Red-Border Button-Full-Red text-light me-2 mt-2 mb-0 btn-sm signoutbtn" onClick={() => LogOut()}>
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
                                <div className='row'>

                                    <hr></hr>
                                    <div className="table-responsive mb-4">
                                        <table className="table table-hover mb-0">
                                            <thead>
                                                <tr>
                                                    <th>Ticket Subject</th>
                                                    <th>Date Submitted | Updated</th>
                                                    <th>Type</th>
                                                    <th>Priority</th>
                                                    <th>Status</th>
                                                </tr>
                                                {/* <td className="py-3"><span className="badge bg-success bg-lighten-xl m-0 px-2">{`${value}`}</span></td> */}
                                            </thead>
                                            <tbody>
                                                {
                                                    getPaginatedData().map((v, i) => {
                                                        return (
                                                            <>
                                                                <tr>
                                                                    <td className="py-3"><Link className="nav-link-style text-dark fw-bold" to="#">{v.TicketSubject}</Link></td>
                                                                    <td className="py-3">{v.DateSubmited} | {v.DateUpdated}</td>
                                                                    <td className="py-3">{v.Tickettype}</td>
                                                                    <td className="py-3"><span className="badge m-0 px-2" style={{ backgroundColor: v.bgColor }}>{v.Priority}</span></td>
                                                                    <td className="py-3"><span className="badge bg-lighten-xl m-0 px-2" style={{ backgroundColor: v.bgStatus, color: v.ColorStatus }}>{v.Status}</span></td>
                                                                </tr>
                                                            </>
                                                        )
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                        {
                                            TicketData.length > 5 ?
                                                <Pagination
                                                    setCurrentPage={setCurrentPage}
                                                    dataLimit={dataLimit}
                                                    currentPage={currentPage}
                                                    pageLimit={pageLimit}
                                                    length={TicketData.length}
                                                />
                                                : ""
                                        }
                                        <div className="text-end pt-4">
                                            <button className="Button-Red-Border Button-Full-Red text-light" onClick={() => setLgShow(true)}>Submit new ticket</button>
                                        </div>
                                    </div>
                                    <Modal centered size="lg" show={lgShow} onHide={() => setLgShow(false)} className="order-details"
                                        aria-labelledby="example-modal-sizes-title-lg">
                                        <Modal.Header closeButton className='bg-light'>
                                            <Modal.Title id="example-modal-sizes-title-lg" className='py-1 ml-4'>
                                                Submit new ticket
                                            </Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <form autoComplete='off' onSubmit={handleSubmit(onSupport)}>
                                                <p className="text-muted fs-sm">We normally respond tickets within 2 business days.</p>
                                                <div className="row gx-4 gy-3">
                                                    <div className="col-12">
                                                        <label className='form-label'>Subject</label>
                                                        <input className="form-control" type="text" {...register("subject", { required: true })} />
                                                        <div className="invalid-feedback">Please fill in the subject line!</div>
                                                        <div className='text-errormsg'>{errors.subject && "Please fill in the subject line!"}</div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <label className='form-label'>Type</label>
                                                        <select className="form-select form-control" {...register("choosetype", { required: true })}>
                                                            <option value="">Choose type</option>
                                                            <option value="Website problem">Website problem</option>
                                                            <option value="Partner request">Partner request</option>
                                                            <option value="Complaint">Complaint</option>
                                                            <option value="Info inquiry">Info inquiry</option>
                                                        </select>
                                                        <div className='text-errormsg'>{errors.choosetype && "Please fill in the subject type!"}</div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <label className='form-label'>Priority</label>
                                                        <select className="form-select form-control" {...register("issue", { required: true })}>
                                                            <option value="">How urgent is your issue?</option>
                                                            <option value="Urgent">Urgent</option>
                                                            <option value="High">High</option>
                                                            <option value="Medium">Medium</option>
                                                            <option value="Low">Low</option>
                                                        </select>
                                                        <div className='text-errormsg'>{errors.issue && "Please fill in the subject issue!"}</div>
                                                    </div>
                                                    <div className="col-12">
                                                        <label className='form-label'>Describe your issue</label>
                                                        <textarea className="form-control bg-light" rows="8" {...register("message", { required: true })}></textarea>
                                                        <div className='text-errormsg'>{errors.message && "Please describe issue!"}</div>
                                                    </div>
                                                    <div className="col-12">
                                                        <input className="form-control" type="file" {...register("file", { required: true })} />
                                                        <div className='text-errormsg'>{errors.file && "Please select file!"}</div>
                                                    </div>
                                                </div>
                                                <hr></hr>
                                                <div className='closemodal d-flex'>
                                                    <button className="Button-Red-Border Button-Full-Red text-light" type="submit">Submit Ticket</button>
                                                    <button className="btn btn-secondary closeModal_Submit" type="button" onClick={handleClose}>Close</button>
                                                </div>
                                            </form>
                                        </Modal.Body>
                                    </Modal>

                                </div>
                            </Col>
                        </Row>
                    </div>
                </> : <SignInFirst />
            }

        </div>
    )
}
export default Support
