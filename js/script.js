$(document).ready(function(){
	function onResize(){
		var win = $(window).width();
		if(win < 768){
			$(".effect19").each(function(idx, ele){
				console.log($(ele).addClass('center'));
			});
		}
		else{
			$(".effect19").each(function(idx, ele){
				console.log($(ele).removeClass('center'));
			});
		}
		
	}
$(window).resize(function(){
    onResize();
});
	onResize();
});