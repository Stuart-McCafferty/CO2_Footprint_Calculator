import React from 'react'
import styled from 'styled-components'
import QuizContainer from '../containers/QuizContainer'

export const HomePage = () => {
  return (
    <HomepageContainer>
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
  )
}

const HomepageContainer = styled.main`
    background-color: #F9F5F0;
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

// const AnimationContainer = styled.div `
//   position: absolute;
//   width: 200px;
//   height: 200px;
//   top: 1%;
//   left: 50%;
//   margin-left: -100px; /* Negative half of width. */
// `