import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Character from './components/Character';
import styled from 'styled-components';

const Header = styled.h1`
  color: black;
`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
    const [charData, setCharData] = useState([])
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

    useEffect(() => {
      axios.get('https://swapi.dev/api/people/')
          .then(res => {
            console.log(res)
            setCharData(res.data)
          })
          .catch(err => {
            console.log(err)
          })
    }, []);
 
 
 
 
 
  return (
    <div className="App">
      <Header className="Header">NERD Wars Characters</Header>
      {
        charData.map(item => {
          return <Character character={item} key={item.name}/>
        })
      }
    </div>
  );
}

export default App;
