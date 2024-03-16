import { useState } from "react";

import Header from "./Components/Header";
import UserInput from "./Components/UserInput";
import Results from "./Components/Results";

// import { calculateInvestmentResults } from "../util/investment";

function App() {
  // USESTATE

  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  
  const inputIsValid = userInput.duration >= 1;

  // HANDLE FUNCTIONS

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }


  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput} />
      { !inputIsValid && <p className="center">Please enter a duration greater than 0</p> }
      { inputIsValid && <Results input={userInput} />}
    </>
  );
}

export default App;
