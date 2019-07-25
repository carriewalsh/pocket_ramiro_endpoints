import React from 'react';
import UserViewCard from './UserViewCard';
import './stylesheets/UserViews.css'

const UserViews = ({userViews}) => {
  const userViewCards = userViews.map(userView => {
    return (
      <UserViewCard
        title={userView.title}
        img={userView.img}
      />
    )
  })

  return (
    <div className='user-views-container'>
      { userViewCards }
    </div>
  )
}

export default UserViews;
