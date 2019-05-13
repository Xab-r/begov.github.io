var menu = document.getElementById('menu');
var openP = document.getElementById('open');
var closeP = document.getElementById('close');

openP.onclick = function(){
    menu.style.transform = 'translate(0%)';
    this.style.opacity = '0';
    closeP.style.opacity = '1';
}
closeP.onclick = function(){
    menu.style.transform = 'translate(-100%)';
    openP.style.opacity = '1';
    closeP.style.opacity = '0';
}