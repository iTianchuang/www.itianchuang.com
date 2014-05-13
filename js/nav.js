$(function(){
    $('a[href*=#]').click(function() {
		 clearClass();
		var curClass=$(this).attr("class");
		$(this).addClass(curClass+"_current");		
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        && location.hostname == this.hostname) {
            var $target = $(this.hash);		
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({scrollTop: targetOffset-100}, 1000);
                return false;
            }
        }
    });	
});
function clearClass(){
	$("a[href*=#contact]").removeClass().addClass("nav_04"); 
	$("a[href*=#recruit]").removeClass().addClass("nav_03"); 
	$("a[href*=#aboutus]").removeClass().addClass("nav_02"); 	
	$("a[href*=#home]").removeClass().addClass("nav_01"); 
}

$(function(){
	$("a[href*=#home]").addClass("nav_01_current");
	$("#postion_more").hide();
	$("#up_position").hide();
	})
function show_postion(){
	$("#postion_more").show();
	$("#down_position").hide();
	$("#up_position").show(); 
}
function  hide_postion(){
	$("#up_position").hide();
	$("#down_position").show();
	$("#postion_more").hide(); 
	}