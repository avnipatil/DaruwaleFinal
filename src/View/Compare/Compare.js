import React, { useState, useEffect } from "react";
import "./Compare.css";
import { Link } from "react-router-dom";
import BreadCrumb from "../../Components/BreadCrumb/Breadcrumb";
import { CART_URL } from "../../endpoint";
import { COMPARE_URL } from "../../endpoint";
import swal from "sweetalert";
import axios from "axios";
const Compare = () => {
  const SignInFirst = React.lazy(() => import('../../Components/SignInFirst/SignInFirst'))
  //get data from Api 
  const [Data, setData] = useState([]);
  const [Loader, setLoader] = useState();
  const userId = localStorage.getItem('id')

  //get data for Compare
  useEffect(() => {
    setLoader(true)
    try {
      axios.get(COMPARE_URL + "/" + userId).then(res => {
        //console.log(res.data.data)
        setLoader(false)
        if (res.status === 200) {
          setData(res.data.data);
        }
      })
    } catch (error) {
      console.warn(error)
      setLoader(true)
    }
  }, [])

  //Remove from Compare 
  const setDelete = (id) => {
    axios.delete(COMPARE_URL + "/" + id).then((res => {
      if (res.status === 200) {
        swal({
          title: "Removed From Comapre!",
          timer: 2000,
        }).then(() => {
          const newData = Data.filter(item => id !== item._id)
          if (newData.length === 0) {
            setData([])
          } else {
            setData(newData)
          }
        })
      } else {
        swal({
          title: "Try Again!",
          timer: 2000
        })
      }
    }))
  }
  //Add to cart
  const handleCart = (id) => {
    const cartData = {
      userId: localStorage.getItem('id'),
      productId:id,
      quantity: 1
    }
    if (cartData.userId === null) {
      swal({
        title: "login please",
        timer: 2000
      })
    } else {
      axios.post(CART_URL, cartData)
        .then(response => {
          if (response.status === 201) {
            swal({
              title: "Product Added To Cart",
              timer: 2000,
            })
          } else {
            swal({
              title: "Try Again!",
              timer: 2000
            })
          }
        }).catch(error => {
          console.error('Something went wrong!', error);
        });
    }
  }

  // skeleton
  const skeleton = [0, 1, 2].map(() => {
    return (
        <div className='col-lg-4' key={Math.random()}>
          <div className='text-center skeleton-compare '>
            <span className='skeleton-compare-span d-flex justify-content-center'><p style={{ width: "90px" }}> </p></span><br />
            <div className='p-3 skeleton-compare-img'></div>
            <br />
            <span className='skeleton-compare-span d-flex justify-content-center'>
              <p style={{ width: "125px" , height:"40px" }}> </p>
            </span>
            <br />

            <span className='skeleton-compare-span'><p> </p></span><br />
            <span className='skeleton-compare-span'><p> </p></span><br />
            <span className='skeleton-compare-span'><p> </p></span><br />
            <span className='skeleton-compare-span'><p> </p></span><br />

          </div>
        </div>
    )
  })
  return (

    userId ?
      <div>
        <BreadCrumb
          heading="Product comparison"
          BC1Link="/"
          breadcrumb1="Home"
          BC3Link="/compare"
          breadcrumb3="Comparison"
        />
        {/* compare section start */}

        <div className='compare'>
          <div className='container py-3 mb-2'>
            <div className='row'>
              {
                !Loader ?
                  <div className="table-responsive">

                    <table className="table">
                      <thead>
                        <tr>
                          <th></th>
                          {
                            Data.map((v, i) => {
                              return (
                                <td className="text-center pb-1" key={i}>
                                  <button className="btn btn-sm d-block w-100 text-danger mb-2"
                                    onClick={() => setDelete(v._id)}>
                                    <i className="ci-trash me-1"></i>Remove
                                  </button>
                                  <Link className="d-inline-block mb-3" to={"product-details/" + v.product._id}>
                                    <img src={v.product.image} width="80" alt="Apple iPhone Xs Max" />
                                  </Link>
                                  <br />
                                  <button className=" Button-Full-Red"
                                    onClick={() => handleCart(v.product._id)}>Add to Cart</button>
                                </td>
                              )

                            })
                          }
                          {
                            Data.length < 3 ?
                              Array.from(Array(3 - Data.length), (e, i) => {
                                return (
                                  <td key={i} className='text-center skeleton-compare '>
                                    <span className='skeleton-compare-span d-flex justify-content-center'><p style={{ width: "90px" }}> </p></span><br />
                                    <div className='p-3 skeleton-compare-img'></div>
                                    <br />
                                    <Link className="Button-Full-Red" to="/">Add to Compare</Link>
                                  </td>
                                )
                              })
                              : ""
                          }
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th className="text-dark">Name</th>
                          {
                            Data.map((v, i) => {
                              return <td key={i}>{v.product.name}</td>
                            })
                          }
                          {
                            Data.length < 3 ?
                              Array.from(Array(3 - Data.length), (e, i) => {
                                return <td key={i}><span className='skeleton-compare-span'><p> </p></span></td>
                              }) : ""
                          }
                        </tr>
                        <tr>
                          <th className="text-dark">ABV</th>
                          {
                            Data.map((v, i) => {
                              return <td key={i}>{v.product.ABV}</td>
                            })
                          }
                          {
                            Data.length < 3 ?
                              Array.from(Array(3 - Data.length), (e, i) => {
                                return <td key={i}><span className='skeleton-compare-span'><p> </p></span></td>
                              }) : ""
                          }
                        </tr>
                        <tr>
                          <th className="text-dark">Category</th>
                          {
                            Data.map((v, i) => {
                              return <td key={i}>{v.product.category}</td>
                            })
                          }
                          {
                            Data.length < 3 ?
                              Array.from(Array(3 - Data.length), (e, i) => {
                                return <td key={i}><span className='skeleton-compare-span'><p> </p></span></td>
                              }) : ""
                          }
                        </tr>
                        <tr>
                          <th className="text-dark">Price</th>
                          {
                            Data.map((v, i) => {
                              return <td key={i}>${v.product.price}</td>
                            })
                          }
                          {
                            Data.length < 3 ?
                              Array.from(Array(3 - Data.length), (e, i) => {
                                return <td key={i}><span className='skeleton-compare-span'><p> </p></span></td>
                              }) : ""
                          }
                        </tr>
                        <tr>
                          <th className="text-dark">Size</th>
                          {
                            Data.map((v, i) => {
                              return <td key={i}>{v.product.size}</td>
                            })
                          }
                          {
                            Data.length < 3 ?
                              Array.from(Array(3 - Data.length), (e, i) => {
                                return <td key={i}><span className='skeleton-compare-span'><p> </p></span></td>
                              }) : ""
                          }
                        </tr>
                        <tr>
                          <th className="text-dark">Food Pairing</th>
                          {
                            Data.map((v, i) => {
                              return <td key={i}>{v.product.FoodPairing}</td>
                            })
                          }
                          {
                            Data.length < 3 ?
                              Array.from(Array(3 - Data.length), (e, i) => {
                                return <td key={i}><span className='skeleton-compare-span'><p> </p></span></td>
                              }) : ""
                          }
                        </tr>

                      </tbody>
                    </table>
                  </div>
                  :
                  <div className="row">{skeleton}</div>
              }
            </div>
          </div>
        </div>
      </div>
      : <SignInFirst />

  );
};

export default Compare;
