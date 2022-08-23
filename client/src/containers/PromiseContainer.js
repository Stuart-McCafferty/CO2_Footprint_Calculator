import { useCallback, useState, useRef } from 'react';
// import './App.css'

import 'survey-core/modern.min.css';
import { StylesManager, Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
// import drain from 'drain-js';
StylesManager.applyTheme("modern");

const test = 4
// drain({ 
//     start: 100, 
//     end: 1000, 
//     onInterval: function(val){
//       // do something
//     }
//   });

function travelTest(test){
  if (test <= 3){
    return false
  }
  console.log("test")
  return true
}

const promiseJson = { 
  showProgressBar: "top", 
  pages: [{
    elements: [{
      type: "html",
      html: "<h2>OK {name}, are you ready to reduce your carbon footprint?.</h2>"

    }]
  }, 

// Travel
  {
    elements: [{
      name: "Transport",
      title: "Would it work for you to use your bike or walk more?",
      type: "radiogroup",
      visibleIf: "travelTest() = true",
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


function PromiseContainer() {
  const survey2 = useRef(new Model(promiseJson)).current;
  const [surveyResults2, setSurveyResults2] = useState("");
  const [isSurveyCompleted2, setIsSurveyCompleted2] = useState(false);

  const displayResults2 = useCallback((sender) => {
    setSurveyResults2(JSON.stringify(sender.data, null, 4));
    setIsSurveyCompleted2(true);
  }, []);

  survey2.onComplete.add(displayResults2);


  return (
    <>
      <Survey model={survey2} id="surveyContainer2" />
      {isSurveyCompleted2 && (
        <code>
            {surveyResults2}
          </code>
        )
      }
    </>
  );
}

export default PromiseContainer;
