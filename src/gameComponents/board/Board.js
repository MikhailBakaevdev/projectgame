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
            <img src={eight}  id="8" alt=""/>];
            
            
            
    const [valueState,setValueState] = useState('closed');
    const [openProp,setOpenProp] = useState(false);

    function handleClick(){
        if (valueState === 'closed'){
            setValueState('open')
        } else {                            //switch tiles
            setValueState('closed')
        }

        if (valueState === 'closed') {
            setOpenProp(false)
        }else{
            setOpenProp(true)
        }
        
    }



    
        
   
    return (<div className="game-container">
        { duplicateElements(images,2).map((image) => (
            <Tile
                key={image.id}
                image={image}
                valueState={valueState}
                openProp={openProp}
                handleClick={handleClick}
            />
            
        ))}
        </div>
         
    )
};


export default Board