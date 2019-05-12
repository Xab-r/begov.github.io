var menu = document.getElementById('menu');
var block = document.getElementById('close');
var open = document.getElementById('open');

document.getElementById('open').onclick = function(){
    block.style.transition = '2s';
    menu.style.transform = 'translateX(0%)';
    block.style.opacity = '1';
    open.style.opacity = '0';
}
document.getElementById('close').onclick = function(){
    this.style.transition = '0s';
    menu.style.transform = 'translateX(-200%) rotate(-180deg)';
    block.style.opacity = '0';
    open.style.opacity = '1';
}
