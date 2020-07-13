import React , { useState } from 'react';
import './board.css';
import Tile from '../tile/Tile';
import firs from '../images/icon1.svg';
import second from '../images/icon2.svg';
import third from '../images/icon3.svg';
import four from '../images/icon4.svg';
import five from '../images/icon5.svg';
import six from '../images/icon6.svg';
import seven from '../images/icon7.svg';
import eight from '../images/icon8.svg';


function Board () {

 const [tiles,setTiles]= useState([
        { image : <img src={firs}  alt=""/>, isOpened: false, isMatched: false , id : 1 },
        { image : <img src={firs}  alt=""/>, isOpened: false, isMatched: false  , id : 1 },
        { image : <img src={second} id="2" alt=""/>, isOpened: false, isMatched: false , id : 2 },
        { image : <img src={second} id="2" alt=""/>, isOpened: false, isMatched: false , id : 2 },
        { image : <img src={third} id="3" alt=""/> , isOpened: false, isMatched: false  , id : 3 },
        { image : <img src={third} id="3" alt=""/>, isOpened: false, isMatched: false , id : 3 },
        { image : <img src={four} id="4" alt=""/>, isOpened: false, isMatched: false , id : 4 },
        { image : <img src={four} id="4" alt=""/>, isOpened: false, isMatched: false , id : 4 },
        { image : <img src={five} id="5" alt=""/>, isOpened: false, isMatched: false , id : 5 },
        { image : <img src={five} id="5" alt=""/>, isOpened: false, isMatched: false , id : 5 },
        { image : <img src={six} id="6" alt=""/>, isOpened: false, isMatched: false , id : 6 },
        { image : <img src={six} id="6" alt=""/>, isOpened: false, isMatched: false , id : 6 },
        { image :  <img src={seven} id="7" alt=""/>, isOpened: false, isMatched: false , id : 7 },
        { image :  <img src={seven} id="7" alt=""/>, isOpened: false, isMatched: false , id : 7 },
        { image : <img src={eight} alt=""/>, isOpened: false , isMatched: false , id : 8 },
        { image : <img src={eight} alt=""/>, isOpened: false , isMatched: false , id : 8 }
    ]
    
 )
    
    function handleClick(i) {
        if (tiles[i].isOpened === false) {
            setTiles(tiles.isOpened === true)
        }

        if (tiles[i].isOpened === true  && tiles[i].id === true) {
            setTiles(tiles[i].isMatched === true)
        }
    }

  

   
    return <div className="game-container">
        { tiles.map((tile,i) => (
            <Tile
                key={i}
                symbolId={tile.id}
                image={tile.image}
                isOpened={tile.isOpened}
                isMatched={tile.isMatched}
                handleClick={handleClick}
            />
        ))}
        </div>
};


export default Board