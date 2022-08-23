import React from 'react'
import drain from 'drain-js';

drain({ 
    start: {counter}, 
    end: 0, 
    onInterval: function(val){
        // do something
      }
    });

// const QuizRecommendations = () => {

//     const handleSubmit = ev => {
//         ev.preventDefault();
//         addRecommendation({})
//         // decrease counter by recomendation value
//     // Set counter 

//   return (