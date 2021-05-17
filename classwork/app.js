import { calRadius, calArea } from './calculator.js';
import { validation } from './validation.js';
// import { outputElement } from './display.js';

const radiusBtn=document.getElementById('calRadius');
radiusBtn.addEventListener('click',calculateRadius) ;

document.getElementById('calArea').onclick=calculateArea;


function calculateRadius() {
  let radius = document.getElementById('value').value;
   radius = validation(radius);
  if (typeof radius === 'string') {
    
    document.getElementById('outputRadius').innerHTML = radius; 
  } else {
    let c = calRadius(radius)
    document.getElementById('outputRadius').innerHTML = c;
  }
  
}

function calculateArea() {
  let radius = document.getElementById('area').value;
  radius = validation(radius);
  if (typeof radius === 'string') {
    document.getElementById('outputArea').innerHTML = radius;
  } else {
    let c = calArea(radius);
    document.getElementById('outputArea').innerHTML = c;
  }
}



