var progNum = Math.floor((Math.random() * 150) + 1);
console.log(progNum);
var num = 5;
var timer;
var a = 30;
obr();


function obr(){
  a--;
  document.getElementById('timer').innerHTML = a;
  if (a==0){
    alert('Время вышло');
  } else {
    timer = setTimeout(obr, 1000);
  }
}

document.getElementById('btn1').onclick = function(){
  var pass = prompt('Пароль', '');
  
  if (pass == 'begov'){
      var block = document.querySelector('.block');
    block.style.display = 'flex';
    setTimeout(function(){
      block.style.opacity = 1;
    },10)
  } else {
    alert('Вход запрещен!');
  }
}
document.getElementById('close').onclick = CloseFunc;

function CloseFunc(){
  var block = document.querySelector('.block');
  block.style.opacity = 0;
  setTimeout(function(){
    block.style.display = 'none';
  },400);
}

document.getElementById('btn').onclick = function(){
  var inp = document.getElementById('inp').value;
  var out = document.getElementById('out'); 
  if (a>0){
      if (num > 0){
        if(inp == progNum){
        out.innerHTML = 'вы угадали! Ваш промо-код - 4378F%$$%';
        setTimeout(prog, 1500);
        clearTimeout(timer);
      } else if (inp < progNum){
        out.innerHTML = 'число меньше чем нужно';
      } else {
        out.innerHTML = 'число больше чем нужно';
      }
    } else {
      alert('Попытки закончились!')
      num = 1;
    }
    num--;
    document.getElementById('num').innerHTML = num;
  } else {
    alert('Время вышло')
  }
  
}

document.getElementById('BtnNum').onclick = function(){
  alert(progNum);
}

document.getElementById('BtnAdmin').onclick = function(){
  
  var block = document.querySelector('.block');
  
  var inp1 = document.getElementById('inp1').value;
  var inp2 = document.getElementById('inp2').value;
  
  if(inp1 != '' && inp2 != ''){
    
    num = inp2;
    a = inp1;

    document.getElementById('num').innerHTML = num;
    document.getElementById('timer').innerHTML = a;
    
    CloseFunc();
    
  } else if (inp1 != ''){
    a = inp1;
    document.getElementById('timer').innerHTML = a;
    
    CloseFunc();
    
  } else if (inp2 != ''){
    num = inp2;
    document.getElementById('num').innerHTML = num;
    
    CloseFunc();
    
  } else {
    alert('Поля не заполнены');
  }
  
}

function prog(){
    var val = prompt('Введите полученый про-код', '4378F%$$%');
    if(val == '4378F%$$%'){
      alert('Поздравляем, ваш промо-код успешно активирован и действителен до 10.06.2019. Только этот про-код вам нахрен не пригодиться :D');
    }
}
