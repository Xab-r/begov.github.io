document.body.onload = function(){
    setTimeout(function(){
        var preloader = document.getElementById('proloader');
        if (!preloader.classList.contains('hidd')){
            preloader.classList.add('hidd');
        }
    },1000);
}