
import { useState, useEffect } from 'react';
import grumpyImg from './assets/angry.png';
import okayImg from './assets/dog-normal-2.png';
import happyImg from './assets/excited.png';
import './App.css';
import './main.scss';

function App() {

  const [hunger, setHunger] = useState(0);
  const [mood,setMood] = useState('Happy');

  useEffect(() => {
    if (hunger >= 7) {
      setMood("Grumpy");
  }
  else if (hunger >= 4) {
    setMood("Okay");
  }
  else 
    setMood("Happy");
}, [hunger]);

useEffect(() => {
  const interval = setInterval(() => {
    setHunger(prev => Math.min(prev+1, 10))
  }, 5000);
  return () => clearInterval(interval);
}, []);

const feedPet = () => {
      setHunger(prev => Math.max(prev-1, 0));
};

const playWithPet = () => {
  setMood("Excited");
  setTimeout(() => {
    setMood(hunger < 4 ? "Happy" : "Okay");
  }, 2000);
};

const getPetImage = () => {
  if (hunger >= 7) {
    return grumpyImg;
  }
     
  else if (hunger >= 4){
    return okayImg;
  } 
  else  
    return happyImg;
};

  return (
    <div className='app-main m-1 p-1 rounded'>
        <div className='main-content'>
        <h1>Virtual Pet Game</h1>
        <img src={getPetImage()} alt="Pet Mood" style={{ width: 400 }} />
        <p>Mood: {mood}</p>
        <p>Hunger: {hunger}/10</p>
        </div>
        <div className='buttons d-flex'>
          <button onClick={feedPet}>feed</button>
          <button onClick={playWithPet}>Play</button>
        </div>
    </div>
  );
}

export default App;
