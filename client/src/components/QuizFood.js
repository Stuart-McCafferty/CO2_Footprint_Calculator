import React, {useState} from 'react';
import styled from 'styled-components';

const QuizFood = () => {

const [VegIsShown, setVegIsShown] = useState(false);
const [PescIsShown, setPescIsShown] = useState(false);
const [MeatIsShown, setMeatIsShown] = useState(false);
const [number, setNumber] = useState(0)

const handleInc = (event) => {
  event.preventDefault();
  let newNum = number + 1; 
  setNumber(newNum);
}

const handleDec = (event) => {
  event.preventDefault();
  let newNum = number - 1; 
  setNumber(newNum);
}

function MeatOption () {
  return (
    <div>
    <h2>What products do you eat in an average week?</h2>
    <form>
        <h3>Cheese</h3>
        <div>
            <p>How many portions a week?</p>
            <p>{number}</p>
            <button onClick={handleInc}>+</button>
            <button onClick={handleDec}>-</button>
        </div>
        <h3>Eggs</h3>
        <div>
            <p>How many portions a week?</p>
            <p>{number}</p>
            <button onClick={handleInc}>+</button>
            <button onClick={handleDec}>-</button>
        </div>
        <h3>Milk</h3>
        <div>
            <p>How many portions a week?</p>
            <p>{number}</p>
            <button onClick={handleInc}>+</button>
            <button onClick={handleDec}>-</button>
        </div>
        <h3>Tinned fish</h3>
        <div>
            <p>How many portions a week?</p>
            <p>{number}</p>
            <button onClick={handleInc}>+</button>
            <button onClick={handleDec}>-</button>
        </div>
        <h3>Fresh fish</h3>
        <div>
            <p>How many portions a week?</p>
            <p>{number}</p>
            <button onClick={handleInc}>+</button>
            <button onClick={handleDec}>-</button>
        </div>
        <h3>Shellfish</h3>
        <div>
            <p>How many portions a week?</p>
            <p>{number}</p>
            <button onClick={handleInc}>+</button>
            <button onClick={handleDec}>-</button>
        </div>
        <h3>Beef</h3>
        <div>
            <p>How many portions a week?</p>
            <p>{number}</p>
            <button onClick={handleInc}>+</button>
            <button onClick={handleDec}>-</button>
        </div>
        <h3>Pork</h3>
        <div>
            <p>How many portions a week?</p>
            <p>{number}</p>
            <button onClick={handleInc}>+</button>
            <button onClick={handleDec}>-</button>
        </div>
        <h3>Chicken</h3>
        <div>
            <p>How many portions a week?</p>
            <p>{number}</p>
            <button onClick={handleInc}>+</button>
            <button onClick={handleDec}>-</button>
        </div>

        <h3>Lamb</h3>
        <div>
            <p>How many portions a week?</p>
            <p>{number}</p>
            <button onClick={handleInc}>+</button>
            <button onClick={handleDec}>-</button>
        </div>

        <h3>Turkey</h3>
        <div>
            <p>How many portions a week?</p>
            <p>{number}</p>
            <button onClick={handleInc}>+</button>
            <button onClick={handleDec}>-</button>
        </div>

    </form>
</div>
  )
}

function PescOption(){
  return (
<div>
    <h2>What products do you eat in an average week?</h2>
    <form>
        <h3>Cheese</h3>
        <div>
              <p>How many portions a week?</p>
              <p>{number}</p>
              <button onClick={handleInc}>+</button>
              <button onClick={handleDec}>-</button>
        </div>
        <h3>Eggs</h3>
        <div>
            <p>How many portions a week?</p>
            <p>{number}</p>
            <button onClick={handleInc}>+</button>
            <button onClick={handleDec}>-</button>
        </div>
        <h3>Milk</h3>
        <div>
            <p>How many portions a week?</p>
            <p>{number}</p>
            <button onClick={handleInc}>+</button>
            <button onClick={handleDec}>-</button>
        </div>
        <h3>Tinned fish</h3>
        <div>
            <p>How many portions a week?</p>
            <p>{number}</p>
            <button onClick={handleInc}>+</button>
            <button onClick={handleDec}>-</button>
        </div>
        <h3>Fresh fish</h3>
        <div>
            <p>How many portions a week?</p>
            <p>{number}</p>
            <button onClick={handleInc}>+</button>
            <button onClick={handleDec}>-</button>
        </div>
        <h3>Shellfish</h3>
        <div>
            <p>How many portions a week?</p>
            <p>{number}</p>
            <button onClick={handleInc}>+</button>
            <button onClick={handleDec}>-</button>
        </div>

    </form>
    </div>
  )
}

function VegOption () {
  return (
      <div>
          <h2>What products do you eat in an average week?</h2>
          <form>
              <h3>Cheese</h3>
              <div>
                  <p>How many portions a week?</p>
                  <p>{number}</p>
                  <button onClick={handleInc}>+</button>
                  <button onClick={handleDec}>-</button>
              </div>

              <h3>Eggs</h3>
              <div>
                  <p>How many portions a week?</p>
                  <p>{number}</p>
                  <button onClick={handleInc}>+</button>
                  <button onClick={handleDec}>-</button>
              </div>

              <h3>Milk</h3>
              <div>
                  <p>How many portions a week?</p>
                  <p>{number}</p>
                  <button onClick={handleInc}>+</button>
                  <button onClick={handleDec}>-</button>
              </div>
          </form>
      </div>
  )
}

  return (
      <form>
        <h2>How would you describe your eating habits?</h2>
            <button>Vegan</button>
            <button onClick={(event) => {
              event.preventDefault();
              setVegIsShown(!VegIsShown)}}>
              {`${VegIsShown ? 'Vegetarian' : 'Vegetarian'}`}
            </button>
            <button onClick={(event) => {
              event.preventDefault();
              setPescIsShown(!PescIsShown)}}>
              {`${PescIsShown ? 'Pescatarian' : 'Pescatarian'}`}</button>
            <button onClick={(event) => {
              event.preventDefault();
              setMeatIsShown(!MeatIsShown)}}>
              {`${MeatIsShown ? 'Meat Eater' : 'Meat Eater'}`}</button>
            {VegIsShown && <VegOption/>}
            {PescIsShown && <PescOption/>}
            {MeatIsShown && <MeatOption/>}
      </form>
  )

}


export default QuizFood;