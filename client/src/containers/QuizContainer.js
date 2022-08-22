import React, {useState} from 'react'
import QuizGrid from '../components/QuizGrid'

export const QuizContainer = () => {

  const [number, setNumber] = useState(0)

  const handleInc = (event) => {
      event.preventDefault();
      let newNum = number + 1; 
      setNumber(newNum);
  }
  
  const handleDec = (event) => {
      event.preventDefault();
      let newNum = number - 1; 
      setNumber(newNum);
  }

  return (
    <div>
        <QuizGrid number={number} handleDec={handleDec} handleInc={handleInc}/>
    </div>
  )
}

export default QuizContainer;
