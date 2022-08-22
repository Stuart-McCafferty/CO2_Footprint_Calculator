import React, {useState, useEffect} from "react";
import UserTable from "./components/UserTable";
import QuizContainer from "./containers/QuizContainer";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from "./components/NavBar";


function App(){
  const [values, setValues] = useState([]);

  // useEffect(() => {
  //   fetch('http://localhost:9000/api/values')
  //     .then(res => res.json())
  //     .then(data => setValues(data));
  // })

  return (
    <Router>
      {/* <NavBar/> */}
        <Routes>
            {/* <Route path="/" element={<Home/>}/> */}
            <Route path="/quiz" element={<QuizContainer/>}/>
            <Route path="/table" element={<UserTable/>}/>
        </Routes>
    </Router>
    
    );  

};

export default App;
