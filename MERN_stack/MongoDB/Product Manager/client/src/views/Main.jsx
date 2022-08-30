import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';


const Main = () =>{
    const [products, setProduct] = useState([]);

    useEffect( ()=>   {
        axios.get("http://localhost:8000/api/product")
        .then(res => setProduct(res.data))
        .catch(err => console.error(err))
    },[products])

    return (
        <div>
            <ProductForm/>
            <hr/>
            <ProductList products={products}/>
        </div>
    )

}
export default Main;
