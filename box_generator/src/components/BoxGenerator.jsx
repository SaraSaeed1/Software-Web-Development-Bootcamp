import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const BoxGenerator = (props) =>{
    const [color,setColor] =useState("");
    const [size,setSize] =useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        props.newBox({color:color,size:size});
        setColor("")
    };
    return(
        <>
        <form className="form" onSubmit={handleSubmit} >
            <div>
            <h1>Color</h1>
            <input type="text" onChange={(e) => setColor(e.target.value)} value={color} />
            </div>

            <div >
            <h1>Color size</h1>
            <input onChange={ (e) => setSize(e.target.value)} type="text" value={size}/>
            </div>
            <input className="m-2" type="submit" value="Send Message" />

        </form>
        </>
        
    )
}
export default BoxGenerator;