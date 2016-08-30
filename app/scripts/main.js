// ширина для skillbar относительно контента skillbar__percent
$('.skillbar').each(function(i, elem) {
    $(elem).children(".skillbar__line").width($(elem).children(".skillbar__percent").html());
});




//  в мобильной версии по нажатию на header открываем выпадающее меню
$('.nav__header').click(function() {
    $('.nav__header').toggleClass('nav__header--open');
});