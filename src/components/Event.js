const Event = ({ event }) => {
  return (
    <li>
      <div>
        <h2>{event.summary}</h2>
        <h4>{event.location}</h4>
        <h4>{event.created}</h4>
        <button>Show Details</button>
      </div>
    </li>
  );
};

export default Event;
