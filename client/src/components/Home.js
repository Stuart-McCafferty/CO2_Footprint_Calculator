import React, {useState, useEffect} from "react";
import QuizContainer from "./containers/QuizContainer";
import 'survey-core/modern.min.css';
import { StylesManager, Model } from 'survey-core';


StylesManager.applyTheme("modern");

// function Home(){
//   const [values, setValues] = useState([]);

  // useEffect(() => {
  //   fetch('http://localhost:9000/api/values')
  //     .then(res => res.json())
  //     .then(data => setValues(data));
  // })

  Survey.StylesManager.applyTheme("default");
  var json = {
    completeText: "Finish",
    pageNextText: "Continue",
    pagePrevText: "Previous",

  return (
    <>    
    <div>
      <h1>Carbon Hero</h1>
      <h2>Lets help save the planet and calculate your carbon footprint</h2>
      <p>The test takes approximately 5 minutes to complete</p>
      <p>The questions are divided in 3 sections: Transport, Food Consumption and Travel, </p>
      <button>Start</button>
    </div>
    </>
    );  

};

export default App;