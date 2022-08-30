import React, { useState } from 'react'
import axios from 'axios';


const ProductForm = () => {
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState();
    const [description, setDescription] = useState("");

    const onSubmitHandler = e => {
        e.preventDefault(); //prevent default behavior of the submit
        axios.post('http://localhost:8000/api/product', { //make a post request to create a new product 
            title,
            price,
            description
        })
            .then(res=>{
                console.log(res) //Optional
                setTitle(""), setPrice(""), setDescription("")
            })
            .catch(err=>console.error(err))
    }
    //onChange to update title, price and Description

    return (
        <div className="mt-4">
            <h1 className='text-center text-warning'> Product Manager</h1>
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
                <input className="btn btn-primary" type="submit"/>
            </form>
        </div>
    )
}
export default ProductForm;