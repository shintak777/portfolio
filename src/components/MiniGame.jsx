import React, { useState, Component } from 'react';
import '../assets/css/MiniGame.css';

const MiniGame = () => {
  const btn = document.getElementById('btn');

  const WhenTheyCry =[
    '121', '232', '343', '454', '565', '676'
  ];

  btn?.addEventListener('click', function(){
    const n = Math.random()
    if(n < 
      0.12987012987012986){
      this.textContent = '惨劇回避';
    }else{
      this.textContent = WhenTheyCry[Math.floor(Math.random()*6)];
    }

  });
  btn.addEventListener('mousedown', function(){
    this.className = 'pushed';
  });
  btn.addEventListener('mouseup', function(){
    this.className = '';
  })();

return (
  <div>
    <div>
    <h2 id="MiniGame">MiniGame</h2>
      <div id = "btn">PUSH</div>
      <ul className="delete-marker">
        <li>1/7.7の確率で当たります"</li>
          <li>脳汁を出したいときなど暇つぶしにどうぞ。</li>
      </ul>
    </div>
  </div>
);}

export default MiniGame;