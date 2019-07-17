import React from 'react';
import './Card.css'

const Card = ({title,color,id,icon,link}) => {
  return (
    <a class="card-link" href={link}>
      <div className={'card ' + color}>
        <div class="icon-container">
        <img class="card-icon" src={icon} alt="authors icon"/>
        </div>
        <h2 class="card-title">{title}</h2>
      </div>
    </a>
  )
}

export default Card;
