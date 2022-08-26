import React  from "react";
import "bootstrap/dist/css/bootstrap.css"


const Tab = (props) => {

    const openTab = (e) => {
        props.mail(
            props.children 
        );
        console.log("opem")
    }
    return(
        <>
            <button onClick={openTab}>
                {props.name ? props.name : "Tab"}
            </button>
        </>
    )

}

export default Tab;