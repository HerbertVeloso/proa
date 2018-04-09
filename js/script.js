// Navegação da página
$('.navbar__link').click(function(event){
    event.preventDefault();
    var id = $(this).attr('href'),
        targetOffset = $(id).offset().top;
    $('html, body').animate({
        scrollTop: targetOffset
    }, 500);
});