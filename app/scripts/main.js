// 
$('.skillbar').each(function(i, elem) {
    elem.childNodes[1].style.width = elem.childNodes[3].innerHTML;
});
//  в мобильной версии по нажатию на header открываем выпадающее меню
$(".nav__header").click(function() {
    $(".nav__header").toggleClass("nav__header--open ");
});