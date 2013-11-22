$(document).ready(function(){
    width = $("div").width();
    height = $("div").height();
    $("#sign-up").click(function(){
        $('#login-form').animate({'left':'-'+(width+2)+'px'})
        $('#signup-form').fadeIn('fast').animate({'right':'35%'},{duration: 'slow', queue: false})
    })
    $("#sign-in").click(function(){
        $('#signup-form').fadeOut('fast').animate({'right':'0%'},{duration: 'slow', queue: false})
        $('#login-form').fadeIn('fast').animate({'left':'35%'},{duration: 'slow', queue: false})
    })
})
