import React from 'react';
import { Link } from 'react-router-dom'
import './Card.css'

const Card = ({title_1,title_2,color,id,icon,link,route,request,response}) => {
  if (route) {
    return (
      <div className={'card ' + color + ' endpoint-card'}>
        <div class="endpoint-title-container">
          <h2 class="endpoint-title">{route}</h2>
          <h2 class="card-title">Request:</h2>
          <pre>
            <code>
              {request}
            </code>
          </pre>
          <h2 class="card-title">Response:</h2>
          <pre>
            <code>
              {response}
            </code>
          </pre>
        </div>
      </div>
    )
  }
  else {
    return (
      <a class="card-link" href={link}>
        <div className={'card ' + color}>
          <div class="icon-container">
            <img class="card-icon" src={icon} alt="authors icon"/>
          </div>
          <div class="title-container">
            <h2 class="card-title">{title_1}</h2>
            <h2 class="card-title">{title_2}</h2>
          </div>
        </div>
      </a>
    )
  }
}

export default Card;
