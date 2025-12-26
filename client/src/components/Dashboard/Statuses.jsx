import { useEffect, useState } from "react";
import React from 'react';
import axios from "axios";


const Status = () => {
  const [status, setStatus] = useState({
    mood: 0,
    love: 0,
    health: 0
  });

  useEffect(() => {
    // send the get request here
    axios.get('/pet')
      .then(({ data: { mood, love, health, hunger }}) => {
        // so we should have one document following the session
        setStatus({ mood, love, health, hunger });
      })
      .catch((err) => {
        console.error(err);
      });
  });


  const { mood, love, health, hunger } = status;
  // html
  return (
    <div>
      <span> Mood: {mood} </span> |
      <span> Love: {love} </span> |
      <span> Hunger: {hunger} </span> |
      <span> Health: {health} </span>
    </div>
  );
};

export default Status;