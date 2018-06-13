import React from 'react';

const person = (props) => {
    return(
        <div>
        <h1>Books are the best thing to ever be invented  by mankind.</h1>
        <p> {props.name} {props.author} </p>
        </div>
    )
}

export default person;
