import React from 'react'
import {Link} from "react-router-dom";
import axios from 'axios'


const ProductList = (props) => {

    const handleDelete = (id) =>{
        axios.delete("http://localhost:8000/api/product/"+id)
        .then(res => console.log(res.data))
        .catch(err => console.error(err))
    }

    return (
        <div className='mt-4'>
            <h1 className='text-center'>All Products</h1>
            <div className="table-responsive">
                <table className="table table">
                    <thead>
                        <tr>
                            <th scope="col">Product</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.products.map((product,i) =>
                        <tr>
                            <td scope="row">                    
                            <Link to={"/show/"+product._id} key={i}>{product.title}</Link>
                            </td>
                            <td><Link to={"/edit/"+product._id} className="btn btn-outline-warning"> Edit</Link>
                                <button onClick={()=>{handleDelete(product._id)}} className="btn btn-outline-danger">Delete</button>
                            </td>
                            
                        </tr>
                        )}
                    </tbody>
                </table>
            </div>
            
            <ul>
                <>
                    {/* <Link to={"/show/"+product._id}> <li key={i}>{product.title}</li></Link><Link to={"/edit/"+product._id}> Edit</Link> */}
                </>
            </ul>
        </div>
    )
}
    
export default ProductList;