import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Character from './components/Character';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
    const [charData, setCharData] = useState([])
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

    useEffect(() => {
      axios.get('https://swapi.dev/people/')
          .then(res => {
            setCharData(res.data.results)
          })
          .catch(err => {
            console.log(err)
          })
    }, []);
 
 
 
 
 
  return (
    <div className="App">
      <h1 className="Header">NERD Wars Characters</h1>
      {
        charData.map(char => {
          return <Character key={char.id} character={char} />
        })
      }
    </div>
  );
}

export default App;
