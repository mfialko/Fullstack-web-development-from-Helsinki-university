import React, { useState } from 'react';

const Button = ({ label, handleClick }) => {
  return <button onClick={handleClick}>{label}</button>
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
      <div className="statistics">
        <h2>statistics</h2>
        <ul className="feedback-list">
          <li>good {good}</li>
          <li>neutral {neutral}</li>
          <li>bad {bad}</li>
        </ul>
      </div>
    </div>
  )
}

export default App;