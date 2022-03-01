import React, { useEffect, useState, Component} from "react";
import {useSelector, useDispatch, shallowEqual} from 'react-redux'
const Login=(props)=>{
    const [loginpopup,setloginpoup]=useState('true');
    /*Storing Username and password */
  const [username,serusername]=useState('');
  const [password,serpassword]=useState('');
  /*Error Hadnling */
  const [uerror,setuerror]=useState({})
  const [perror,setperror]=useState({})
  /*Handling submit */  
  const {usernamevaldata}=useSelector((state)=>({
    usernamevaldata:state.uname.user
  }));
  const dispatc=useDispatch();
  const navigateto=(e)=>{
    const isValidate=Validateform();
    if(isValidate){
      dispatc({type:'login',value:username})
      console.log(usernamevaldata)
      props.history.push("/home");
    }
  }
  const Validateform=()=>{
const uer={};
const per={};
let flag=true;
if(username.length===0){
  flag=false;
  uer.value='Enter UserName';
}
if(password.length===0){
  flag=false;
  per.value='Enter Password';
}
setuerror(uer)
setperror(per)
return flag;
  }
    return(
        <div className="Login-component">
            {loginpopup==='true'? 
                          <div id="input_box">
                          <img src="https://www.themealdb.com/images/logo-small.png" alt="logo_png" id="logo_img_login"/>
                          <h2>Welcome back!</h2>
                      <div className="login-input-username">
                        <input type="text" className="form-control" id="username" placeholder='Username' onChange={(e)=>{serusername(e.target.value)}}/>
                        {Object.keys(uerror).map((key1)=>{
                return <div id="uss_err" style={{color:"red"}}>{uerror[key1]}</div>
              })}
                      </div>
                      <div className="login-input-password">
                        <input type="password" className="form-control" id="password" placeholder='Password' onChange={(e)=>{serpassword(e.target.value)}}/>
                        {Object.keys(perror).map((key)=>{
                return <div id="pass_err" style={{color:"red"}}>{perror[key]}</div>
              })}
                      </div>
                      <input type="submit" className="btn btn-block btn-primary submit-btn" onClick={navigateto}/>
                </div>
            : null}

        </div>
    )
}
export default Login