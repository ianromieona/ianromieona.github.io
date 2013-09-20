$(document).ready(function(){
	/* MY AGE */
	$("#age").text(getAge(new Date(1991, 11, 30)));
	$("#triggerAbout").click(function(){
		$("#about").show();
		$("#contact").hide();
	})
	$("#triggerContact").click(function(){
		$("#contact").show();
		$("#about").hide();
	})
})
function getAge(d1, d2){
    d2 = d2 || new Date();
    var diff = d2.getTime() - d1.getTime();
    return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
}