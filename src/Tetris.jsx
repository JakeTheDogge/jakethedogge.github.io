import './Tetris.scss';
import {useBoard} from "./utils/useBoard";
import {useRef} from "react";
import {ArrowKeyboard} from "./components/ArrowKeyboard";
import {GameOver} from "./components/GameOver";

const Row = ({row}) => {
  return (
    <span className='t-row'>
      {row.map((cell, index) => (
        <span className={`t-cell t-cell-${cell}`} key={index}/>
      ))}
    </span>
  );
};

export const Tetris = () => {
  const [display, score, level, isGameOver, onKeyDown, onClick, restart] = useBoard();
  const board = useRef();
  board.current?.focus();

  return (
    <div className='page'>
      <div className='body'>
        <div className='right-side'>
        </div>
        {isGameOver ? <GameOver restart={restart} /> :
          <div className='board' onKeyDown={onKeyDown} ref={board} tabIndex={0}>
            {display.map((row, index) =>
              <Row row={row} key={index}/>)}
          </div>}
        <div className='left-side'>
          <div className='score'>
            <div className='points'>Points:</div>
            <div className='point-value'>{score}</div>
            <div className='level'>Level:</div>
            <div className='level-value'>{level}</div>
          </div>
          <ArrowKeyboard onClick={onClick}/>
        </div>
      </div>
    </div>
  )
}