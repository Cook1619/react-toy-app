import React from 'react'

const Counter = (props) => {
    const handleClick = () => props.onClickFunction(props.increment)
    return (
        <div>
            <button onClick={handleClick}>+{props.increment}</button>
        </div>
    );
}

export default Counter;
