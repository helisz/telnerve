$(document).foundation();

$(document ).ready(function() {
	var ua = window.navigator.userAgent;
	var msie = ua.indexOf("MSIE ");

	if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))
	{
		$('video').remove();
	}
	$(window).scroll(function() {
		if($(window).scrollTop() > 30) {
			$('header').addClass('scrolled');
		}else{
			$('header').removeClass('scrolled');
		}
	});

	function vh100(){
		var win_h = $(window).height();
		$('.slider, .carousel').height(win_h);
	}
	vh100();
	$( window ).resize(function() {
		vh100();
	});

	$('video').addClass('load');

	$('#carousel').slick({
		arrows: false,
		fade: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 1000,
		autoplay: true,
		autoplaySpeed: 5000,
	});

	$('.admin').find('a').click(function( event ) {
		event.preventDefault();
	});

	$('.nav-link').click(function(){
		event.preventDefault();
		if($(this).hasClass("active")){
			$('#top-nav-menu').slideUp();
			$(this).removeClass("active");
		}else{
			$('#top-nav-menu').slideUp();
			$('.nav-link').removeClass("active");
			$('#top-nav-menu').slideDown();
			$(this).addClass("active");
		}
	});

	$('#explore').click(function(){
		$("html,body").animate({
			scrollTop:$(".admin").offset().top - 50
		},500);
	});

	$('.right-off-canvas-toggle').click(function(){
		$("html,body").animate({
			scrollTop: 0
		},500);
	});

	$(document).mouseup(function (e)
	{
		var container = $('.nav-link');
		if (!container.is(e.target) // if the target of the click isn't the container...
			&& container.has(e.target).length === 0) // ... nor a descendant of the container
		{
			$('#top-nav-menu').slideUp();
			$('.nav-link').removeClass("active");
		}
	});

	$('#to-admin-2').click(function(){
		$('#admin-1').slideUp(400);
		$('#admin-2').slideDown(400);
	});

	$('#to-admin-4').click(function(){
		$('#admin-2').slideUp(400);
		$('#admin-3').slideDown(400, function(){
			$('#admin-3').delay(2500).slideUp(400);
			$('#admin-4').delay(2500).slideDown(400);
		});
	});

	$('#nav-login, #nav-login-side').click(function(){
		$("html,body").animate({
			scrollTop:$(".admin").offset().top - 50
		},500,function(){
			$('#admin-1, #admin-3, #admin-4').slideUp();
			$('#admin-2').slideDown();
		});
		$('.off-canvas-wrap').removeClass('move-left');


	});
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (xhttp.readyState == 4 && xhttp.status == 200) {
			document.getElementById("ajax-html").innerHTML = xhttp.responseText;
		}
	};
	xhttp.open("GET", "content.html", true);
	xhttp.send();

	$('.square-box.link').click(function(){
		var img_url = $(this).find('img').attr('src');
		var company_name = $(this).attr('data-company');
		$('#company-logo').attr('src', img_url);
		$('#company-news').html(company_name);

		$('#company-info').fadeIn(300);
	});

	// Store no found notification 
	$('#company-info').find('.close').click(function ()
	{	
		event.preventDefault();
		$('#company-info').fadeOut();
	});

	$(document).mouseup(function (e)
	{
		var container = $('#company-info');
		if (!container.is(e.target) // if the target of the click isn't the container...
			&& container.has(e.target).length === 0) // ... nor a descendant of the container
		{
			container.fadeOut(300);
		}
	});
});