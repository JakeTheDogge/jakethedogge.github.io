import './Tetris.scss';
import fabricLogo from './assets/Fabric_logo-01.png';
import {useBoard} from "./utils/useBoard";
import {useRef} from "react";

const Row = ({row}) => {
  return (
    <span className='t-row'>
      {row.map( (cell, index) => (
        <span className={`t-cell t-cell-${cell}`} key={index}/>
      ))}
    </span>
  );
};

export const Tetris = () => {
  const [display, score, level, isGameOver, onKeyDown] = useBoard();
  const board = useRef();
  board.current?.focus();



    return (
      <>
      <div className='page'>
        {isGameOver && <div className='game over'>Game Over</div>}
        <div className='header'>
          [ Fits any space ]
        </div>
        <div className='body'>
          <div className='right-side'>
            Next:
            <div className='next-shapes'></div>
            <div className='website'>getfabric.com</div>
          </div>
          <div className='board' onKeyDown={ onKeyDown } ref={board} tabIndex={0}>
            {display.map( (row, index) =>
              <Row row={row} key={index}/>)}
          </div>
          <div className='left-side'>
            <div className='score'>
              <div className='points'>Points:</div>
              <div className='point-value'>{score}</div>
              <div className='level'>Level:</div>
              <div className='level-value'>{level}</div>
            </div>
            <img src={fabricLogo} className='fabric-logo' alt='Fabric'/>
          </div>
        </div>

      </div>
      </>
    )
}