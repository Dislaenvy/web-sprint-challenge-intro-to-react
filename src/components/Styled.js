import React from 'react'
import styled from 'styled-components'
import '../App'





const Estilo = styled.div`
color: ${pr => pr.theme.color1};

button {
    color:lime;
    display: flex;
    justify-content: space-between;
}
`
const mainTheme = {
    main: "mediumseagreen"
};
console.log(mainTheme)

    
export default function Character({ info, action}) {
    return (
        <Estilo>
            {/* {info.birth_years} */}
            
        </Estilo> 
    )
    
}
console.log(Character);