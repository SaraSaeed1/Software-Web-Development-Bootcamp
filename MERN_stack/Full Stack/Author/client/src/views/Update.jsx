import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {useHistory, Link, useParams } from 'react-router-dom'

const Form = () => {
    const history = useHistory();
    const {id} = useParams()
    const [name, setName] = useState("");
    const [errors, setErrors] = useState([]); 

    useEffect( ()=>   {
        axios.get("http://localhost:8000/"+id)
        .then(res => {
            setName(res.data.name) 
        })
        .catch(err => console.error(err))
    },[id])

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
        e.preventDefault();
        axios.put('http://localhost:8000/edit/' + id, {
            name
        })
            .then(
                res => 
                history.push("/")
            )
            .catch(err => {
                console.log(err.response.data)
                const errorObj = err.response.data.errors
                let errArr = []
                for (const key of Object.keys(errorObj)) {
                    errArr.push(errorObj[key].message)
                }
                setErrors(errArr)
            })

    }

    return (
        <div className="mt-4">
            <h1 className='text-center text-warning'>Edit {name}</h1>
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