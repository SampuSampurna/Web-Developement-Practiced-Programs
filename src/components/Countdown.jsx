import React, { useState,useReducer } from "react";
const InitialState = {
  count:0,
};
const counterReducer =(state, action)=>{
 switch (action.type) {
  case 'INCREMENT':
    return {count : state.count +1};
   break; 
   case 'DECREMENT':  
   return{count :state.count -1 };
   default:
     return state;
 }
}
function Countdown() {
  const [number, setNumber] = useState(0);
  const [counter, dispatch] = useReducer(counterReducer, InitialState);
  const handleIncrement = () => {
    dispatch({
      type:'INCREMENT',
    })
  };
  const handleDecrement = () => {
    dispatch({
      type:'DECREMENT',
    })
  };
  return (
    
      <div className="countdown-container">
        
       
        <button onClick={handleDecrement} className="add-button">Sub</button>
        <span>{counter.count}</span>
        <button onClick={handleIncrement} className="sub-button">Add</button>
      </div>
    
    
  );
}

export default Countdown;
