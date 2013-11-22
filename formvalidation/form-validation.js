$(document).ready(function(){
	$("input:submit").click(function(){
		stop = true;
		$(this).closest(".form").find(".validate").each(function(){
			if($(this).val() == ""){
				$(this).addClass("required");
				stop = false;
			}else{
				$(this).removeClass("required");
			}
		})
		return stop;
	})
})