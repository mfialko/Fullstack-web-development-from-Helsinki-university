import React from 'react'
import ReactDOM from 'react-dom'

//components
import Course from './components/Course';

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        partName: 'Fundamentals of React',
        exercisesNum: 10,
        id: 1
      },
      {
        partName: 'Using props to pass data',
        exercisesNum: 7,
        id: 2
      },
      {
        partName: 'State of a component',
        exercisesNum: 14,
        id: 3
      },
      {
        partName: 'State of a component',
        exercisesNum: 14,
        id: 4
      },
    ]
  }
  

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
