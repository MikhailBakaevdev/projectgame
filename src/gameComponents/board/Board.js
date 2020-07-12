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
    
let images = [<img src={firs} alt=""/>,
            <img src={second} alt=""/>,
            <img src={third} alt=""/>,
            <img src={four} alt=""/>,
            <img src={five} alt=""/>,
            <img src={six} alt=""/>,
            <img src={seven} alt=""/>,
            <img src={eight} alt=""/>];
            
            
            
    const [valueState,setValueState] = useState('closed');

    function handleClick(){
        setValueState('open');
    }
        
            
    return (<div className="game-container">
        { duplicateElements(images,2).map((image) => (
            <Tile
                key={image.id}
                id={image.id}
                image={image}
                valueState={valueState}
                handleClick={handleClick}
            />
        ))}
        
        </div>
    )
};
export default Board