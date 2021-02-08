// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const Character = (props) => {
    return(
        <charStyle>
            <div className="charCards">
                <h2>Name: {props.character.name}</h2>
            </div>
        </charStyle>
    )
}

export default Character;