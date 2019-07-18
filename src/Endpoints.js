import React from 'react';
import Card from './Card';
import './stylesheets/Endpoints.css';

const Endpoints = ({ endpoints }) => {
  const endpointCards = endpoints.map(endpoint => {
    return (
      <Card
        id={endpoint.id}
        route={endpoint.route}
        request={endpoint.request}
        response={endpoint.response}
        color={endpoint.color}
        key={endpoint.id}
      />
    )
  })
  return (
    <div className='links-container'>
      { endpointCards }
    </div>
  )
}

export default Endpoints;
