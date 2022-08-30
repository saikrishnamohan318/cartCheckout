import React, { useState } from "react";
import shoppingCart from '../assets/shopping-cart.png';
import shippingtruck from '../assets/shipping-truck.png';
import shippingTruck1 from '../assets/shipping-truck1.png';
import paypal from '../assets/paypal.webp';
import masterCard from '../assets/mastercard.png';
import maestro from '../assets/Maestro.png';
import visa from '../assets/visa.webp';
import discover from '../assets/discover.png';
import ideal from '../assets/i-deal.jpg';
import inpost from '../assets/inpost.png';
import dpd from '../assets/dpd.png';
import dhl from '../assets/dhl.png';
import fedex from '../assets/fedex.jpg';
import items from '../cartItems';
import leftArrow from '../assets/leftarrow.png';
import Logincomponent from "./login";
import Registercomponent from "./register";

function Cartcomponent(){
    const [bool,setBool] = useState(false);
    const [loginsuccess,setLoginSuccess] = useState(true);
    const [display,setDisplay] = useState(true);
    const registerData = JSON.parse(localStorage.getItem('registerData'));
    var login = (user) => {
        console.log(user);
        if(user.email === registerData.email && user.password === registerData.password){
            setLoginSuccess(false);
            setBool(false);
        }else {
            alert('Click on signup (or) Entered password is incorrect');
            setLoginSuccess(true);
            setBool(true);
        }
    }
    var loginbtn = () => {
        setBool(true);
    }
    var displaybtn = () => {
        setDisplay(!display);
    }
    var registerbtn = (data) => {
        localStorage.setItem('registerData', JSON.stringify(data));
    }
    var logoutbtn = () => {
        localStorage.removeItem('registerData');
        setLoginSuccess(true);
    }
    return(
        <>
        {bool ? (display ? <Logincomponent login={login} displaybtn={displaybtn}/> : <Registercomponent registerbtn={registerbtn} displaybtn={displaybtn}/>) :
            (
                <div style={{marginTop:"40px"}}>
                    <div className="sap">
                        <p style={{fontSize:"22px"}}>Shipping and Payment</p>
                        <div className="sapicons">
                            <img src={shoppingCart} alt='cart' className="scart"/>
                            <span style={{color:"lightGrey"}}>———</span>
                            <img src={shippingTruck1} alt='truck' className="truck1"/>
                        </div>
                    </div>
                    <div className="lpcd">
                        <div className="lsandform">
                            <div>
                                {loginsuccess ? 
                                <>
                                <button className="login" onClick={loginbtn}>LOGIN</button>
                                </> :
                                <div className="welcome">
                                    <div>
                                        <p style={{fontSize:"25px",margin:"0"}}>Welcome {registerData.name}.</p>
                                        <p style={{margin:"0"}}>Plesae enter below information</p> 
                                    </div>
                                    <button className="logoutbtn" onClick={logoutbtn}>Logout</button>
                                </div>
                                }
                            </div>
                            <div style={{marginTop:"50px"}}>
                                <p>Shipping information</p>
                                <form className="form">
                                    <input type="email" placeholder="Email"/>
                                    <input type="text" placeholder="Address"/>
                                    <input type="text" placeholder="Firstname"/>
                                    <input type="text" placeholder="City"/>
                                    <input type="text" placeholder="Lastname"/>
                                    <input type="number" placeholder="Postal Code/ZIP"/>
                                    <input type="number" placeholder="Phone Number"/>
                                    <input type="dropdown" placeholder="Country"/>
                                </form>
                            </div>
                        </div>
                        <div>
                            <div className="payment">
                                <p style={{fontSize:"16px"}}>Payment method</p>
                                <div className="paymentBtns">
                                    <button className="btn"><img src={paypal} alt="paypal" width="65px" height="25px"/></button>
                                    <button className="btn"><img src={visa} alt="visa" width="60px" height="15px"/></button>
                                    <button className="btn"><img src={masterCard} alt="masterCard" width="40px" height="25px"/></button>
                                    <button className="btn"><img src={maestro} alt="maestro" width="50px" height="25px"/></button>
                                    <button className="btn"><img src={discover} alt="discover" width="65px" height="25px"/></button>
                                    <button className="btn"><img src={ideal} alt="i-deal" width="80px" height="25px"/></button>
                                </div>
                            </div>
                            <div className="delivery">
                                <p>Delivery method</p>
                                <div className="deliveryBtns">
                                    <button className="btn1"><img src={inpost} alt="inpost" width="60px" height="25px"/><span>$20.0</span></button>
                                    <button className="btn1"><img src={dpd} alt="dpd" width="50px" height="35px"/><span>$12.0</span></button>
                                    <button className="btn1"><img src={dhl} alt="dhl" width="60px" height="30px"/><span>$15.0</span></button>
                                    <button className="btn1"><img src={fedex} alt="fedex" width="60px" height="30px"/><span>$10.0</span></button>
                                </div>
                            </div>
                        </div>
                        <div className="cartDetails">
                            <p>Your cart</p>
                            <div>
                                {items.map(item=>(
                                    <div className="tshirtDetails" key={item.code}>
                                        <img src={item.imgsrc} alt="t-shirt" width="50px" height="50px" style={{borderRadius:"50%"}}/>
                                        <div style={{marginLeft:"-40px"}}>
                                            <p style={{margin:"0"}}>{item.name}</p>
                                            <p style={{margin:"0"}}>{item.category}</p>
                                            <p style={{marginTop:"10px", color:"gray"}}>{item.code}</p>
                                        </div>
                                        <p>{item.price}</p>
                                    </div>
                                ))}
                                <p className="tc">Total cost <span>$159.98</span></p>
                            </div>
                            <div className="freedel">
                                <img src={shippingtruck} alt="truck" width="20px" height="20px"/>
                                <p style={{width:"60%"}}>You are $30.02 away from free shipping</p>
                            </div>
                        </div>
                    </div>
                    <div className="backcheckoutBtn">
                        <button className="backBtn"><img src={leftArrow} alt="l-arrow" width="20px" height="20px"/><p>Back</p></button>
                        <div>
                            <button className="continueBtn">CONTINUE SHOPPING</button>
                            <button className="proceedBtn">PROCEED TO PAYMENT</button>
                        </div>
                    </div>
                </div>
            )
        }
        
        </>
    )
}
export default Cartcomponent;