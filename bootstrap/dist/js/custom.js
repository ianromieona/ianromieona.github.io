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

NProgress.start();
setTimeout(function() { NProgress.done(); $('.fade').removeClass('out'); }, 1000);

$("#b-0").click(function() { NProgress.start(); });
$("#b-40").click(function() { NProgress.set(0.4); });
$("#b-inc").click(function() { NProgress.inc(); });
$("#b-100").click(function() { NProgress.done(); });