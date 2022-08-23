import 'survey-core/modern.min.css';
import { StylesManager, Model } from 'survey-core';
import { useCallback, useState, useRef } from 'react';
import { Survey } from 'survey-react-ui';



StylesManager.applyTheme("modern");

const surveyJson = {
    pages: [{
      name: "PersonalDetails",
      
    }]
  };

function UserForm(){
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
          <code>{surveyResults}</code>
        </div>
        )
      }
      
    </>
  );
}

export default UserForm
