import React from "react";
import "./Card.css";

function Card({ Name, Purpose, Rating, Recc }) {
  return (
    <div className="card-container">
      <div className="card-title">
        <h1 className="Title">{Name}</h1>
        <h3 className="Rating">Rating: {Rating}</h3>
      </div>
      <div className="card-body">
        <p className="Purpose">{Purpose}</p>
        <div className="Recc">{Recc}</div>
      </div>
      <button className="button">View Review</button>
    </div>
  );
}

export default Card;
