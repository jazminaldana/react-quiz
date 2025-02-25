import React from "react";

const StartScreen = ({ numQuestions, dispatch }) => (
  <div className="start">
    <h2>Welcome to The React Quiz!</h2>
    <h3>{numQuestions} questions to test your React mastery</h3>
    <button className="btn btn-ui" onClick={() => dispatch({ type: "start" })}>Let&lsquo;s start</button>
  </div>
);

export default StartScreen;