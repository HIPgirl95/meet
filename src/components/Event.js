import { useState } from "react";

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <li>
      <div>
        <h2>{event.summary}</h2>
        <h4>{event.location}</h4>
        <h4>{event.created}</h4>
        <button
          className="details-button"
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? "Hide Details" : "Show Details"}
        </button>
        {showDetails ? (
          <div>
            {" "}
            <p className="details">{event.description}</p>
          </div>
        ) : (
          <></>
        )}
      </div>
    </li>
  );
};

export default Event;
