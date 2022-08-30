import React, { useState } from "react";

function Registercomponent({ registerbtn,displaybtn }){
    const [data,setData] = useState({name:'', email:'', phonenumber:'', password:''});
    var submitHandle = (e) => {
        e.preventDefault();
        registerbtn(data);
        if(data.name === ''){
            alert('Enter name');
        }else if(data.email === ''){
            alert('Enter email');
        }else if(!data.email.includes('@')){
            alert('Enter valid email');
        }else if(data.phonenumber === ''){
            alert('Enter phone number');
        }else if(data.password === ''){
            alert('Enter password');
        }else if(data.password.length < 5){
            alert('password length should be greather than 5');
        }
        if(data.name !== '' && data.email !== '' && data.phonenumber !== '' && data.password !== '' && data.password.length >= 5){
            var success = document.getElementById('success');
            success.style.display = 'block';
            setData({name:'', email:'', phonenumber:'', password:''});
        }
    }
    return(
        <>
        <div className="registerform">
            <p style={{fontSize:"25px"}}>Register</p>
            <form onSubmit={submitHandle}>
                <label htmlFor="text">Fullname : </label><input type="text" placeholder="Fullname" onChange={e=>setData({...data, name: e.target.value})} value={data.name}/><br/>
                <label htmlFor="email">Email : </label><input type="email" placeholder="Email" onChange={e=>setData({...data, email: e.target.value})} value={data.email}/><br/>
                <label htmlFor="phonenumber">Phonenumber : </label><input type="number" placeholder="PhoneNumber" onChange={e=>setData({...data, phonenumber:e.target.value})} value={data.phonenumber}/><br/>
                <label htmlFor="password">Password : </label><input type="password" placeholder="Password" onChange={e=>setData({...data, password:e.target.value})} value={data.password}/><br/>
                <button>Submit</button>
            </form>
        </div>
        <div id="success" style={{display:"none"}}>
            <p onClick={()=>displaybtn()} style={{textAlign:"center",cursor:"pointer"}} className="gotologin">Go to Login</p>
            <p style={{fontSize:"30px",textAlign:"center"}}>Registered succesfully</p>
        </div>
        </>
    )
}
export default Registercomponent;