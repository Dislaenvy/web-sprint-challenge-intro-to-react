import axios from 'axios';
import React, {useEffect, useState} from 'react';
import './App.css';
import Character from './components/Character';
import Styled from './components/Styled'
  const App = () => {
  
  const [starWars, setStarWars] = useState([]);
  
  useEffect(() => {
      axios.get('https://swapi.dev/api/people/?page=1')
        .then((res) => {
        setStarWars(res.data)
        console.log(res.data)
      })
        .catch(err => {
        console.log(err)
      })
  }, [starWars]);
  
  
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch charac.ters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <p>{starWars.name}  {starWars.age}</p>
            {starWars.map((star) => {
  return (
    <> 
              <Styled />
              <Character
                key={star.name}
                starWarsName = {star.name}
                starWarsYears = {star.birth_year}
              />
    </>
  )}
)}
  </div>
  );
}

export default App;
