import { useState } from "react";

const NumberOfEvents = () => {
  const [number, setNumber] = useState("32");

  const handleInputChanged = (event) => {
    const numberInput = event.target.value;
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
