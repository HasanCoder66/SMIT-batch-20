import React, { useReducer } from 'react'

const Counter = () => {


    // const reducerFn = (state, action) => {
    //     console.log(state, action);

    //     if(action.type =="increment"){
    //         return state = state + 1
    //     }

    //     if(action.type == "decrement"){
    //         return state = state -1;
    //     }

    //     if(action.type == "reset"){
    //         return state = 0;
    //     }


    //     return state
        
    // }

    // const [state, dispatch] = useReducer(reducerFn, 0);


    const initalState ={
        count : 0
    }

    const reducerFn = (state, action) => {
       
        switch (action.type) {
            case "increment":

            return {...state,  count : state.count + 1}
            case "decrement":

            return {...state, count : state.count - 1}
            case "reset":

            return {...state, count : 0}
                
        
            default:
               return state;
        }
        
    }


    const [state, dispatch] = useReducer(reducerFn, initalState);

    console.log(state);
    
  return (
    <div>

        count {state.count}


    <div>
        <button onClick={() => dispatch({type : "increment"})}>Increment</button>
        <button onClick={() => dispatch({type : "decrement"})}>decrement</button>
        <button onClick={() => dispatch({type : "reset"})}>Reset</button>
    </div>
    </div>
  )
}

export default Counter