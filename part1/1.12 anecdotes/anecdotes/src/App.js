import React, { useState } from 'react';


const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]


const Button = ({ label, handleClick }) => {
  return (
    <button className="btn" onClick={handleClick}>{label}</button>
  )
}

const Anecdote = ({ anecdote, votes }) => {
  return (
    <div className="anecdote">
      <span>{anecdote}</span>
      <span>has {votes} votes</span>
    </div>
  )
}


const Anecdotes = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVote] = useState(Array(anecdotes.length).fill(0));

  const getRandomAnecdote = (num) => {
    let randomIndex = Math.floor(Math.random() * num);
    setSelected(randomIndex);
  }

  const upvoteAnecdote = (index) => {
    setVote(prev => {
      let newVotes = [...prev];
      newVotes[index] += 1;
      return newVotes;
    });
  }
  
  const getMostVotedAnecdote = () => {
    return votes.indexOf(Math.max.apply(Math, votes));
  }

  return (
    <div className="anecdotes-wrapper">
      <Anecdote anecdote={anecdotes[selected]} votes={votes[selected]} />
      <Button label="vote" handleClick={() => upvoteAnecdote(selected)} />
      <Button label="next anecdote" handleClick={() => getRandomAnecdote(anecdotes.length)} />

      <div className="most-voted">
        <h2>Anecdote with most votes</h2>
        <Anecdote anecdote={anecdotes[getMostVotedAnecdote(votes)]} votes={votes[getMostVotedAnecdote()]} />
      </div>
    </div>
  )
}

const App = () => {
  
  return (
    <Anecdotes anecdotes={anecdotes} />
  )
}



export default App;
