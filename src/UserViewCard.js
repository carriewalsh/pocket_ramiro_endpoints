import React from 'react';
import { Link } from 'react-router-dom'
import './stylesheets/UserViewCard.css'


const UserViewCard = ({title,color,img}) => {
  return (
    <div className={'user-view-card ' + 'salmon-view'}>
      <h2 className="view-header">{ title }</h2>
      <img src={ img } />
    </div>
  )
}

export default UserViewCard;
