import React from 'react';
import "./Card.css";

export default function Card(props) {
  return (
    <div>
      <div className="card" style={{ width: "18rem", marginBottom: "20px" }}>
            <img src={props.Image} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text"> {props.text} </p>
            </div>
          </div>
    </div>
  )
}
