import { useCallback, useState, useRef } from 'react';
// import './App.css'

import 'survey-core/modern.min.css';
import { StylesManager, Model } from 'survey-core';
import { Survey } from 'survey-react-ui';


StylesManager.applyTheme("modern");


const surveyJson = {
  pages: [{
    elements: [{
      type: "html",
      html: "<h2>In this survey, we will ask you a couple questions about your impressions of our product.</h2>"
    }]
  }, {
    elements: [{
      name: "Transport",
      title: "How do you get to work?",
      type: "radiogroup",
      choices: [
        { value: 1, text: "Car" },
        { value: 2, text: "Bus" },
        { value: 3, text: "Train" },
        { value: 4, text: "Walk/cycle" }
      ],
      isRequired: true
    }]
  }, {
    elements: [{
      name: "Food",
      title: "What do you eat?",
      type: "radiogroup",
      choices: [
        { value: 1, text: "Vegan" },
        { value: 2, text: "Veggie" },
        { value: 3, text: "Pescatarian " },
        { value: 4, text: "Meat Eater" }
      ],
      isRequired: true
    }]
  },{
    elements: [{
      name: "Veggie",
      isRequired: true,
      title: "What products?",
      type: "checkbox",
      visibleIf: "{Food} = 2", 
      choices: [
        { value: 1, text: "Cheese" },
        { value: 2, text: "Milk" },
        { value: 3, text: "Eggs " },
      ],
    },     {
      type: "rating",
      name: "satisfaction",
      visibleIf: "{Veggie.choices.value} = 1",
      title: "How many portions a week do you eat of Cheese?",
      choicesFromQuestion: "Veggie",
      choicesFromQuestionMode: "selected"
    },   
      {
      type: "rating",
      name: "satisfaction",
      visibleIf: "{Veggie.choices.value} = 2",
      title: "How many portions a week do you eat of Milk?",
      choicesFromQuestion: "Veggie",
      choicesFromQuestionMode: "selected"
    },     {
      type: "rating",
      name: "satisfaction",
      visibleIf: "{Veggie.choices.value} = 3",
      title: "How many portions a week do you eat of Eggs?",
      choicesFromQuestion: "Veggie",
      choicesFromQuestionMode: "selected"
    }
  ],
  }, 
  {
    elements: [{
      name: "Pesc",
      title: "What products?",
      type: "checkbox",
      visibleIf: "{Food} = 3", 
      choices: [
        { value: 1, text: "Cheese" },
        { value: 2, text: "Milk" },
        { value: 3, text: "Eggs " },
        { value: 4, text: "Tinned Fish" },
        { value: 5, text: "Fresh Fish" },
        { value: 6, text: "Shellfish " },
      ],
      isRequired: true
    }],
  }, {
    elements: [{
      name: "Meat Eater",
      title: "What meat products do you eat?",
      type: "checkbox",
      visibleIf: "{Food} = 4", 
      choices: [
        { value: 1, text: "Beef" },
        { value: 2, text: "Chicken" },
        { value: 3, text: "Pork " },
        { value: 4, text: "Lamb" },
        { value: 5, text: "Turkey" }
      ],
      isRequired: true
    }],
    // visibleIf: "{} >= 4"
  }, {
    elements: [{
      name: "Travel",
      title: "Where have your been in the last year?",
      type: "radiogroup",
      choices: [
        { value: 1, text: "Nowhere" },
        { value: 2, text: "UK" },
        { value: 3, text: "Europe" },
        { value: 4, text: "North America" },
        { value: 5, text: "South America" },
        { value: 6, text: "Asia" },
        { value: 7, text: "Africa" },
        { value: 8, text: "Oceania" }
      ],
    }],
  }],
  showQuestionNumbers: "off",
  pageNextText: "Next",
  completeText: "Submit",
  showPrevButton: false,
  firstPageIsStarted: true,
  startSurveyText: "Take the Survey",
  completedHtml: "Thank you for your feedback!",
  showPreviewBeforeComplete: "showAnsweredQuestions"
};

function QuizContainer() {
  // useRef enables the Model object to persist between state changes
  const survey = useRef(new Model(surveyJson)).current;
  const [surveyResults, setSurveyResults] = useState("");
  const [isSurveyCompleted, setIsSurveyCompleted] = useState(false);

  const displayResults = useCallback((sender) => {
    setSurveyResults(JSON.stringify(sender.data, null, 4));
    setIsSurveyCompleted(true);
  }, []);

  survey.onComplete.add(displayResults);

  // surveyJson.showProgressBar = 'bottom';
// ReactDOM.render (<SurveyReact.Survey model={survey}/>, document.getElementById("surveyElement"));

  return (
    <>
      <Survey model={survey} id="surveyContainer" />
      {isSurveyCompleted && (
        <>
          <p>Result JSON:</p>
          <code style={{ whiteSpace: 'pre' }}>
            {surveyResults}
          </code>
        </>
        )
      }
    </>
  );
}

export default QuizContainer;
