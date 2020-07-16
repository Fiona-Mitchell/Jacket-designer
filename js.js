function call1(){
const children = document.getElementById('jacket').children;
for(let i = 0; i < children.length; i++ ){
  children[i].setAttribute('fill',getRandomColor());
}
}
