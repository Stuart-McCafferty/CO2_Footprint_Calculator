import React, {useState, useEffect} from "react";
import UserTable from "./components/UserTable";
import UserContainer from "./containers/UserContainer";
import QuizContainer from "./containers/QuizContainer";
import styled from "styled-components";
import { render } from 'react-dom';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
// import Lottie from "react-lottie";
// import animation from "./Lottie/Earth.json"
// import animationData from "./Lottie/Earth.json"

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from "./components/NavBar";
import { getUsers } from './components/QuizService';
import { ResultsPage } from "./components/ResultsPage";
import ImprovementContainer from "./containers/ImprovementContainer";


import { HomePage } from "./components/HomePage";



function App(){
  // const [values, setValues] = useState([]);
  const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   fetch('http://localhost:9000/api/values')
  //     .then(res => res.json())
  //     .then(data => setValues(data));
  // })


  useEffect(()=>{
    getUsers().then((allUsers)=> {
      setUsers(allUsers)
    })
  },[]);
  
  
  // const defaultOptions = {
  //   loop: false,
  //   autoplay: true,
  //   animationData: animationData,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice"
  //   }
  // };

  return (


    <>

<Router>
<NavBar/>
  <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/table" element={<UserContainer users={users}/>}/>
      <Route path="/improvements" element={<ImprovementContainer />}/>
  </Routes>
</Router>


</>
    
    );  

};
export default App;