import React, { useState } from  'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserForm = (props) => {
    const [fname, setFname] = useState("");
    const [Lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [cpassword, setCpassword] = useState("");  

    const [fnameError, setFnameError] = useState("");
    const [lnameError, setLnameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [cPasswordError, setCpasswordError] = useState("");

    const handleFname = (e) => {
        setFname(e.target.value);
        if(e.target.value.length < 1){
            setFnameError("First Name is required!");
        }
        else if(e.target.value.length < 2) {
            setFnameError("First Name must be 2 characters or longer!");
        }else{
            setFnameError("")
        }
    }
    const handleLname = (e) => {
        setLname(e.target.value);
        if(e.target.value.length < 1){
            setLnameError("Last Name is required!");
        }
        else if(e.target.value.length < 2) {
            setLnameError("Last Name must be 2 characters or longer!");
        }else{
            setLnameError("")
        }
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1){
            setEmailError("Email is required!");
        }
        else if(e.target.value.length < 5) {
            setEmailError("Email must be 5 characters or longer!");
        }else{
            setEmailError("")
        }
    }
    const handlePassword = (e) =>{
        setPassword(e.target.value);
        if(e.target.value.length < 1){
            setPasswordError("Password is required!");
        }
        else if(e.target.value.length < 8) {
            setPasswordError("Password must be at least 8 characters");
        }else{
            setPasswordError("")
        }
    }
    const handleCPassword = (e) =>{
        setCpassword(e.target.value);
        if(e.target.value!==password){
            setCpasswordError("Passwords must match");
        }else{
            setCpasswordError("")
        }
    }
    
    return (
        <div class="container w-50">
        <form onSubmit={ (e) => e.preventDefault() }>
            <div className='mb-3 '>
                <label>First Name: </label> 
                <input type="text" className='form-control' onChange={ handleFname } />
                {
                    fnameError ?
                    <p style={{color:'red'}}>{ fnameError }</p> :
                    ''
                }
            </div>
            <div className='mb-3'>
                <label className='form-label'>Last Name: </label> 
                <input type="text" className='form-control' onChange={ handleLname } />
                {
                    lnameError ?
                    <p style={{color:'red'}}>{ lnameError }</p> :
                    ''
                }
                </div>
            <div className='mb-3'>
                <label className='form-label'>Email Address: </label> 
                <input type="text" className='form-control' onChange={ handleEmail } />
                {
                    emailError ?
                    <p style={{color:'red'}}>{ emailError }</p> :
                    ''
                }
                </div>
            <div className='mb-3'>
                <label className='form-label'>Password: </label>
                <input type="password" className='form-control' onChange={ handlePassword } />
                {
                    passwordError ?
                    <p style={{color:'red'}}>{ passwordError }</p> :
                    ''
                }
            </div>
            <div className='mb-3'>
                <label className='form-label'>Confirm Password: </label>
                <input type="password" className='form-control' onChange={ handleCPassword } />
                {
                    cPasswordError ?
                    <p style={{color:'red'}}>{ cPasswordError }</p> :
                    ''
                }
                </div>
            {/* <input type="submit" value="Create User" /> */}
        </form>
        </div>
    );
}
export default UserForm;

