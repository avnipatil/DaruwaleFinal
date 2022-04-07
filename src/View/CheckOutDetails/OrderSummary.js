import React ,{ useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useForm } from "react-hooks-helper";
import axios from 'axios'
import { CART_URL } from "../../endpoint";
const OrderSummary = (props, { checkPromoCode }) => {
    //promocode
    const defaultData = { PromoCodeName: null }
    const [PromoCode, setPromoCode] = useForm(defaultData);
    const { PromoCodeName } = PromoCode;
    //promocode end

    const [Data, setData] = useState([]);
    const [Empty, setEmptyData] = useState(false)
    // const [promoCode, setPromoCode] = useState("");
    const [discountPercent, setDiscountPercent] = useState(0);

    const SubTotal2 = Data.reduce((total, Data) => {
        return total + (Data.product !== undefined ? Data.product.price : "" );
    }, 0);
    const SubTotal = SubTotal2.toFixed(2);
    const TAX = 5;
    const discount = (SubTotal * discountPercent) / 100;

    // const ShippingCharge = 5;
    //  const ShippingCharge = methods.reduce((shipping, methods) => {
    //      return shipping + methods.Tax
    //  }, 0);

    var Finaltotal2 = + SubTotal + TAX + (+props.SCharge) - discount;
    const Finaltotal =Finaltotal2.toFixed(2);
    //tax props

    //promo code
    const onSubmit = (e) => {
        e.preventDefault();
        console.log("refresh prevented");
    };
    const PROMOTIONS = [
        { code: "ONE", discount: 40 },
        { code: "TWO", discount: 20 },
        { code: "THREE", discount: 10 },
        { code: "FOUR", discount: 5 },
        { code: "FIVE", discount: 15 },
    ]

    checkPromoCode = () => {
        for (var i = 0; i < PROMOTIONS.length; i++) {
            if (PromoCodeName === PROMOTIONS[i].code) {
                setDiscountPercent(parseFloat(PROMOTIONS[i].discount));
                return;
            }
        }
        alert("Sorry, the Promotional code you entered is not valid!");
    };
    //promocodeend
    useEffect(() => {
        window.scrollTo(0, 0)
        try {
            axios.get(CART_URL + "/" + localStorage.getItem('id')).then(res => {
                console.log(res)
                if (res.status === 200) {
                    setData(res.data.data);
                } else if (res.status === 204) {
                    setEmptyData(true)
                }
            })
        } catch (error) {
            console.warn(error)
        }
    }, [])
    return (
        <div>

            <div className='card rounded-3 shadow-lg p-4'>
                <div className='card-head text-center'>
                    <h6>Order Summary</h6>
                    <div>
                        {
                            Data.map((value, index) => {
                            //  totalCartPrice += value.product !== undefined ? value.product.price : "" * value.quantity
                                if (Empty === value.product._id) {
                                    return ("")
                                } else {
                                    return (
                                        <>
                                            <Link to="/product-details" key={index}>
                                                <div className='d-flex align-items-center border-bottom'>
                                                    <div className=''>
                                                        <img src={value.product !== undefined ? value.product.image : ""} alt='product' width="70" className='img-fluid'></img>
                                                    </div>
                                                    <div className='d-flex align-items-center'>
                                                        <div className='mt-4 Check-out-product-body'>
                                                            <h6 className='Check-out-product-title'>{value.product !== undefined ? value.product.name : ""}</h6>
                                                            <p className='Check-out-product-price'>${value.product !== undefined ? value.product.price : ""}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </>
                                    );
                                }
                            })
                        }
                        <div>
                            <ul className="list-unstyled fs-sm pb-2 border-bottom mt-2">
                                <li className="d-flex justify-content-between align-items-center text-muted fs-text-COD">
                                    <span className="me-2">Subtotal:</span><span className="text-end">$ {SubTotal}</span>
                                </li>
                                {/* <li className="d-flex justify-content-between align-items-center text-muted fs-text-COD">
                                    <span className="me-2">Shipping Method:</span><span className="text-end"> {props.SMethodName}</span>
                                </li> */}
                                <li className="d-flex justify-content-between align-items-center text-muted fs-text-COD">
                                    <span className="me-2">Shipping:</span><span className="text-end">$ {props.SCharge}</span>
                                </li>
                                <li className="d-flex justify-content-between align-items-center text-muted fs-text-COD">
                                    <span className="me-2">Taxes:</span><span className="text-end">$ {TAX}</span>
                                </li>
                                <li className="d-flex justify-content-between align-items-center text-muted fs-text-COD">
                                    <span className="me-2">Discount:</span><span className="text-end">$ {discountPercent}</span>
                                </li>
                            </ul>
                            <h3 className="fw-normal text-center my-4">$ {Finaltotal}</h3>
                            <form onSubmit={onSubmit}>
                                <input type="text"
                                    className="form-control"
                                    autoComplete="off"
                                    name="PromoCodeName"
                                    value={PromoCodeName}
                                    placeholder="Promo code"
                                    onChange={setPromoCode} />
                                <button className='btn Button-Red-Border d-block w-100 mt-3' onClick={checkPromoCode}>Apply promo code</button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    )
}
export default OrderSummary