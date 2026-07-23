import React from "react";
import "../Stylesheets/mystyle.css";

function CalculateScore(props) {
  const score = ((props.total / props.goal) * 100).toFixed(2);

  return (
    <div className="container">
      <h1>Student Details:</h1>

      <p>
        <span className="label">Name:</span> {props.name}
      </p>

      <p>
        <span className="label">School:</span> {props.school}
      </p>

      <p>
        <span className="label">Total:</span> {props.total}Marks
      </p>

      <p>
        <span className="score">Score:{score}%</span>
      </p>
    </div>
  );
}

export default CalculateScore;