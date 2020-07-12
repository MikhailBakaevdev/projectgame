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
    function duplicateElements(array, times) {
        return array.reduce((res, current) => {
            return res.concat(Array(times).fill(current));
        }, [])
    }
    
let images = [<img src={firs} id="1" alt=""/>,
            <img src={second} id="2" alt=""/>,
            <img src={third} id="3" alt=""/>,
            <img src={four} id="4" alt=""/>,
            <img src={five} id="5" alt=""/>,
            <img src={six} id="6" alt=""/>,
            <img src={seven} id="7" alt=""/>,
            ];
            //переделать в state где 8 элементов

            [ { image : <img src={eight} alt=""/>, isOpen , isMatched , id : 8 }];




//useeffect с пустым массивом перенести в него  duplicate elements
            
            
    const [valueState,setValueState] = useState('closed');
    const [openProp,setOpenProp] = useState(false);

    function handleClick(i) {
        if (tiles.i  === isOpen ) {

        }
        return 
    };

     
    //загнать функцию в изначальный стейт 

    
        
   
    return (<div className="game-container">
        { tiles.map((tile,i) => (
            <Tile
                key={i}
                symbolId={tile.id}
                tileId={i}
                image={tile.image}
                isOpen={tile.isOpen}
                isMatched={tile.isMatched}
                handleClick={handleClick}
            />
        ))}
        </div>
         
    )
};


export default Board