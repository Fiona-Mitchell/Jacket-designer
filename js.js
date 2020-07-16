function call1(){
const children = document.getElementById('jacket').children;
for(let i = 0; i < children.length; i++ ){
  children[i].setAttribute('fill',getRandomColor());
}
}

function getRandomColor() {
var letters = '0123456789ABCDEF';
var color = '#';
for (var i = 0; i < 6; i++) {
  color += letters[Math.floor(Math.random() * 16)];
}
return color;
}
