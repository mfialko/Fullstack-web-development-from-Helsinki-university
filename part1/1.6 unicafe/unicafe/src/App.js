import React, { useState } from 'react';

const Button = ({ label, handleClick }) => {
  return <button onClick={handleClick}>{label}</button>
}

const Statistics = ({good, neutral, bad}) => {

  const getAverageScore = () => {
    let scores = {
      good: 1,
      neutral: 0,
      bad: -1
    }
    let sumOfScores = good * scores.good + neutral * scores.neutral + bad * scores.bad;
    let numOfScores = good + neutral + bad;
    return numOfScores > 0 ? (sumOfScores)/numOfScores : 0;
  }

  const getPositivePercent = () => {
    let numOfScores = good + neutral + bad;
    let positive = numOfScores > 0 ? (good/numOfScores) : 0;
    return `${positive * 100}%`;
  }

  return (
    <div className="statistics">
      <h2>statistics</h2>
      <ul className="feedback-list">
        <li>good {good}</li>
        <li>neutral {neutral}</li>
        <li>bad {bad}</li>
        <li>all {good + neutral + bad}</li>
        <li>average {getAverageScore()}</li>
        <li>positive {getPositivePercent()}</li>
      </ul>
    </div>
  );
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addGoodFeedback = () => {
    setGood(prev => prev + 1);
  }

  const addNeutralFeedback = () => {
    setNeutral(prev => prev + 1);
  }

  const addBadFeedback = () => {
    setBad(prev => prev + 1);
  }


  return (
    <div>
      <h1>give feedback</h1>
      <div className="buttons">
        <Button label="good" handleClick={addGoodFeedback} />
        <Button label="neutral" handleClick={addNeutralFeedback} />
        <Button label="bad" handleClick={addBadFeedback} />
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App;