import {useState, useEffect} from 'react'
import React from 'react';
import axios from 'axios';

const ScreenView = ({pet}) => {
 // see what pet is first - it is a pet object



  const handleSubmit = () => {
    axios.post('/pet', {petName: 1})
      .catch((err) => {
        console.error(err, 'coming from dummyPet');
      });
  };


  return (
    <div style={{ border: '5px inset hotpink', height: '360px', margin: '5px', backgroundColor: 'lavender' }}>
      this is the screen - kitty goes here
        <input type='text'/>
        <button>Submit</button>
    </div>
  );
};

export default ScreenView;
