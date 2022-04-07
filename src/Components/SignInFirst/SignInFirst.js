import React from 'react'
import SignIn from '../SignIn/SignIn'
import MissingCartItem from '../../assets/images/missingCartItem.png'

const SignInFirst = () => {
    return (
        <div className='SignInFirst p-3'>
            <div className='card text-center p-3 d-block'>
                <img src={MissingCartItem} alt='MissingCartItem' className='img-fluid' width="40%" ></img>
                <h5 className='mt-3'>Missing Cart Item?</h5>
                <p>Login to see the items you added previously</p>
                <SignIn />
            </div>
        </div>
    )
}

export default SignInFirst
