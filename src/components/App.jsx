import React, { Component } from 'react';
import Form from './Phonebook/Form/Form';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Form />
    </div>
  );
};
