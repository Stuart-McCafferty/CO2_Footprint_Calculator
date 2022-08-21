import React, { useEffect, useState } from 'react';
import './App.css';
import { QuizContainer } from './containers/QuizContainer';

function App() {

  const [values, setValues] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9000/api/values')
      .then(res => res.json())
      .then(data => setValues(data));
  })

  return (
    <>    
    <div className="App">
    <QuizContainer/>
    </div>
    </>
);    

}

export default App;
