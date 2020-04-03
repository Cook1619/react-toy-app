import React, {useState} from 'react';
import './App.css';
import Counter from './components/Counter';
import Display from './components/Display'

function App() {

  const [ counter, setCounter ] = useState(0)
  const handleClick = (incrementValue) => setCounter(counter + incrementValue);

  return (
    <div className="App">
      <Counter increment={5} onClickFunction={handleClick} />
      <Counter increment={10} onClickFunction={handleClick}/>
      <Counter increment={1} onClickFunction={handleClick}/>
      <Display counter={counter}/>
    </div>
  );
}

export default App;
