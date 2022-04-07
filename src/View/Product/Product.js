import React, { useEffect, useState } from 'react'
import './product.css'
import shoplistproimg1 from '../../assets/images/Home/offer-banner.png'
import axios from "axios";
import { PRODUCT_URL } from '../../endpoint';
const Product = () => {
    const Card = React.lazy(() => import('../../Components/Cards/Cards'))
    const BreadCrumb = React.lazy(() => import('../../Components/BreadCrumb/Breadcrumb'))
    const ProductSidebar = React.lazy(() => import('./ProductSidebar'))
    const Pagination = React.lazy(() => import('../../Components/Pagination/Pagination'))
    const NoDataInCart = React.lazy(() => import('../../Components/NoDataFound/NoDataInCart'))


    //GET/FETCH API Logic for Aceesing data from API using axios
    const [items, setItems] = useState([]);
    const [loader, setLoader] = useState();

    const GetAllData = () => {
        setLoader(true)
        try {
            axios.get(PRODUCT_URL)
                .then(res => {
                    console.log(res.data.data);
                    setItems(res.data.data);
                    setLoader(false)
                })
        }
        catch (err) {
            console.log(err)
            setLoader(true)
        }
    }

    useEffect(() => {
        GetAllData()
    }, [])

    //get data by category 
    const GetDataByCategory = (category) => {
        axios.get(PRODUCT_URL + "/category/" + category).then(res => {
            if (res.status === 200) {
                setCurrentPage(1)
                setItems(res.data)
            }
        })
    }

    //get data by subcategory 
    const GetDataBySubcategory = (subcategory) => {
        axios.get(PRODUCT_URL + "/subcategory/" + subcategory).then(res => {
            if (res.status === 200) {
                setCurrentPage(1)
                setItems(res.data)
            }
        })
    }
    //get data by size 
    const GetDataBySize = (size) => {
        console.log(size)
        axios.get(PRODUCT_URL + "/size/" + size).then(res => {
            console.log(res)
            if (res.status === 200) {
                setCurrentPage(1)
                setItems(res.data)
            }
        })
    }

    //check filter

    const selectFilter = (event) => {
        console.log(event)
        switch (event) {
            case "Popularity":
                console.log("a")
                break;
            // code block
            case "Low-High Price":
                break;

            // code block
            case "High-Low Price":
                break;

            // code block
            case "A-Z Order":
                const a = items.sort((a, b) => a.name.localeCompare(b.name))
                setItems(a.reverse())
                console.log(a.reverse())
                break;

            case "Z-A Order":
                break;

            // code block
            default:
                break;

            // code block
        }
    }

    //pagination

    var dataLimit = 6;
    var pageLimit = 2
    const [currentPage, setCurrentPage] = useState(1)

    const getPaginatedData = () => {
        const startIndex = currentPage * dataLimit - dataLimit;
        const endIndex = startIndex + dataLimit;
        return items.slice(startIndex, endIndex);
    };


    //For Skeleton & Card data HTML here in 2 diff variables
    const carditemdata =
        getPaginatedData().map((productdata, i) => (
            <div className='col-lg-4 col-md-6 col-sm-6 px-1 mb-2 py-2' key={i}>
                <Card id={productdata._id}
                    category={productdata.category}
                    name={productdata.name}
                    price={productdata.price}
                    imgsrc={productdata.image}
                    star={productdata.rating} />
            </div>
        ))

    const skeleton =
        [0, 1, 2, 3, 4, 5].map(() => (
            <div className='col-lg-4 col-md-6 px-1 Skeleton-products' key={Math.random()}>
                <div className="skel1div"></div><br />
                <h2></h2>
                <h3></h3>
                <div style={{ display: 'flex' }}>
                    <h2></h2><h2 style={{ marginLeft: '25%' }}></h2>
                </div>
            </div>
        ))

    return (
        <div className='product-details'>
            <BreadCrumb heading={' Products ' + items.length}
                BC1Link='/' breadcrumb1='Home'
                BC3Link='/' breadcrumb3='Products' />
            <div className='Heading-back-com3 py-2'>
                <div className='row'>
                    <div className='col-lg-4 col-md-4 '></div>
                    <div className='col-lg-8 col-md-8'>
                        <div className=' d-flex  flex-nowrap'>
                            <div className="d-flex justify-content-between align-items-center">
                                <span className="text-light fs-base mb-0 ml-4 pt-7 py-2 px-2 text-nowrap">Sort by</span>
                                <select className="form-select compare-crite" id="compare-criteria"
                                    onChange={(e) => selectFilter(e.target.value)}>
                                    <option value="0">Select Filter</option>
                                    <option value="Popularity">Popularity</option>
                                    <option value="Low-High Price" >Low-High Price</option>
                                    <option value="High-Low Price" >High-Low Price</option>
                                    <option value="A-Z Order" >A-Z Order</option>
                                    <option value="Z-A Order">Z-A Order</option>
                                </select>
                                <span className='fs-sm text-light opacity-75 text-nowrap ms-2 d-none d-md-block'>of {items.length} products</span>
                            </div>
                            <div className='d-flex justify-content-end pro-5page text-nowrap'>
                                <span className='nav-link-style nav-link-light text-light me-3'
                                    onClick={() => setCurrentPage((page) => page - 1)}
                                >
                                    <i className="fa fa-angle-left"></i>
                                </span>
                                <span className='fs-md text-light'> {currentPage} / {pageLimit}</span>
                                <span className='nav-link-style nav-link-light text-light mx-3'
                                    onClick={() => setCurrentPage((page) => page + 1)}
                                >
                                    <i className="fa fa-angle-right"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className='mt-4'>
                <div className='px-5'>
                    <div className='row'>
                        <div className='col-lg-4 col-md-4'>
                            <ProductSidebar
                                GetAllDatas={GetAllData}
                                GetDataByCategorys={GetDataByCategory}
                                GetDataBySizes={GetDataBySize}
                                GetDataBySubcategorys={GetDataBySubcategory}
                            />
                        </div>
                        <div className='col-lg-8 col-md-8 shoplist-leftside1'>
                            <div className='row'>
                                {/* Skeleton & Card data condition check here */}
                                {
                                    !loader ? carditemdata : skeleton
                                }
                                {
                                    items.length === 0 ? <NoDataInCart Message="No Data Found" /> : ""
                                }
                            </div>
                            {/*========== pagination=========== */}
                            {
                                items.length > 6 ?
                                    <Pagination
                                        setCurrentPage={setCurrentPage}
                                        dataLimit={dataLimit}
                                        currentPage={currentPage}
                                        pageLimit={pageLimit}
                                        length={items.length}
                                    />
                                    : ""
                            }

                            {/* ============banner========== */}
                            <div className='row mb-5 mt-5 shoplist-box1 align-items-center'>
                                <div className='col-lg-6 col-md-6 col-sm-12 py-4  px-4  text-center text-sm-start '>
                                    <h4 className='fw-light mb-2' style={{ color: '#ffff' }}>Converse All Star</h4>
                                    <h3 className='mb-4 text-white'>Make Your Day Comfortable</h3>
                                    <button className='btn btn btn-sm d-block mb-2 addto-cardbtn'>Shop Now <i className="fa fa-angle-right"></i></button>
                                </div>
                                <div className='col-lg-6 col-md-6 col-sm-12'>
                                    <img className='shoplist-box1img img-fluid' src={shoplistproimg1} alt='Shop list Shoes' />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Product
