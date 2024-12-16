import { useState } from "react";

const NumberOfEvents = ({ currentNOE, setCurrentNOE, setErrorAlert }) => {
  const [number, setNumber] = useState(currentNOE);

  const handleInputChanged = (event) => {
    const numberInput = event.target.value;
    setCurrentNOE(numberInput);
    setNumber(numberInput);

    let errorText;
    if (isNaN(numberInput) || numberInput <= 0) {
      errorText = "Entry must be a positive integer.";
    } else {
      errorText = "";
    }
    setErrorAlert(errorText);
  };

  return (
    <div id="number-of-events">
      <label>Number of events: </label>
      <input type="text" value={number} onChange={handleInputChanged} />
    </div>
  );
};

export default NumberOfEvents;
