$('.block').fadeOut(0);
$('.block-item').fadeOut(0);
function getRandomNumber(size){
  return Math.floor(Math.random() * size);
}
var width = 1100;
var height = 590;
var clicks = 25;

var target = {
  x: getRandomNumber(width),
  y: getRandomNumber(height)
}

function getDistence(event, target){
  var fx = event.offsetX - target.x;
  var fy = event.offsetY - target.y;
  
  return Math.sqrt((fx * fx) + (fy * fy));
}

function getStr(distence){
  if(distence < 10){
    
    $('.block').fadeIn(500);
    
  } else if(distence > 10 && distence < 50){
    return 'очень горячо';
  } else if(distence > 50 && distence < 100){
    return 'горячо';
  } else if (distence > 100 && distence < 150){
    return 'тепло';
  } else if(distence > 150 && distence < 250){
    return 'прохладно';
  } else if(distence > 250 && distence < 300){
    return 'холодно';
  } else if (distence > 300 && distence < 500){
    return 'очень холодно';
  }
}

$('.map').click(function(event){
  clicks--;
  $('#out').text(clicks);
  if(clicks > 0){
    var distence = getDistence(event, target);
    var str = getStr(distence);
  $('#help').text(str);
  } else {
    alert('Увы, вы проиграли');
    $('#out').text(0);
  }
});
$('#activ').click(function(){
  $('.block').fadeOut(500);
  $('.block-item').fadeIn(500);
});
$('#active1').click(function(){
  $('.block-item').fadeOut(500);
});