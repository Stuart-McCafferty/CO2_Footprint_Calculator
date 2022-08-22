import React from 'react'
import QuizFood from './QuizFood'
import QuizTransport from './QuizTransport'
import QuizTravel from './QuizTravel'

const QuizGrid = ({number, handleDec, handleInc}) => {
  return (
    <div>
      <QuizTransport number={number} handleDec={handleDec} handleInc={handleInc}/>
      <QuizFood number={number} handleDec={handleDec} handleInc={handleInc}/>
      <QuizTravel/>
    </div>
  )
}

export default QuizGrid;

//This is more for styling purposes

