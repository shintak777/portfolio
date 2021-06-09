import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import '../assets/css/MiniGame.css';

const MiniGame = () => {

  const btn = document.getElementById("btn");
  const Bonus =[
    '111', '222', '333', '444', '555', '666', '777'
  ];
  const WhenTheyCry =[
    '121', '232', '343', '454', '565', '676'
  ];

  btn?.addEventListener("click", () => {
    const n = Math.random();
    if(n < 0.12987012987012986){
      btn.textContent = Bonus[Math.floor(Math.random()*7)];
    }else{
      btn.textContent = WhenTheyCry[Math.floor(Math.random()*6)];
    }

  });

 return (
  <div>
    <div>
    <h1>MiniGame</h1>
      <div id= "btn">PUSH</div>
      <ul className="DeleteMarker">
          <li>1/7.7の確率で数字が揃って当たります</li>
          <li>脳汁を出したいときなど暇つぶしにどうぞ。</li>
      </ul>
    </div>
  </div>
);}

export default MiniGame;