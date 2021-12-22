import { useState } from "react";
import "./App.css";
import Button from "./Components/Button/Button";
import { Input } from "./Components/Input/Input";
import * as math from "mathjs";
import { ClearButton } from "./Components/ClearButton/ClearButton";
function App() {
  const [input, setInput] = useState("");
  const addInput = (val) => {
    const output = input + val;
    setInput(output);
  };
  const handleEqual = () => {
    const finalValue = math.evaluate(input);
    setInput(finalValue);
  };
  const handleClear = () => {
    setInput("");
  };
  return (
    <div className="app">
      <div className="calc-wrapper">
        <Input input={input} />
        <div className="row">
          <Button handleClick={addInput}>7</Button>
          <Button handleClick={addInput}>8</Button>
          <Button handleClick={addInput}>9</Button>
          <Button handleClick={addInput}>/</Button>
        </div>
        <div className="row">
          <Button handleClick={addInput}>4</Button>
          <Button handleClick={addInput}>5</Button>
          <Button handleClick={addInput}>6</Button>
          <Button handleClick={addInput}>*</Button>
        </div>
        <div className="row">
          <Button handleClick={addInput}>1</Button>
          <Button handleClick={addInput}>2</Button>
          <Button handleClick={addInput}>3</Button>
          <Button handleClick={addInput}>+</Button>
        </div>
        <div className="row">
          <Button handleClick={addInput}>.</Button>
          <Button handleClick={addInput}>0</Button>
          <Button handleClick={handleEqual}>=</Button>
          <Button handleClick={addInput}>-</Button>
        </div>
        <div className="row">
          <ClearButton handleClear={handleClear}>Clear</ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;
