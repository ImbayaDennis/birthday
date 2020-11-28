$(document).ready(function(){
    $('.intro').click(() =>{
        $('.tale').fadeToggle(300)
        $('.intro').slideToggle(300);
    });

    $('.tale').click(() =>{
        $('.intro').fadeToggle(300)
        $('.tale').slideToggle(300);
    });
});