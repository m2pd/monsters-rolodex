import React from 'react';
import CardItem from '../card-item'
import './cardList.css'


function CardList(props) {

    const { monsters } = props;

    return (
        <div className="card-list">
           {monsters.map( monster => (
                <CardItem 
                    className="monster" 
                    key={monster.id} 
                    monster = {monster} 
                /> 
             ))}      
        </div>  
)}


export default CardList;