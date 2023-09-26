import React from 'react';

const Hello = ({ who, age }) => {
  return (
    <div>
      Hello, {who}! {age ? `Tuổi ${age}` : ''}
    </div>
  );
};

export default Hello;
