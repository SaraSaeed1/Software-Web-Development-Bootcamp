import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';
import List from '../components/List';



const Main = () =>{
    const [authors, setAuthor] = useState([]);

    useEffect( ()=>   {
        axios.get("http://localhost:8000/")
        .then(res => setAuthor(res.data))
        .catch(err => console.error(err))
    },[authors])

    return (
        <div>
            <h1 className='text-center'>Favorite Authors</h1>
            <Link to={"/new"} className="btn btn-outline-success"> Add An Author</Link>
            
            <List authors={authors}/>
        </div>
    )

}
export default Main;
