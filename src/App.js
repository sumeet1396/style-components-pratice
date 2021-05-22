import React, { useState } from 'react';
import CourseInput from './Components/CourseGoals/CourseGoalInput/CourseInput';
import './App.css';

function App() {

  const [courseGoals, setCourseGoals] = useState([
    { text: 'Do all exercises!', id: 'g1' },
    { text: 'Finish the course!', id: 'g2' }
  ]);

  const addGoalHandler = enteredText => {
    setCourseGoals(prevGoals => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedGoals;
    });
  };

  return (
    <div className="App">
      <div id="goal-form">
        <CourseInput onAddGoal={addGoalHandler} />
      </div>
    </div>
  );
}

export default App;
