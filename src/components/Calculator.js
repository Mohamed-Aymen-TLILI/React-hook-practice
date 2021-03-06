import React, {useReducer, useState} from 'react';

const CalculatorReducer = (state, action) => {
    switch (action.type){
        case 'ADD':
            return {a: action.a, b: action.b, total: action.a + action.b, operation: 'ADD'};
        case 'MULTIPLY':
            return {a: action.a, b: action.b, total: action.a * action.b, operation: 'MULT'};
        case 'DIVIDE':
            return {a: action.a, b: action.b, total: action.a / action.b, operation: 'DIV'};
        case 'RESET':
            return {a:0, b:0, total: 0, operation: 'RESET'}
        default:
            return state;
    
        }
}
 const Calculator = () => {
     
     const [a, setA] = useState(0);
     const [b, setB] = useState(0);
     const [state, dispatch ]= useReducer(CalculatorReducer, (a, b));
     const changeA = (e) => {
         setA(Number(e.target.value));
     };

     const changeB = (e) => {
         setB(Number(e.target.value));
     };
      
     const reset = (e) => {
         setA(0);
         setB(0);
         dispatch({type: 'RESET'});
     }
   
     return (
       <div>
         <input type="text" valeur={a} onChange={changeA} /> <br />
         <input type="text" valeur={b} onChange={changeB} />
         <br />
         <button onClick={() => dispatch({ type: "ADD", a: a, b: b })}>
           +
         </button>
         <br />
         <button onClick={() => dispatch({ type: "MULTIPLY", a: a, b: b })}>
           *
         </button>
         <button onClick={() => dispatch({ type: "DIVIDE", a: a, b: b })}>
           /
         </button>
         <button onClick={reset}>reset</button> <br/>
         {state.total}
       </div>
     );
 } 
  
 export default Calculator;
