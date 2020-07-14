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
        { image : <img src={second}  alt=""/>, isOpened: false, isMatched: false , id : 2 },
        { image : <img src={second}  alt=""/>, isOpened: false, isMatched: false , id : 2 },
        { image : <img src={third}  alt=""/> , isOpened: false, isMatched: false  , id : 3 },
        { image : <img src={third}  alt=""/>, isOpened: false, isMatched: false , id : 3 },
        { image : <img src={four}  alt=""/>, isOpened: false, isMatched: false , id : 4 },
        { image : <img src={four}  alt=""/>, isOpened: false, isMatched: false , id : 4 },
        { image : <img src={five}  alt=""/>, isOpened: false, isMatched: false , id : 5 },
        { image : <img src={five}  alt=""/>, isOpened: false, isMatched: false , id : 5 },
        { image : <img src={six}  alt=""/>, isOpened: false, isMatched: false , id : 6 },
        { image : <img src={six}  alt=""/>, isOpened: false, isMatched: false , id : 6 },
        { image :  <img src={seven}  alt=""/>, isOpened: false, isMatched: false , id : 7 },
        { image :  <img src={seven}  alt=""/>, isOpened: false, isMatched: false , id : 7 },
        { image : <img src={eight} alt=""/>, isOpened: false , isMatched: false , id : 8 },
        { image : <img src={eight} alt=""/>, isOpened: false , isMatched: false , id : 8 },
    ]
    
 )
    
    function handleClick(i) {
        if (tiles[i].isOpened || tiles[i].isMatched) {
            return
        }

        if (!tiles[i].isOpened) {
            const newTiles = tiles.map(tile => Object.assign({}, tile)); 
            newTiles[i].isOpened = true;
            const openedIndex =  tiles.findIndex( el => el.isOpened === true)
            console.log(openedIndex,tiles)
            if (openedIndex !== -1) {
                if( tiles[openedIndex].id === newTiles[i].id) {
                    newTiles[openedIndex].isMatched = true
                    newTiles[i].isMatched = true
                }
                newTiles[openedIndex].isOpened = false
                newTiles[i].isOpened = false
            }
            setTiles(newTiles)
            //set tiles
            //filter
        }
            
            
            
      }
            
            
            
        
    


  

   
    return <div className="game-container">
        { tiles.map((tile,i) => (
            <Tile
                key={i}
                index={i}
                image={tile.image}
                isOpened={tile.isOpened}
                isMatched={tile.isMatched}
                handleClick={handleClick}
            />
        ))}
        </div>
};


export default Board