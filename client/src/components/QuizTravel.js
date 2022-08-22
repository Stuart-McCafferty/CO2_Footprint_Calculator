import React, {useState} from 'react'

const QuizTravel = () => {

    const [number, setNumber] = useState(0)

    const handleInc = () => {
        let newNum = number + 1; 
        setNumber(newNum);
    }
    
    const handleDec = () => {
        let newNum = number - 1; 
        setNumber(newNum);
    }

    return (
        <div>
            <div>
                <h2>In the last year where have you traveled?</h2>
                <form>
                    <button>Nowhere</button>
            

                    <button>Within the UK</button>
                    <div>
                        <p>How many times?</p>
                        <p>{number}</p>
                        <button onClick={handleInc}>+</button>
                        <button onClick={handleDec}>-</button>
                    </div>
                    <button>Mainland Europe</button>
                    <div>
                        <p>How many times?</p>
                        <p>{number}</p>
                        <button onClick={handleInc}>+</button>
                        <button onClick={handleDec}>-</button>
                    </div>

                    <button>Asia</button>
                    <div>
                        <p>How many times?</p>
                        <p>{number}</p>
                        <button onClick={handleInc}>+</button>
                        <button onClick={handleDec}>-</button>
                    </div>

                    <button>Africa</button>
                    <div>
                        <p>How many times?</p>
                        <p>{number}</p>
                        <button onClick={handleInc}>+</button>
                        <button onClick={handleDec}>-</button>
                    </div>

                    <button>North America</button>
                    <div>
                        <p>How many times?</p>
                        <p>{number}</p>
                        <button onClick={handleInc}>+</button>
                        <button onClick={handleDec}>-</button>
                    </div>
                    <button>South America</button>
                    <div>
                        <p>How many times?</p>
                        <p>{number}</p>
                        <button onClick={handleInc}>+</button>
                        <button onClick={handleDec}>-</button>
                    </div>
                    <button>India</button>
                    <div>
                        <p>How many times?</p>
                        <p>{number}</p>
                        <button onClick={handleInc}>+</button>
                        <button onClick={handleDec}>-</button>
                    </div>
                    <button>Antartica</button>
                    <div>
                        <p>How many times?</p>
                        <p>{number}</p>
                        <button onClick={handleInc}>+</button>
                        <button onClick={handleDec}>-</button>
                    </div>
                    <button>Australasia</button>
                    <div>
                        <p>How many times?</p>
                        <p>{number}</p>
                        <button onClick={handleInc}>+</button>
                        <button onClick={handleDec}>-</button>
                    </div>
                    <button>Get My Score!</button>
                </form>
            </div>
        </div>
    )
    }

export default QuizTravel