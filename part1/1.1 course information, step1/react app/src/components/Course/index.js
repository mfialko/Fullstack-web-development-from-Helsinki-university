import React from 'react';

//components
import Header from './Header';
import Content from './Content';
import Total from './Total';


const Course = ({ course }) => {

    const totalNumOfExercises = course.parts.reduce((a, b) => (a + b.exercisesNum), 0);

    return (
        <div>
            <Header course={course.name} />
            <Content content={course.parts} />
            <Total num={totalNumOfExercises} />
        </div>
    )
}

export default Course;