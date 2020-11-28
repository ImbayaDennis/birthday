$(document).ready(function(){
    $('.intro').click(() =>{
        $('.tale').delay(450).fadeToggle(300)
        $('.intro').slideToggle(300);
    });

    $('.tale').click(() =>{
        $('.intro').delay(450).fadeToggle(300)
        $('.tale').slideToggle(300);
    });
});