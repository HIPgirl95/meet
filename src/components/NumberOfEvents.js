import { useState } from "react";

const NumberOfEvents = ({ currentNOE, setCurrentNOE }) => {
  const [number, setNumber] = useState(currentNOE);

  const handleInputChanged = (event) => {
    const numberInput = event.target.value;
    setCurrentNOE(numberInput);
    setNumber(numberInput);
  };

  return (
    <div id="number-of-events">
      <label>Number of events: </label>
      <input type="text" value={number} onChange={handleInputChanged} />
    </div>
  );
};

export default NumberOfEvents;
