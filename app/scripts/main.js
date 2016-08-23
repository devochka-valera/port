$('.skillbar').each(function(i, elem) {
    elem.childNodes[1].style.width = elem.childNodes[3].innerHTML;
});
$(".nav__container").click(function() {
    $(".nav__container").toggleClass("nav__container--open ");
});