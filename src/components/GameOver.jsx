import openBlueBracket from "../assets/openBlueBracket.png";
import closeBlueBracket from "../assets/closeBlueBracket.png";

export const GameOver = ({restart}) => {
  return (
    <div className='game-over'>
      <div className='game-over-content'>
        <div className='game-over-header'>
          <img src={openBlueBracket} className='bracket'/>
          Game Over
          <img src={closeBlueBracket} className='bracket'/>
        </div>
        <div className='game-over-text'>Want to start again?</div>
        <div className='game-over-button' onClick={restart}>Yes</div>
      </div>
    </div>
  )
}
