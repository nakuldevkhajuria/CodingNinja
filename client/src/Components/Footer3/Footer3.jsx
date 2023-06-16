import React from 'react'
import visa from '../Images/Footer3/visa.png'
import paypal from '../Images/Footer3/paypal.png'
import upi from '../Images/Footer3/upi.png'
import secure from '../Images/Footer3/secure.png'
import encrypt from '../Images/Footer3/encrypt.png'
import razorpay from '../Images/Footer3/razorpay.png'
import emi from '../Images/Footer3/no-cost-emi.png'
import './Footer3.css'
const Footer3 = () => {
  return (
    <div className="pay-accept">
        <div className="methods">
            <span>We accept payments using:</span>
            <img src={visa} alt="pay-method" />
            <img src={paypal} alt="pay-method" />
            <img src={upi} alt="pay-method" />
            <img src={emi} alt="pay-method" />
        </div>
        <div className="methods">
            <img src={secure} alt="pay-method" />
            <img src={encrypt} alt="pay-method" />
            <img src={razorpay} alt="pay-method" />
        </div>
    </div>
  )
}

export default Footer3