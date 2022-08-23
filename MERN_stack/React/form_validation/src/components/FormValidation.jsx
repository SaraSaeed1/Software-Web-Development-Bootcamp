import React, { useReducer } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


const initialState = {
    firstName: {
        value: "",
        error: null,
    },
    lastName: {
        value: "",
        error: null,
    },
    email: {
        value: "",
        error: null,
    },
};

function reducer (state, action){
    return {
        ...state,
        [action.type]: {
            value: action.payload,
            error: action.error
        }
    };
}
// placeholder

export default ()=> {
    const [state, dispatch] = useReducer(reducer, initialState);

    function handleChange(e) {
        const { name, value } = e.target;//set to the opj
        let error = null; //by Deflate is null
        if(name == "firstName"){
            if(value.length<3){
                error="The First name Must be at least 3"
            }
        }
        if(name == "lastName"){
            if(value.length<3){
                error="The Last name Must be at least 3"
            }
        }
        if(name == "email"){
            if(value.length<5){
                error="The Last email Must be at least 5"
            }
        }

        dispatch({
            type: name,
            payload: value,
            error: error
        });
    }

    return(
        <div>
            {JSON.stringify(state)}
            <table class="table table-striped table-hover">
                <tbody>
                    <tr>
                        <th>First Name</th>
                        <td>
                        <input name="firstName" value={state.firstName.value} onChange={handleChange}/>
                        {state.firstName.error !== null &&(
                            <p className="text-danger">{state.firstName.error}</p>
                        )}
                        </td>
                    </tr>
                    <tr>
                        <th>Last Name</th>
                        <td>
                        <input name="lastName" value={state.lastName.value} onChange={handleChange}/>
                        {state.lastName.error !== null &&(
                            <p className="text-danger">{state.lastName.error}</p>
                        )}
                        </td>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td>
                        <input name="email" value={state.email.value} onChange={handleChange}/>
                        {state.email.error !== null &&(
                            <p className="text-danger">{state.email.error}</p>
                        )}
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="d-grid gap-2 mt-4">
                <button type="button" class="btn btn-primary">Submit</button>
            </div>            
        </div>
    )
}
