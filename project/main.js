var num = Math.floor((Math.random() * 150) + 1);
console.log(num);
document.getElementById('btn').onclick = function(){
  var inp = document.getElementById('inp').value;
  var out = document.getElementById('out');
  
  function prog(){
    var val = prompt('Введите полученый про-код', '4378F%$$%');
    if(val == '4378F%$$%'){
      alert('Поздравляем, ваш промо-код успешно активирован и действителен до 10.06.2019. Только этот про-код вам нахрен не пригодиться :D');
    }
  }
  
  if(inp == 120){
    out.innerHTML = 'вы угадали! Ваш промо-код - 4378F%$$%';
    setTimeout(prog, 1500);
  } else if (inp < 120){
    out.innerHTML = 'число меньше чем нужно';
  } else {
    out.innerHTML = 'число больше чем нужно';
  }
}