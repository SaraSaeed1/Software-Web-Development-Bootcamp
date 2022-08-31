import React, { useState } from 'react'
import axios from 'axios';
import {useHistory, Link} from 'react-router-dom'

const Form = () => {
    const history = useHistory();
    const [name, setName] = useState(""); 
    const [errors, setErrors] = useState([]); 

    const [NameError, setNameError] = useState("");
    const handleName = (e) => {
        setName(e.target.value);
        if(e.target.value.length < 1) {
            setNameError("Name is required!");
        } else if(e.target.value.length < 3) {
            setNameError("Name must be 3 characters or longer!");
        }else{
            setNameError('')
        }
    }

    const onSubmitHandler = e => {
        e.preventDefault(); //prevent default behavior of the submit
        axios.post('http://localhost:8000/new', { //make a post request to create a new product 
            name
        })
            .then(res=>
                history.push("/")
            )
            .catch(err=>{
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })            
            
    }

    return (
        <div className="mt-4">
            <h1 className='text-center text-warning'>Add New Author</h1>
            <form onSubmit={onSubmitHandler}>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
                <div className='mb-3 '>
                    <label className='form-label'>Name</label><br/>
                    <input className='form-control' type="text"  
                    value={name}
                    onChange={handleName} />
                    {
                    NameError ?
                    <p className='text-danger'>{ NameError }</p> :
                    ''
                    }           
                </div>
                <input className="btn btn-primary" type="submit"/>
                <Link to={"/"} className="btn btn-outline-secondary"> Cancel</Link>
            </form>
        </div>
    )
}
export default Form;