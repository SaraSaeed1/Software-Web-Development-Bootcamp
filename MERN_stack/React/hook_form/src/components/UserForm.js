import React, { useState } from  'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// import { Button, Form } from 'react-bootstrap';

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
        <div class="container w-50">
        <form onSubmit={ createUser }>
            <div className='mb-3 '>
                <label>First Name: </label> 
                <input type="text" className='form-control' onChange={ (e) => setFname(e.target.value) }value={ fname }  />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Last Name: </label> 
                <input type="text" className='form-control' onChange={ (e) => setLname(e.target.value) }value={ Lname }  />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Email Address: </label> 
                <input type="text" className='form-control' onChange={ (e) => setEmail(e.target.value) } value={ email }  />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Password: </label>
                <input type="text" className='form-control' onChange={ (e) => setPassword(e.target.value) } value={ password }  />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Confirm Password: </label>
                <input type="text" className='form-control' onChange={ (e) => setCpassword(e.target.value) } value={ cpassword }  />
            </div>
            {/* <input type="submit" value="Create User" /> */}
        </form>
        <div>
        <hr/>
            <h1 class="text-primary">Your Form Data</h1>
            <table className="table table-striped">
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
                        <td>{password}</td>
                    </tr>
                    <tr>
                        <th>Confirm Password</th>
                        <td>{cpassword}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        </div>
        
        </>
    );
};
    
export default UserForm;
