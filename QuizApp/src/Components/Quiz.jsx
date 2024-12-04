import React from "react";
import { qbank } from "../Data";

const Quiz = () => {
  return (
    <div className="Quiz">
      <h3>Quiz App </h3>
      Question{qbank.id}:{qbank.Question}
      <br />
      <input type="radio" />
      {qbank.op1}
      <br />
      <input type="radio" />
      {qbank.op2}
      <br />
      <input type="radio" />
      {qbank.op3}
      <br />
      <input type="radio" />
      {qbank.op4}
      <br />
      <button>Prev</button>
      <button>Next</button>
    </div>
  );
};

export default Quiz;
