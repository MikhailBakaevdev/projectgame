import React from 'react';
import './tile.css';

function Tile ({image,  isMatched, isOpened, handleClick, index }) {
    const tileStateClass = isMatched 
            ? 'hide' 
            : isOpened 
            ? 'open' 
            : 'closed';
    return <div  className={`game-container__elem ${tileStateClass}`} 
                    onClick={() => handleClick( index )}>
               {image}
            </div>

};


export default Tile