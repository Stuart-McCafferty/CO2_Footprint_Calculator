import { useCallback, useState, useRef } from 'react';

// import './App.css'

import 'survey-core/modern.min.css';
import { StylesManager, Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import { ResultsPage } from '../components/ResultsPage';



StylesManager.applyTheme("modern");

const surveyJson = { 
  showProgressBar: "top", 
  showQuestionNumbers: "off",
  pageNextText: "Next",
  completeText: "Submit",
  showPrevButton: true,
  firstPageIsStarted: true,
  showCompletedPage: false,
  startSurveyText: "Take the Survey",
  completedHtml: "Thank you for your feedback!",
  showPreviewBeforeComplete: "showAnsweredQuestions",
  pages: [{
    elements: [{
      type: "html",
      html: "<h2>Calculate your footprint then choose and track challenges to help you make small changes in your own life that add up to something bigger.</h2>"
    }]
  },
  {
    elements: [{
    type: "text",
    name: "FirstName",
    title: "Enter your first name:"
  }, {
    type: "text",
    name: "LastName",
    title: "Enter your last name:"
  }]
  },
  {
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
        { value: 3, text: "Non-Veggie " },
      ],
      isRequired: true
    }]
    }, 

    // VEGGIE
    {
      elements: [{
        name: "CheeseQuestion",
        title: "Do you eat Cheese?",
        type: "radiogroup",
        visibleIf: "{Food} = 2", 
        choices: [
          "Yes" ,"No"
        ],
      },
      {
        name: "CheeseChoice",
        title: "How many portions of cheese do you eat per week?",
        type: "rating",
        isRequired: true,
        visibleIf: "{CheeseQuestion} = 'Yes'", 
      },
      {
        name: "MilkQuestion",
        title: "Do you drink Milk?",
        type: "radiogroup",
        visibleIf: "{Food} = 2", 
        choices: [
          "Yes" ,"No"
        ],
      },
      {
        name: "MilkChoice",
        title: "How much milk do you drink?",
        type: "rating",
        isRequired: true,
        visibleIf: "{MilkQuestion} = 'Yes'", 
      },
      {
        name: "EggQuestion",
        title: "Do you eat Eggs?",
        type: "radiogroup",
        visibleIf: "{Food} = 2", 
        choices: [
          "Yes" ,"No"
        ],
      },
      {
        name: "EggChoice",
        title: "How many eggs do you eat?",
        type: "rating",
        isRequired: true,
        visibleIf: "{EggQuestion} = 'Yes'", 
      },
    ]},
    // NON-VEGGIE
    {
      elements: [{
        name: "CheeseQuestion2",
        title: "Do you eat Cheese?",
        type: "radiogroup",
        visibleIf: "{Food} = 3", 
        choices: [
          "Yes" ,"No"
        ],
      },
      {
        name: "CheeseChoice",
        title: "How many portions of cheese do you eat per week?",
        type: "rating",
        isRequired: true,
        visibleIf: "{CheeseQuestion2} = 'Yes'", 
      },
      {
        name: "MilkQuestion2",
        title: "Do you drink Milk?",
        type: "radiogroup",
        visibleIf: "{Food} = 3", 
        choices: [
          "Yes" ,"No"
        ],
      },
      {
        name: "MilkChoice",
        title: "How much milk do you drink?",
        type: "rating",
        isRequired: true,
        visibleIf: "{MilkQuestion2} = 'Yes'", 
      },
      {
        name: "EggQuestion2",
        title: "Do you eat Eggs?",
        type: "radiogroup",
        visibleIf: "{Food} = 3", 
        choices: [
          "Yes" ,"No"
        ],
      },
      {
        name: "EggChoice",
        title: "How many eggs do you eat in a week?",
        type: "rating",
        isRequired: true,
        visibleIf: "{EggQuestion2} = 'Yes'", 
      },
      {
        name: "BeefQuestion",
        title: "Do you eat Beef?",
        type: "radiogroup",
        visibleIf: "{Food} = 3", 
        choices: [
          "Yes" ,"No"
        ],
      },
      {
        name: "BeefChoice",
        title: "How many portions of beef do you eat in a week?",
        type: "rating",
        isRequired: true,
        visibleIf: "{BeefQuestion} = 'Yes'", 
      },
      {
        name: "LambQuestion",
        title: "Do you eat Lamb?",
        type: "radiogroup",
        visibleIf: "{Food} = 3", 
        choices: [
          "Yes" ,"No"
        ],
      },
      {
        name: "LambChoice",
        title: "How many portions of lamb do you eat in a week?",
        type: "rating",
        isRequired: true,
        visibleIf: "{LambQuestion} = 'Yes'", 
      },
      {
        name: "PorkQuestion",
        title: "Do you eat Pork?",
        type: "radiogroup",
        visibleIf: "{Food} = 3", 
        choices: [
          "Yes" ,"No"
        ],
      },
      {
        name: "PorkChoice",
        title: "How many portions of pork do you eat in a week?",
        type: "rating",
        isRequired: true,
        visibleIf: "{PorkQuestion} = 'Yes'", 
      },
      {
        name: "TinnedFishQuestion",
        title: "Do you eat Tinned Fish?",
        type: "radiogroup",
        visibleIf: "{Food} = 3", 
        choices: [
          "Yes" ,"No"
        ],
      },
      {
        name: "TinnedFishChoice",
        title: "How much Tinned Fish do you eat?",
        type: "rating",
        isRequired: true,
        visibleIf: "{TinnedFishQuestion} = 'Yes'", 
      },
      {
        name: "ShellfishQuestion",
        title: "Do you eat  Shellfish?",
        type: "radiogroup",
        visibleIf: "{Food} = 3", 
        choices: [
          "Yes" ,"No"
        ],
      },
      {
        name: "ShellfishChoice",
        title: "How much Shellfish do you eat?",
        type: "rating",
        isRequired: true,
        visibleIf: "{ShellfishQuestion} = 'Yes'", 
      },
      {
        name: "FreshFishQuestion",
        title: "Do you eat Fresh Fish?",
        type: "radiogroup",
        visibleIf: "{Food} = 3", 
        choices: [
          "Yes" ,"No"
        ],
      },
      {
        name: "FreshFishChoice",
        title: "How much Fresh Fish do you eat?",
        type: "rating",
        isRequired: true,
        visibleIf: "{FreshFishQuestion} = 'Yes'", 
      },
    ]}, 
    
    // CONTINENTS 

  {

    elements: [{
      name: "UK",
      title: "Have you tavelled within the UK?",
      type: "radiogroup",
      choices: [
        "Yes" ,"No"
      ],
    },
    {
      name: "UKChoice",
      title: "How many times?",
      type: "rating",
      isRequired: true,
      visibleIf: "{UK} = 'Yes'", 
    },
    {
      name: "Europe",
      title: "Have you tavelled to Europe?",
      type: "radiogroup",
      choices: [
        "Yes" ,"No"
      ],
    },
    {
      name: "EuropeChoice",
      title: "How many times?",
      type: "rating",
      isRequired: true,
      visibleIf: "{Europe} = 'Yes'", 
    },
    {
      name: "Asia",
      title: "Have you tavelled to Asia?",
      type: "radiogroup",
      choices: [
        "Yes" ,"No"
      ],
    },
    {
      name: "AsiaChoice",
      title: "How many times?",
      type: "rating",
      isRequired: true,
      visibleIf: "{Asia} = 'Yes'", 
    },
    {
      name: "NorthAmerica",
      title: "Have you tavelled to North America?",
      type: "radiogroup",
      choices: [
        "Yes" ,"No"
      ],
    },
    {
      name: "NorthAmericaChoice",
      title: "How many times?",
      type: "rating",
      isRequired: true,
      visibleIf: "{NorthAmerica} = 'Yes'", 
    },{
      name: "SouthAmerica",
      title: "Have you tavelled to South America?",
      type: "radiogroup",
      choices: [
        "Yes" ,"No"
      ],
    },
    {
      name: "SouthAmericaChoice",
      title: "How many times?",
      type: "rating",
      isRequired: true,
      visibleIf: "{SouthAmerica} = 'Yes'", 
    },{
      name: "Oceania",
      title: "Have you tavelled to Oceania?",
      type: "radiogroup",
      choices: [
        "Yes" ,"No"
      ],
    },
    {
      name: "OceaniaChoice",
      title: "How many times?",
      type: "rating",
      isRequired: true,
      visibleIf: "{Oceania} = 'Yes'", 
    },{
      name: "Africa",
      title: "Have you tavelled to Africa?",
      type: "radiogroup",
      choices: [
        "Yes" ,"No"
      ],
    },
    {
      name: "AfricaChoice",
      title: "How many times?",
      type: "rating",
      isRequired: true,
      visibleIf: "{Africa} = 'Yes'", 
    },
  
  ],
}
]}

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
        <div>
          <ResultsPage surveyResults={surveyResults}/>
        </div>
        )
      }

    </>

  );
}

export default QuizContainer;
