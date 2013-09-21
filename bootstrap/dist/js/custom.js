$(document).ready(function(){
	/* MY AGE */
	$("#age").text(getAge(new Date(1991, 11, 30)));
	$("#triggerAbout").click(function(){
		$("#triggerContact").closest('li').removeClass('active');
		$("#about").show();
		$(this).closest('li').addClass('active');
		$("#contact").hide();
	})
	$("#triggerContact").click(function(){
		 $("#triggerAbout").closest('li').removeClass('active');
		 $("#about").hide();
		$(this).closest('li').addClass('active');
		$("#contact").show();
	})
})
function getAge(d1, d2){
    d2 = d2 || new Date();
    var diff = d2.getTime() - d1.getTime();
    return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
}