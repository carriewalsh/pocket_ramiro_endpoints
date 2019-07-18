import React from 'react';
import { Link } from 'react-router-dom'
import './Card.css'

const Card = ({title_1,title_2,color,id,icon,link}) => {
  return (
    <Link to={link}>
      <div className={'card ' + color}>
      <div class="icon-container">
      <img class="card-icon" src={icon} alt="authors icon"/>
      </div>
      <div class="title-container">
      <h2 class="card-title">{title_1}</h2>
      <h2 class="card-title">{title_2}</h2>
      </div>
      </div>
    </Link>
  )
}

export default Card;
