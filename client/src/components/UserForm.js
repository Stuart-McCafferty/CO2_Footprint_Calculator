import 'survey-core/modern.min.css';
import { StylesManager, Model } from 'survey-core';

StylesManager.applyTheme("modern");

const surveyJson = {
    pages: [{
      name: "PersonalDetails",
      elements: [{
        type: "text",
        name: "FirstName",
        title: "Enter your first name:"
      }, {
        type: "text",
        name: "LastName",
        title: "Enter your last name:"
      }]
    }]
  };
  
const survey = new Survey.Model(surveyJson);
survey.focusFirstQuestionAutomatic = false;

    document.addEventListener("DOMContentLoaded", function() {
        survey.render("surveyContainer");
});