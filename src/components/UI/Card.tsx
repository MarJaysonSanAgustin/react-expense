import React from 'react';
import './Card.css';

export declare interface CardProps {
  children: React.ReactNode;
}

const Card = ({ children }: CardProps) => {
  return (
    <div className='card'>
      {children}
    </div>
  )
}

export default Card;
