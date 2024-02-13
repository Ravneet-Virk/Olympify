import React from "react";
import "./Event.css";

function EventDiv(props) {
  return (
    <div className="Event-Detail-row">
      <h1>{props.heading}</h1>
      <div>
        <ul>
          <li>{props.list}</li>
        </ul>
      </div>
    </div>
  );
}

export default EventDiv;
