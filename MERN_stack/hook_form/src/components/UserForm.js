import React, { useState } from  'react';
import '../App.css';

const UserForm = (props) => {
    const [fname, setFname] = useState("");
    const [Lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [cpassword, setCpassword] = useState("");  
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { fname, Lname, email, password, cpassword };
        setFname("");
        setLname("");
        setEmail("");
        setPassword("");
        setCpassword("");
        // console.log("Welcome", newUser);
    };
    
    return(
        <>
        <form onSubmit={ createUser }>
            <div className='div'>
                <label>First Name: </label> 
                <input type="text" onChange={ (e) => setFname(e.target.value) }value={ fname }  />
            </div>
            <div className='div'>
                <label>Last Name: </label> 
                <input type="text" onChange={ (e) => setLname(e.target.value) }value={ Lname }  />
            </div>
            <div className='div'>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } value={ email }  />
            </div>
            <div className='div'>
                <label>Password: </label>
                <input type="text" onChange={ (e) => setPassword(e.target.value) } value={ password }  />
            </div>
            <div className='div'>
                <label>Confirm Password: </label>
                <input type="text" onChange={ (e) => setCpassword(e.target.value) } value={ cpassword }  />
            </div>
            {/* <input type="submit" value="Create User" /> */}
        </form>
        <div>
            <h1>Your Form Data</h1>
            <table className="table table-bordered table-hover">
                <tbody>
                    <tr>
                        <th>First Name</th>
                        <td>{fname}</td>
                    </tr>
                    <tr>
                        <th>Last Name</th>
                        <td>{Lname}</td>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td>{email}</td>
                    </tr>
                    <tr>
                        <th>Password</th>
                        <td>password</td>
                    </tr>
                    <tr>
                        <th>Confirm Password</th>
                        <td>password</td>
                    </tr>
                </tbody>
            </table>
        </div>
        </>
    );
};
    
export default UserForm;