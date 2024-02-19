import './Tetris.scss';
import fabricLogo from './assets/Fabric_logo-01.png';
import openBracket from './assets/openBracket.png';
import closeBracket from './assets/closeBracket.png';
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
  if (isGameOver) return (
    <GameOver restart={restart} />
  )


  return (
    <div className='page'>
      <div className='header'>
        <img src={openBracket} className='bracket'/>
        Fits any space
        <img src={closeBracket} className='bracket'/>
      </div>
      <div className='body'>
        <div className='right-side'>
          <div className='website'>getfabric.com</div>
        </div>
        <div className='board' onKeyDown={onKeyDown} ref={board} tabIndex={0}>
          {display.map((row, index) =>
            <Row row={row} key={index}/>)}
        </div>
        <div className='left-side'>
          <div className='score'>
            <div className='points'>Points:</div>
            <div className='point-value'>{score}</div>
            <div className='level'>Level:</div>
            <div className='level-value'>{level}</div>
          </div>
          <ArrowKeyboard onClick={onClick}/>
          <img src={fabricLogo} className='fabric-logo' alt='Fabric'/>
        </div>
      </div>
    </div>
  )
}