import React, {useState, useEffect} from "react";
import QuizContainer from "./containers/QuizContainer";

function App(){
  const [values, setValues] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9000/api/values')
      .then(res => res.json())
      .then(data => setValues(data));
  })

  return (
    <>    
    <div>
      <h1>Test</h1>
      <QuizContainer/>
    </div>
    </>
    );  

};

export default App;
