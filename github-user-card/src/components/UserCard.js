import React from 'react';

const UserCard = props => {
  return (
    <div className='card'>
      <h2>{props.name}</h2>
      <p>Login: {props.login}</p>
      <p>Bio: {props.bio}</p>
    </div>
  );
};

export default UserCard;
