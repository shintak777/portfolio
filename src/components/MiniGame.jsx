import React, { Component } from 'react';
import '../assets/css/MiniGame.css';
import '../assets/js/MiniGame';

const MiniGame = () => {
return (
<div>
  <div>
  <h2 id="MiniGame">MiniGame</h2>
    <div id = "btn">PUSH</div>
    <ul className="delete-marker">
       <li>1/7.7の確率で当たってお祝います。</li>
        <li>脳汁を出したいときなど暇つぶしにどうぞ。</li>
    </ul>
  </div>
</div>
);}
export default MiniGame;