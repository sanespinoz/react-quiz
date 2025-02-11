import { useContext } from 'react';
import { QuizContext } from '../context/quiz';

import WellDone from '../img/welldone.svg';

import './GameOver.css';

const GameOver = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="gameover">
      <h2>End of test!</h2>
      <p>Score: {quizState.score}</p>
      <p>
        You got {quizState.score} out of {quizState.questions.length} questions
        right
      </p>
      <img src={WellDone} alt="End of test" />
      <button onClick={() => dispatch({ type: 'NEW_GAME' })}>Reset</button>
    </div>
  );
};

export default GameOver;
