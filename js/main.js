//AOS Inicialização

AOS.init();

$(document).scroll(function(){
	$('.navbar').toggleClass('scrolled', $(this).scrollTop() > $('.navbar').heigth());
})