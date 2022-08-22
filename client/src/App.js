import React, {useState, useEffect} from "react";
import QuizContainer from "./containers/QuizContainer";
import styled from "styled-components";
import Lottie from "react-lottie";
// import animation from "./Lottie/Earth.json"
import animationData from "./Lottie/Earth.json"



function App(){
  const [values, setValues] = useState([]);

  // useEffect(() => {
  //   fetch('http://localhost:9000/api/values')
  //     .then(res => res.json())
  //     .then(data => setValues(data));
  // })

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <HomepageContainer>
      <NavBar>
        <SiteHeading>CO2 CALCULATOR</SiteHeading>
        <AnimationContainer>
          <Lottie options={defaultOptions} height={200} width={200} />
        </AnimationContainer>
        <NavLinks>
          <Link>Quiz</Link>
          <Link>Results</Link>
          <Link>Improvements</Link>
        </NavLinks>
      </NavBar>
        <HeaderContainer>
          <H1>CHALLENGE YOURSELF TO MAKE A DIFFERENCE</H1>
          <Para>The Climate Crisis is here, what are you going to do about it?x</Para>
        </HeaderContainer>
        <BodyContainer>
          <SurveyContainer>
            <QuizContainer/>
          </SurveyContainer>
        </BodyContainer>

    </HomepageContainer>
    );  

};
export default App;

const HomepageContainer = styled.main`
    background-color: #F9F5F0;
`

const NavBar = styled.nav`
  padding-left: 50px;
  padding-right: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 120px;
  background-color: #0A1128;
  border-bottom: solid black 3px;

`
const NavLinks = styled.ul`
  color: white;
  list-style-type: none;
`
const Link = styled.li`
  display: inline;
  margin-right: 10px;
  font-weight: bold;

`

const HeaderContainer = styled.div`
  padding-top: 50px;
  padding-left: 150px;
  padding-right: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`

const SiteHeading = styled.h1`
  color: white ;
  letter-spacing: 3px;
  font-family: 'Covered By Your Grace';
  font-family: 'Rubik Dirt';
`

const BodyContainer = styled.div`
  padding: 50px;
`

const H1 = styled.h1`
    font-family: 'Covered By Your Grace';
    font-family: 'Rubik Dirt';
`

const Para = styled.p`
  font-family: 'Karla', sans-serif;
  font-size: 24px;
`


const SurveyContainer = styled.div`
  background-color: white;
  margin-left: 100px;
  margin-right: 100px;
  border: solid 1px #F7EDE2;
  box-shadow: 5px 5px 5px 5px #0F6B59;
`

const AnimationContainer = styled.div `
  position: absolute;
  width: 200px;
  height: 200px;
  top: 1%;
  left: 50%;
  margin-left: -100px; /* Negative half of width. */
`