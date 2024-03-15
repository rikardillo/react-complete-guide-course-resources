import { useState } from "react";


export default function Input({ label }) {

  const [ inputValue, setInputValue ] = useState(0);
  
  function handleChangeValue(entry) {
    setInputValue(entry.target.value);
    console.log(entry.target.value);
  }

  return (
    <div>
      <label htmlFor="">{label}</label>
        <input type="number" value={inputValue} onChange={handleChangeValue} />
    </div>
  );
};
