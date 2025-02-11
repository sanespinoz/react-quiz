import { useContext } from 'react';
import { QuizContext } from '../context/quiz';

import Quiz from '../img/quiz.svg';

import './Welcome.css';

const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="welcome">
      <h2>Welcome</h2>
      <p>Click the button below to get started: </p>
      <button onClick={() => dispatch({ type: 'CHANGE_STATE' })}>Start</button>
      <img src={Quiz} alt="Start of the test" />
    </div>
  );
};

export default Welcome;
