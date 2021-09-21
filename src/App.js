
import { useEffect, useState } from 'react';
import './App.css';
import Device from './components/Device/Device';
import Books from './components/Books/Books';

function App() {
  const [steps, setSteps] = useState(0);
  const books = [
    { name: 'Small Giants', author: 'bo' },
    { name: 'Build to sell', author: 'john' },
    { name: 'Grind it', author: 'Ray' },
    { name: 'Shoe Dog', author: 'bo' },
  ]

  const handleIncreaseSteps = () => {
    setSteps(steps + 1);

  }
  useEffect(() => {
    console.log(steps);
  }, [steps])
  return (
    <div className="App">
      <h3>My steps: {steps}</h3>
      <button onClick={handleIncreaseSteps}>Walk</button>
      <Device name='phone' steps={steps} price='16500' />
      <Books books={books} />
    </div>
  );
}

export default App;
