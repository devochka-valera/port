$(function () {
    var elementPosition = $('#skills').offset().top;
    function renderSkills(){
        var currentPosition = window.pageYOffset;
        if (currentPosition > (elementPosition - $(window).height() * 0.75)
             && currentPosition < (elementPosition + $('#skills').height())) {
            $('.skillbar').each(function (i, elem) {
                $(elem).children('.skillbar__line').width($(elem).children('.skillbar__percent').html());
            });
        }
    }

    $(window).on('scroll', renderSkills);
    renderSkills();

    //  в мобильной версии по нажатию на header открываем выпадающее меню
    $('.nav__header').click(function () {
        $('.nav__header').toggleClass('nav__header--open');
    });

    // // галерея 
    var $overlay = $('<div id="overlay"></div>'),
        $image = $("<img id='popup_image'>"),
        $caption = $('<div class="work__description"></div>'),
        $container = $('<div class="modal__container"></div>');

    // add container to overlay
    $overlay.append($container);
    $container.append($image);
    // add overlay
    $("body").append($overlay);

    $('#imageGallery a').click(function (e) {
        e.preventDefault();
        var imageLocation = $(this).attr('href');
        $image.attr('src', imageLocation);
        //add caption to overlay
        $caption.insertAfter($image);
        $overlay.slideDown();
        var captionText = $(this).siblings('.work__description').html();
        $caption.html(captionText);
        $image.on('load', function () {
            $caption.width($image.width());
        })
    });

    $overlay.click(function () {
        $overlay.slideUp();
    });

    //Плавный скролл после нажатия на якорную ссылку
    $("#menu").on("click", "li", function (event) {
        event.preventDefault();
        var id = $(this).children().attr('href');
        var top = $(id).offset().top - 30;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({
            scrollTop: top
        }, 1500);
    });


$(function(){
$("#phone").mask("+7 (999) 999-9999");
})
});