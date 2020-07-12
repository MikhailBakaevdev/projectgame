import React from 'react';
import './tile.css';

function Tile ({image,  isMatched, isOpen,  symbolId , handleClick}) {
    const tileStateClass = isMatched 
            ? 'hide' 
            : isOpen 
            ? 'open' 
            : 'closed';
    return <div  className={`game-container__elem ${tileStateClass}`} 
                    onClick={() => handleClick(symbolId)}>
               {image}
            </div>

};


export default Tile