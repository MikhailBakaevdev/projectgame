import React from 'react';
import './count.css';

function Score ({counter}) {
    return <span className="counter">
        Your score : { counter }
        </span>
}

export default Score
