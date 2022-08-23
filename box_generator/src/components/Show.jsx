import React from 'react';

const Show = (props) => {
    return (
        <div style={{display:"flex"}}>
            {props.boxes.map((box,i)=>{
                return(
                    <div key={i} style={{
                        backgroundColor: box.color,
                        width: parseInt(box.size),
                        height: parseInt(box.size),
                    }}
                    ></div>
                );
            })}
        </div>
    );
};
export default Show;