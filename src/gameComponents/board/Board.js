import React from 'react';
import './board.css';
import Tile from '../tile/Tile';

function Board () {
    return <div className="game-container">
                {tiles.map((tile) => (
                <Tile 
                    key={tile.id}    
                    id={tile.id}
                    type={tile.type}
                    flipped={isOpen.includes(tile.id)}
                    handleClick={handleClick}
                    disabled={disabled || solved.includes(tile.id)}
                    {...tile}
                />
            ))}
        </div>
}

export default Board