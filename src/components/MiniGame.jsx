import React, { Component } from 'react';

// const MiniGame = () => {
//   const btn = document.getElementById('btn');

//   const WhenTheyCry =[
//     '121', '232', "343", "454", "565", '676'
//   ];
//   btn.addEventListener('click')
<div>
    <script>
(function(){
    'use strict';
  
    const btn = document.getElementById('btn');

    const WhenTheyCry =[
      '121', '232', '343', '454', '565', '676'
    ];
  
    btn.addEventListener('click', function(){
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
    });
  })();

</script>
</div>

// }
export default MiniGame;