import './App.css';
import {HeaderWithCounter} from './Component/HeaderWithCounter';
import {Buttlefield} from './Component/Buttlefield';
import {ResetBtn} from './Component/ResetBtn';
import { useGameState } from './state/useGameState';

function App() {
  const {turn, reset, matrix, fire, won} = useGameState();

  if (won) {
    alert('Москва згоріла і втонула')
  }

  return (
    <div className="App ">
     <div className='col-8 battlefield'>
        <HeaderWithCounter turn={turn}/>
        <Buttlefield matrix={matrix} onFire={fire}/>
        <ResetBtn reset={reset} />
      </div>
    </div>
  );
}

export default App; 
