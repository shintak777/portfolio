import React, { useState, Component } from 'react';
import '../assets/css/MiniGame.css';

const MiniGame = () => {
  const Btn = document.getElementById('Btn');
  const Bonus =[
    '111', '222', '333', '444', '555', '666', '777'
  ];
  const WhenTheyCry =[
    '121', '232', '343', '454', '565', '676'
  ];

  Btn?.addEventListener('click', () => {
    const n = Math.random();
    if(n < 0.12987012987012986) {
      Btn.textContent = Bonus[Math.floor(Math.random()*7)];
    }else{
      Btn.textContent = WhenTheyCry[Math.floor(Math.random()*6)];
    }

  });

 return (
  <div>
    <div>
    <h2 id="MiniGame">MiniGame</h2>
      <div id = "Btn">PUSH</div>
      <ul className="DeleteMarker">
          <li>1/7.7の確率で数字が揃って当たります</li>
          <li>脳汁を出したいときなど暇つぶしにどうぞ。</li>
      </ul>
    </div>
  </div>
);}

export default MiniGame;