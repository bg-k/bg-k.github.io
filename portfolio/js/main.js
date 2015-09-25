var bt = $("#about").offset().top;

$(window).scroll(function() {
	ds = $(this).scrollTop();

	if(bt <= ds+85){
		$(".head").addClass('header-background');
	} else if(bt > ds){
			$(".head").removeClass('header-background');
		}
});


$('.work-img').contenthover({
    overlay_background:'#000',
    overlay_opacity:0.6
});

$(function(){
    $('a[href^=#]').click(function(){
        var speed = 800;
        var href= $(this).attr("href");
        var target = $(href == "#" || href === "" ? 'html' : href);
        var position = target.offset().top - 100;
        $("html, body").animate({scrollTop:position}, speed);
        return false;
    });
});