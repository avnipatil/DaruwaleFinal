import React, { useState} from 'react'
import { Link } from 'react-router-dom';
import './Account_Orders_History.css';
import { Row, Col } from "react-bootstrap";
import { OrderData } from '../../assets/Data/data';
const Orders = () => {
    const AccountOrdersHistory = React.lazy(() => import('./Account_Orders_History'))
    const  BreadCrumb = React.lazy(() => import('../../Components/BreadCrumb/Breadcrumb'))
    const Pagination = React.lazy(() => import('../../Components/Pagination/Pagination'))
    const SignInFirst = React.lazy(() => import('../../Components/SignInFirst/SignInFirst'))
    const userId = localStorage.getItem('id')
    
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

    const getPaginatedData = () => {
        const startIndex = currentPage * dataLimit - dataLimit;
        const endIndex = startIndex + dataLimit;
        return All.slice(startIndex, endIndex);
    };
    //
    //check filter
    const [All, setAllData] = useState(OrderData);
    const FilterData = (event) => {
        switch (event) {
            case "All":
                const AllData = OrderData;
                setAllData(AllData)
                return console.log(AllData);
            case "In Progress":
                const result = OrderData.filter(word => word.status === "In Progress");
                setAllData(result)
                return console.log(result);
            case "Canceled":
                const result2 = OrderData.filter(word => word.status === "Canceled");
                setAllData(result2)
                return console.log(result2);
            case "Delayed":
                const result3 = OrderData.filter(word => word.status === "Delayed");
                setAllData(result3)
                return console.log(result3);
            case "Delivered":
                const result4 = OrderData.filter(word => word.status === "Delivered");
                setAllData(result4)
                return console.log(result4);
            default:
        }
    }

    return (
        <div className='account'>
            <BreadCrumb heading='Orders' BC1Link='/' breadcrumb1='Home' BC3Link='/orders' breadcrumb3='orders' />
            {userId ?
                <>
                    <div className='Heading-back-com2 pt-4'>
                        <div className='row container'>
                            <div className='col-lg-4'></div>
                            <div className='col-lg-8'>
                                <div className="d-flex justify-content-between align-items-center px-4">
                                    <div className="d-flex align-items-center">
                                        <label className=" text-nowrap  me-2 text-white">Sort orders:</label>
                                        <select className="form-select" id="order-sort" onChange={(e) => FilterData(e.target.value)} >
                                            <option value="All">All</option>
                                            <option value="In Progress">In Progress</option>
                                            <option value="Delayed">Delayed</option>
                                            <option value="Canceled">Canceled</option>
                                            <option value="Delivered">Delivered</option>
                                        </select>
                                    </div>
                                    <button className="Button-Red-Border Button-Full-Red text-light me-2 mt-2 mb-0 btn-sm signoutbtn" onClick={() => LogOut()}>
                                        <i className="fa fa-sign-out me-2"></i>Sign out\
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
                                <div className='container'>
                                    <div className='row'>
                                        {/* Orders list */}
                                        <div className="table-responsive fs-md mb-4">
                                            <table className="table table-hover mb-0">
                                                <thead>
                                                    <tr>
                                                        <th>Order #</th>
                                                        <th className='px-4'>Date Purchased</th>
                                                        <th>Status</th>
                                                        <th className='px-4'>Total</th>
                                                    </tr>
                                                </thead>
                                                {/* {`${value}`} */}
                                                {/* table for In Progress */}
                                                <tbody>
                                                    {
                                                        getPaginatedData().map((v, i) => {
                                                            return (
                                                                    <tr key={i}>
                                                                        <td className="py-3"><Link className="text-dark fw-bold" to="#">{v.OrderID}</Link></td>
                                                                        <td className="py-3 px-4">{v.DatePurchased}</td>
                                                                        <td className="py-3"><span className="badge bg-opacity-60 bg-lighten-xl m-0" style={{ backgroundColor: v.bgColor }} >{v.status}</span></td>
                                                                        <td className="py-3 px-4">${v.Total}</td>
                                                                    </tr>
                                                            )
                                                        })
                                                    }
                                                </tbody>

                                            </table>
                                        </div>
                                        {/* Pagination */}
                                        {
                                            OrderData.length >5?
                                                <Pagination
                                                    setCurrentPage={setCurrentPage}
                                                    dataLimit={dataLimit}
                                                    currentPage={currentPage}
                                                    pageLimit={pageLimit}
                                                    length={OrderData.length}
                                                />
                                                : ""
                                        }
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </> : <SignInFirst />}
        </div>
    )
}

export default Orders;
