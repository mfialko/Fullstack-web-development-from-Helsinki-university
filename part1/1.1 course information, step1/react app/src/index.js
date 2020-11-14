import React from 'react'
import ReactDOM from 'react-dom'

//components
import Header from './components/Header/';
import Content from './components/Content';
import Total from './components/Total';

const App = () => {
  const course = 'Half Stack application development';
  const numOfExercises = [
    {
      partName: 'Fundamentals of React',
      exercisesNum: 10
    },
    {
      partName: 'Using props to pass data',
      exercisesNum: 7
    },
    {
      partName: 'State of a component',
      exercisesNum: 14
    },
  ];
  const totalNumOfExercises = numOfExercises.reduce((a, b) => (a + b.exercisesNum), 0);

  return (
    <div>
      <Header course={course} />
      <Content content={numOfExercises} />
      <Total num={totalNumOfExercises} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
