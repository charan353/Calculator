import React, { useState } from "react";
import image from './images/calci.png'
function Calculator() {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    console.log(e)
    setResult(result.concat(e.target.name));
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  const clear = () => {
    setResult("");
  };

  return (
    <>
    <div className="title">
      <h1>Simple Calculator</h1>
    </div>
    <div className="mn">
      <div className="profile" >
        <img src={image} alt="image"/>
      </div>
      <div className="calculator">
        <input type="text" value={result} />
        <div className="keys">
          
          <div>
            <button name="1" onClick={handleClick}>
              1
            </button>
            <button name="2" onClick={handleClick}>
              2
            </button>
            <button name="3" onClick={handleClick}>
              3
            </button>
            <button name="4" onClick={handleClick}>
              4
            </button>
          </div>
          <div>
            <button name="5" onClick={handleClick}>
              5
            </button>
            <button name="6" onClick={handleClick}>
              6
            </button>
            <button name="7" onClick={handleClick}>
              7
            </button>
            <button name="8" onClick={handleClick}>
              8
            </button>
          </div>
          <div>
            <button name="9" onClick={handleClick}>
              9
            </button>
            <button name="0" onClick={handleClick}>
              0
            </button>
            <button name="+" onClick={handleClick}>
              +
            </button>
            <button name="-" onClick={handleClick}>
              -
            </button>
          </div>
          <div>
            <button name="*" onClick={handleClick}>
              *
            </button>
            <button name="/" onClick={handleClick}>
              /
            </button>
            <button name="." onClick={handleClick}>
              .
            </button>
            <div>
            <button name="clear" onClick={clear}>
              clear
            </button>
            </div>
          </div>
          <button name="result" onClick={calculate} className='result'>
            Result
          </button>
        </div>
      </div>
    </div>
    </>
  );
}

export default Calculator;
