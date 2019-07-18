import React from 'react';
import Card from './Card';
import './stylesheets/Authors.css'

const Authors = ({ authors }) => {
  const authorCards = authors.map(author => {
    return (
      <Card
        id={author.id}
        title_1={author.title_1}
        title_2={author.title_2}
        color={author.color}
        icon={author.icon}
        key={author.id}
        link={author.link}
      />
    )
  })

  return (
    <div className='links-container'>
      { authorCards }
    </div>
  )
}

export default Authors;
