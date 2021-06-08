import React, { useState, Component } from 'react';
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
    <h2 id="MiniGame">MiniGame</h2>
      <div id = "btn">PUSH</div>
      <ul className="delete-marker">
        <li>1/7.7の確率で当たります</li>
          <li>脳汁を出したいときなど暇つぶしにどうぞ。</li>
      </ul>
    </div>
  </div>
);}

export default MiniGame;