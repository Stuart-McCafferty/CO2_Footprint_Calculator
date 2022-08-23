import { useCallback, useState, useRef } from 'react';
// import './App.css'

import 'survey-core/modern.min.css';
import { StylesManager, Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import { ResultsPage } from '../components/ResultsPage';
import drain from 'drain-js';


StylesManager.applyTheme("modern");

export const ResultsPage = ({surveyResults}) => {

drain({ 
    start: 100, 
    end: 1000, 
    onInterval: function(val){
      // do something
    }
  });

const promiseJson = { 
  showProgressBar: "top", 
  pages: [{
    elements: [{
      type: "html",
      html: "<h2>OK {name}, are you ready to reduce your carbon footprint?.</h2>"
    }]
  }, 
  
//   Travel
  {
    elements: [{
      name: "Transport",
      title: "Would it work for you to use your bike or walk more?",
      type: "radiogroup",
      choices: [
        { value: 1, text: "Yes" },
        { value: 2, text: "No" }
      ],
      isRequired: true
    }]
  }, 
  
//   Food
  {
    elements: [{
      name: "Meat",
      title: "Eat less beef and lamb?",
      type: "radiogroup",
      choices: [
        { value: 1, text: "Yes" },
        { value: 2, text: "No" }
      ],
      isRequired: true
    }]
    }, 

    {
      elements: [{
        name: "Veggie",
        title: "Eat more vegetarian meals?",
        type: "radiogroup",
        choices: [
            { value: 1, text: "Yes" },
            { value: 2, text: "No" }
          ],
          isRequired: true
      }],
    },

    // CONTINENTS 
    {
        elements: [{
          name: "Long-haul flight",
          title: "Avoid long distance flying.",
          type: "radiogroup",
          choices: [
              { value: 1, text: "Yes" },
              { value: 2, text: "No" }
            ],
            isRequired: true
        }],
      },

    {
        elements: [{
          name: "Medium-haul flight",
          title: "Reduce your medium-haul flights",
          type: "radiogroup",
          choices: [
              { value: 1, text: "Yes" },
              { value: 2, text: "No" }
            ],
            isRequired: true
        }],
      },

      {
        elements: [{
          name: "Domestic flight",
          title: "Avoid domestic flights",
          type: "radiogroup",
          choices: [
              { value: 1, text: "Yes" },
              { value: 2, text: "No" }
            ],
            isRequired: true
        }],
      },
  ],
  
  // showQuestionNumbers: "off",
  pageNextText: "Next",
  completeText: "Submit",
  showPrevButton: false,
  firstPageIsStarted: true,
  startSurveyText: "Reduce your carbon footprint",
  completedHtml: "Do you want to recieve a summary of your carbon footprint and your climate promises?",
  showPreviewBeforeComplete: "showAnsweredQuestions"
}
}

// function QuizContainer() {
//   // useRef enables the Model object to persist between state changes
//   const survey = useRef(new Model(surveyJson)).current;
//   const [surveyResults, setSurveyResults] = useState("");
//   const [isSurveyCompleted, setIsSurveyCompleted] = useState(false);

//   const displayResults = useCallback((sender) => {
//     setSurveyResults(JSON.stringify(sender.data, null, 4));
//     setIsSurveyCompleted(true);
//   }, []);

//   survey.onComplete.add(displayResults);


//   return (
//     <>
//       <Survey model={survey} id="surveyContainer" />
//       {isSurveyCompleted && (
//         <div>
//           <ResultsPage surveyResults={surveyResults}/>
//             <code style={{ whiteSpace: 'pre' }}>
//             {surveyResults}
//           </code>
//         </div>
//         )
//       }
//     </>
//   );
}

export default PromiseContainer;
