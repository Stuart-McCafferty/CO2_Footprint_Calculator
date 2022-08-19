import React from 'react'
import QuizFood from './QuizFood'
import QuizTransport from './QuizTransport'
import QuizTravel from './QuizTravel'

const QuizGrid = () => {
  return (
    <div>
      <QuizTransport/>
      <QuizFood/>
      <QuizTravel/>
    </div>
  )
}

export default QuizGrid

//This is more for styling purposes

