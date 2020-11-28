$(document).ready(function(){
    $('.intro').click(() =>{
        $('.tale').delay(450).fadeToggle(300)
        $('.intro').fadeToggle(300);
    });

    $('.tale').click(() =>{
        $('.intro').delay(450).fadeToggle(300)
        $('.tale').fadeToggle(300);
    });
});