import React, {useState, useEffect} from "react";
import UserTable from "./components/UserTable";
import UserContainer from "./containers/UserContainer";
import QuizContainer from "./containers/QuizContainer";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from "./components/NavBar";
import { getUsers } from './components/QuizService';


function App(){
  const [values, setValues] = useState([]);
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

  return (
    <Router>
      {/* <NavBar/> */}
        <Routes>
            {/* <Route path="/" element={<Home/>}/> */}
            <Route path="/quiz" element={<QuizContainer/>}/>
            <Route path="/table" element={<UserContainer users={users}/>}/>
        </Routes>
    </Router>
    
    );  

};

export default App;
