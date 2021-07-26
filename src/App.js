import './App.css';
import RainDrop from './components/RainDrop';

function App() {
  var NumRainDrop = 10;
  
  return (
    <div>
      <RainDrop numberOfLetters={10} rainSpeed={200} />
    </div>
  );
}

export default App;
