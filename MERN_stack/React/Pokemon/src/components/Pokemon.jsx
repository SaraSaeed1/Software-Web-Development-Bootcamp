import React from 'react'
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Pokemon = () => {
    const [people, setPeople] = useState([]);
    const add=()=>{
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=807')
            .then(response => response.json())
            .then(response => setPeople(response.results))};
    
    return (
        <div>
            <button type="button" className="btn btn-outline-primary mt-4 mb-4" onClick={add} >Fetch Pokemon </button>
                {people.map((item,index)=>{
                    return(
                        <div key={index}>
                            <ul>
                                <li>
                                    {item.name}
                                </li>
                            </ul>
                        </div>
                    )
                })}
        </div>
    );
}
export default Pokemon;
