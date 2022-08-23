import React, {Component} from 'react'

const Todo = (props)  =>{
    const classTodo = [];
    if(props.toDo.complete){
        classTodo.push("line")
    }
    return(
        <table class="table table-condensed table-hover">
            <tbody>
                <tr>
                    <th>
                        <input onChange={(e) =>{props.handleChecked(props.i)}} checked= {props.toDo.complete} type="checkbox" />
                    </th>
                <th className= {classTodo.join(" ")}>
                    {props.toDo.text}
                </th>
                    <td> 
                        <button onClick={(e)=> {props.handleDelete(props.i)}} class="badge bg-danger text-wrap mt-2"> Delete </button>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default Todo