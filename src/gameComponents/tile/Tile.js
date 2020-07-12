import React from 'react';
import './tile.css';

function Tile ({image, valueState, matchProp, openProp, id , handleClick}) {
    
    return <div  className={`game-container__elem ${valueState}`} id={id} isMatched={matchProp} isOpen={openProp} onClick={(id) => handleClick(id)}>
               {image}
            </div>

};


export default Tile