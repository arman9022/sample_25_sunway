let a = document.getElementById('first');
let b = document.getElementById('hover_effect');
document.getElementById('first').addEventListener('mouseover',function(){
   b.style.display = 'block';
})
document.getElementById('first').addEventListener('mouseleave',function(){
   b.style.display = 'none';
})

let c = document.getElementById('first2');
let d = document.getElementById('hover_effect2');
document.getElementById('first2').addEventListener('mouseover',function(){
   d.style.display = 'block';
})
document.getElementById('first2').addEventListener('mouseleave',function(){
   d.style.display = 'none';
})