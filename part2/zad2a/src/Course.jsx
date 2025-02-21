import React from 'react';
import Header from './Header';
import Content from './Content';

const Course = ({ course }) => {
  // Sum the exercises using reduce
  const totalExercises = course.parts.reduce((sum, part) => {
    return sum + part.exercises;
  }, 0);

  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <p><strong>Total exercises: {totalExercises}</strong></p>
    </div>
  );
};

export default Course;
