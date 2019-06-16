
var header =  new  Headhesive ( ' .heading ' );

$('.slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1560,
        settings: {
          slidesToShow: 3,
          prevArrow: '<button type="button" class="arrow prev"><span class="icon-arrow-left"></span></button>',
          nextArrow: '<button type="button" class="arrow next"><span class="icon-arrow-right"></span></button>',
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 1229,
        settings: {
          slidesToShow: 2,
          prevArrow: '<button type="button" class="arrow prev"><span class="icon-arrow-left"></button>',
          nextArrow: '<button type="button" class="arrow next"><span class="icon-arrow-right"></span></button>',
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 829,
        settings: {
          slidesToShow: 1,
          prevArrow: '<button type="button" class="arrow prev"><span class="icon-arrow-left"></button>',
          nextArrow: '<button type="button" class="arrow next"><span class="icon-arrow-right"></span></button>',
          slidesToScroll: 1
        }
      }
    ]
  });
var BlockMenu = document.getElementById('block-menu');
var block = document.getElementsByClassName('bars');
for(var i=0; i< block.length; i++){
  block[i].onclick = OpenMenu;
}
function OpenMenu(){
  BlockMenu.style.transform = 'translateX(0%)';
}
document.getElementById('close').onclick = function(){
  BlockMenu.style.transform = 'translateX(-200%)';
}

$('.btn-light').on("click", function() {
  $('html, body').animate({scrollTop: $(".title-features").offset().top}, 1000);
});

$('.btn-1').on("click", function() {
  $('html, body').animate({scrollTop: $(".block1").offset().top}, 1000);
});

$('.btn-2').on("click", function() {
  $('html, body').animate({scrollTop: $(".block2").offset().top}, 1000);
});

$('.btn-3').on("click", function() {
  $('html, body').animate({scrollTop: $(".block3").offset().top}, 1000);
});

$('.btn-4').on("click", function() {
  $('html, body').animate({scrollTop: $(".block4").offset().top}, 1000);
});
$('.about-us').fadeOut(0);
$('#aboutUs').on('click', function(){
  $('.about-us').fadeIn(1000);
});
$('.icon-times-circle').on('click', function(){
  $('.about-us').fadeOut(500);
});

      