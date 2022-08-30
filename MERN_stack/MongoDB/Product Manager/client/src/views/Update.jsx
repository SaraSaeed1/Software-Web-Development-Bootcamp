import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {useParams, useHistory, Link} from 'react-router-dom'



const Update = () => {
    const history = useHistory();
    const { id } = useParams();
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");

    useEffect( ()=>   {
        axios.get("http://localhost:8000/api/product/"+id)
        .then(res => {
            setTitle(res.data.title) 
            setPrice(res.data.price)
            setDescription(res.data.description)
        })
        .catch(err => console.error(err))
    },[])

    const onSubmitHandler = e => {
        e.preventDefault(); //prevent default behavior of the submit
        axios.put('http://localhost:8000/api/product/'+id, { //make a put request to create a new product 
            title,
            price,
            description
        })
            .then(res => console.log(res))
            .catch(err=>console.error(err))
            history.push("/product")
    }
    //onChange to update title, price and Description

    return (
        <div className="mt-4">
            <h1 className='text-center text-warning'> Update {title}</h1>
            <form onSubmit={onSubmitHandler}>
                <div className='mb-3 '>
                    <label className='form-label'>Title</label><br/>
                    <input className='form-control' type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/>
                </div>
                <div className='mb-3 '>
                    <label className='form-label'>price</label><br/>
                    <input className='form-control' type="text" onChange={(e)=>setPrice(e.target.value)} value={price}/>
                </div>
                <div className='mb-3 '>
                    <label className='form-label'>description</label><br/>
                    <input className='form-control' type="text" onChange={(e)=>setDescription(e.target.value)} value={description}/>
                </div>
                <input className="btn btn-primary " type="submit"/>
                <Link to={"/product"} className="btn btn-outline-info"> Go Back</Link>
            </form>
        </div>
    )
}
export default Update;
