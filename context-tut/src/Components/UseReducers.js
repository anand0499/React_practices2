import React,{useReducer} from 'react'

const initialState=0;

const reducer=(state,action)=>{
    if(action.type==="Increament"){
        return state+1;
    }

    if(action.type==="Decreament"){
        return state-1;
    }

    if(action.type==="Reset"){
        return 0;
    }
}


const UseReducers = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
        <h2>{state}</h2>
        <button onClick={()=>dispatch({type:"Increament"})} >Increase </button>
        <button onClick={()=>dispatch({type:"Decreament"})}>Decresae</button>
        <button onClick={()=>dispatch({type:"Reset"})} >Reset</button>
    </div>
  )
}

export default UseReducers