import React, {useState, useEffect} from "react";
import UserContainer from "./containers/UserContainer";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from "./components/NavBar";
import { getUsers } from './components/QuizService';
import ImprovementContainer from "./containers/ImprovementContainer";
import { HomePage } from "./components/HomePage";



function App(){
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    getUsers().then((allUsers)=> {
      setUsers(allUsers)
    })
  },[]);

  return (
    <>
    <Router>
    <NavBar/>
      <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/table" element={<UserContainer users={users} />}/>
          <Route path="/improvements" element={<ImprovementContainer />}/>
      </Routes>
    </Router>
  </>
    
  );  

};
export default App;