$(document).ready(function(){
    $('.intro').click(() =>{
        $('.tale').fadeToggle(300)
        $('.intro').fadeToggle(300);
    });

    $('.tale').click(() =>{
        $('.intro').fadeToggle(300)
        $('.tale').fadeToggle(300);
    });
});