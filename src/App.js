import React, { useState, useEffect} from 'react';
import axios from 'axios'
import Styled from './components/Styled'
import Character from './components/Character'

import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [starWar, setStarWar] = useState([]);
  
  useEffect(() => {
  axios.get('https://swapi.dev/api/people/?page=1')
  .then(res => {
    setStarWar(res.data)
    console.log(res.data)
  })
  .catch(err => {
    console.log(err)
  })
  }, [starWar])

  //console.log('star', starWar.name)
  return (
      
    <div className="App">
      
      <Styled>
      <h1 className="Header">Characters</h1>
      <ul>{starWar.name} {starWar.age} </ul>
      
      </Styled>
      {starWar.map((star) => {
        
        return (
          <>
          
          <Character
          key={starWar.name}
          starWar = {star.name}
          starWarYears = {star.birth_year}
          />
          </>
        )
      })}
    </div> 
  );
}

export default App;
