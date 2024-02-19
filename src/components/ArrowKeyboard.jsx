import {Arrow} from "./Arrow";

export const ArrowKeyboard = ({onClick}) => {
  return (
    <div className='buttons'>
      <div className='left button' onClick={() => onClick({key: 'ArrowLeft'})}>
        <Arrow className='arrow' direction='left'/>
      </div>
      <div className='down button' onClick={() => onClick({key: 'ArrowDown'})}>
        <Arrow className='arrow' direction='down'/>
      </div>
      <div className='right button' onClick={() => onClick({key: 'ArrowRight'})}>
        <Arrow className='arrow' direction='right'/>
      </div>
      <div className='up button' onClick={() => onClick({key: 'ArrowUp'})}>
        <Arrow className='arrow' direction='up'/>
      </div>
    </div>
  )
}