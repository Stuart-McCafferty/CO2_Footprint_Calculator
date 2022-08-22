// import React, {useState} from 'react'

// export const QuizVeggie = () => {

//     const [number, setNumber] = useState(0)

//     const handleInc = () => {
//         let newNum = number + 1; 
//         setNumber(newNum);
//         }
    
//     const handleDec = () => {
//         let newNum = number - 1; 
//         setNumber(newNum);
//         }

//     return (
//         <div>
//             <h2>What products do you eat in an average week?</h2>
//             <form>
//                 <button>Cheese</button>
//                 <div>
//                     <p>How many portions a week?</p>
//                     <p>{number}</p>
//                     <button onClick={handleInc}>+</button>
//                     <button onClick={handleDec}>-</button>
//                 </div>
    
//                 <button>Eggs</button>
//                 <div>
//                     <p>How many portions a week?</p>
//                     <p>0</p>
//                     <button onClick={handleInc}>+</button>
//                     <button onClick={handleDec}>-</button>
//                 </div>
    
//                 <button>Milk</button>
//                 <div>
//                     <p>How many portions a week?</p>
//                     <p>0</p>
//                     <button onClick={handleInc}>+</button>
//                     <button onClick={handleDec}>-</button>
//                 </div>
//             </form>
//         </div>
//     )
//     }
