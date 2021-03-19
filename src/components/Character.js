// Write your Character component here
import React from 'react'

const starWarsCharater = (props) => {
    const { starWarsName, starWarsYears } = props;
    
    console.log(starWarsName);
    console.log(starWarsYears)
    return (
        <div>
        {starWarsName && <ul>{starWarsName}</ul>} 
        {starWarsName && <ul>{starWarsYears}</ul>}
        </div>  
    )
}

export default starWarsCharater;
