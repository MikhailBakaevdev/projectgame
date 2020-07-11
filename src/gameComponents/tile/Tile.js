import React from 'react';
import './tile.css';

function Example ({ handleClick, id, type, isOpen, disabled }) {
    
    return <div  className={`'game-container__elem-closed' ${isOpen ? 'game-container__elem-open' : ''}`} alt={type}>
            </div>

};


export default Example