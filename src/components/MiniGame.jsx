import React, { useState } from 'react';
import { render } from 'react-dom';
import '../assets/css/MiniGame.css';

const MiniGame = () => {

  const [始, setText] = React.useState('始');
  const Bonus = [
    '111', '222', '333', '444', '555', '666', '777'
  ];
  const WhenTheyCry = [
    '121', '232', '343', '454', '565', '676'
  ];

  const onClick = () => {
    const point = Math.random();
    if (point < 0.011441647597254004) {
      setText(Bonus[Math.floor(Math.random()*Bonus.length)]);
    }
    else {
      setText(WhenTheyCry[Math.floor(Math.random()*WhenTheyCry.length)]);
    }
  }

 return (
  <div>
    <div>
    <h1>Mini遊技</h1>
      <div id= "btn" onClick={onClick}>{始}</div>
      <ul className="DeleteMarker">
          <h3>1/87.4の確率で数字が揃って当たります</h3>
          <h3>脳汁を出したい時や右打ち前の運試しにどうぞ。</h3>
      </ul>
    </div>
  </div>
);}

export default MiniGame;