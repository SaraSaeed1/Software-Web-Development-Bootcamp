import React from 'react'
import {useParams, Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from 'axios'

const Details = () => {
    const [product, setProduct] = useState({})
    const {id} = useParams()

    useEffect( ()=>   {
        axios.get("http://localhost:8000/api/product/"+id)
        .then(res => setProduct(res.data))
        .catch(err => console.error(err))
    },[id])

    return (
        <>
            <h1 className='text-center mt-4 p-4'>{product.title} Details </h1>
            <table className="table table-striped border">
                <thead> 
                    <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Price</th>
                    <th scope="col">Description</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td >{product.title}</td>
                        <td >{product.price}$</td>
                        <td >{product.description}</td>
                        <td ><Link to={"/edit/"+product._id}> Edit</Link></td>
                    </tr>
                </tbody>
            </table>
            <Link to={"/product"} className="btn btn-outline-info"> Go Back</Link>
        </>
    );
}
export default Details;