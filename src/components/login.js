import React, { useState } from "react";

function Logincomponent({ login,displaybtn }){
    const [user,setUser] = useState({email:'', password:''});
    var submitHandle = (event) => {
        event.preventDefault();
        login(user);
        setUser({email:'', password:''})
    }
    return(
        <div className="loginform">
            <p style={{fontSize:"25px",margin:"0"}}>Login</p>
            <form onSubmit={submitHandle}>
                <label htmlFor="email">Email: </label><input type="email" placeholder="Email" onChange={e=>setUser({...user, email: e.target.value})} value={user.email}/><br></br>
                <label htmlFor="password">Password: </label><input type="password" placeholder="Password" onChange={e=>setUser({...user, password: e.target.value})} value={user.password}/><br></br>
                <button>Login</button><br></br>
            </form>
            <p onClick={()=>displaybtn()} style={{cursor:"pointer"}}>Signup</p>
        </div>
    )
}
export default Logincomponent;