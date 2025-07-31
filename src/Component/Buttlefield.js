
import '.././style.css'
import { CHECKED_SHIP, CHECKED_WATER, SHIP, WATER } from '../state/cellstate';

const cellStateMap = {
  [WATER] : '',
  [SHIP]: '',
  [CHECKED_WATER]: '🌊',
  [CHECKED_SHIP]: '💥'
}

const Cell = ({handleClick, value, x, y}) => {
    return <button className="cell" onClick={() => handleClick(x, y)}>{cellStateMap[value]}</button>
}

export const Buttlefield = ({matrix, onFire}) => {
  return (
  <div> <span className='battlefield-text'>Buttlefield</span>
    {matrix.map((line, lineNum) => (
        <div key={lineNum} className='line'>
            {line.map((v, i) => (
            <Cell 
            key={`${lineNum}${i}`} 
            value={v} 
            y={lineNum} 
            x={i} 
            handleClick={onFire}/>
            ))}
        </div>
        ))}
  </div>
  );
};