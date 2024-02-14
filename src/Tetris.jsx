import './Tetris.scss';
import fabricLogo from './assets/Fabric_logo-01.png';


const matrixH = 20;
const matrixW = 6;
const boardMatrix = Array.from(Array(matrixH), ()=> Array(matrixW).fill(0) );
export const Tetris = () => {

    return (
      <>

      <div className='page'>
        <div className='header'>
          [ Fits any space ]
        </div>
        <div className='body'>
          <div className='right-side'>
            Next:
            <div className='next-shapes'></div>
            <div className='website'>getfabric.com</div>
          </div>
          <div className='board'>

          </div>
          <div className='left-side'>
            <div className='score'>
              <div className='points'>Points:</div>
              <div className='point-value'>1005</div>
              <div className='level'>Level:</div>
              <div className='level-value'>3</div>
            </div>
            <img src={fabricLogo} className='fabric-logo' alt='Fabric'/>
          </div>
        </div>

      </div>
      </>
    )
}