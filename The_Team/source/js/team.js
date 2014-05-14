$(document).ready(function () {
	$("div.makeMeScrollable").smoothDivScroll({
		hotSpotMouseDownSpeedBooster: 1,
		touchScrolling: true,
	});

	$('.tt-img').hover(function(){
		$(this).closest('.tt-author').find('.img-mask,.desc').fadeIn('300')
	},function(){
		$(this).closest('.tt-author').find('.img-mask,.desc').fadeOut('300')
	})
});