// Write your Character component here
import React from 'react'

const starWarsCharater = (props) => {
    const {starWar, starWarYears } = props;
    
    
    return (
        <div>
            {starWar && <ul>{starWar}</ul>}
            {starWar && <ul>{starWarYears }</ul>}
        </div>
    )
}

export default starWarsCharater;