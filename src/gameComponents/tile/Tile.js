import React from 'react';
import './tile.css';

function Tile ({image, valueState, matchProp, openProp, key, id , handleClick}) {
    
    return <div  className={`game-container__elem ${valueState}`} key={key} isMatched={matchProp} isOpen={openProp} onClick={() => handleClick(id)}>
               {image}
            </div>

};


export default Tile