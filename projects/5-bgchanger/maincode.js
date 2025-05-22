const randomcolor = function(){
  const hex = "0123456789ABCDEF"
  let color = '#'
  for(let i = 0; i < 6; i++){
    color += hex[Math.floor(Math.random()*16)]
  }
  return color;
}
let interval;
const startChangingColor = function(){
  if(!interval){
  interval = setInterval(changeBGcolor, 500);
  }
  function changeBGcolor(){
    document.body.style.backgroundColor = randomcolor();
  }
}

const stopChangingColor = function(){
  clearInterval(interval);
  interval = null;
}
document.querySelector('#start').addEventListener('click', startChangingColor)

document.querySelector('#stop').addEventListener('click', stopChangingColor)

