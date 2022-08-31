import React from 'react'
import {Link} from "react-router-dom";
import axios from 'axios'


const List = (props) => {

    const handleDelete = (id) =>{
        axios.delete("http://localhost:8000/delete/"+id)
        .then(res => console.log(res.data))
        .catch(err => console.error(err))
    }

    return (
        <div className='mt-4'>
            <div className="table-responsive">
                <table className="table table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.authors.map((author,i) =>
                        <tr>
                            <td scope="row" key={i}>                    
                                {author.name}
                            </td>
                            <td>
                            <Link to={"/edit/"+author._id} className="btn btn-outline-warning"> Edit</Link>
                            <button onClick={()=>{handleDelete(author._id)}} className="btn btn-outline-danger">Delete</button>
                            </td>
                        </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
    
export default List;