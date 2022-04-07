import React from 'react'
import './CheckOutDetails.css'
import MultiStepForm from './MultiStepForm'

function CheckOutDetails() {
    const BreadCrumb = React.lazy(() => import('../../Components/BreadCrumb/Breadcrumb'))
    return (
        <>
            <div className='checkout-details'>
                {/* Header start*/}
                <BreadCrumb heading="Checkout"
                    breadcrumb1="Home" BC1Link="/"
                    breadcrumb2="Shop" BC2Link="/shop"
                    breadcrumb3="checkout" BC3Link="/checkout-details"
                />
                <div className='Heading-back-com2 py-5'></div>
                {/* Header End */}
                <MultiStepForm /> 
                
            </div>
        </>
    );
}


export default CheckOutDetails