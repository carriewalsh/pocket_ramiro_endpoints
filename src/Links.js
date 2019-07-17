import React from 'react';
import Card from './Card';
import './Links.css';

const Links = ({ links }) => {
  const linkCards = links.map(link => {
    return (
      <Card
        id={link.id}
        title={link.title}
        color={link.color}
        icon={link.icon}
        key={link.id}
        link={link.link}
      />
    )
  })

  return (
    <div className='links-container'>
      { linkCards }
    </div>
  )
}

export default Links;
