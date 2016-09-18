// ширина для skillbar относительно контента skillbar__percent
$('.skillbar').each(function(i, elem) {
    $(elem).children('.skillbar__line').width($(elem).children('.skillbar__percent').html());
});




//  в мобильной версии по нажатию на header открываем выпадающее меню
$('.nav__header').click(function() {
    $('.nav__header').toggleClass('nav__header--open');
});

// // галерея 
$(function(img, e) {
    // Cache variables
    var $overlay = $('<div id="overlay"></div>'),
        $image = $("<img>"),
        $caption = $('<div class="work__description"></div>');

    // add image to overlay
    $overlay.append($image);

    // add overlay
    $("body").append($overlay);

    // Capture click event on a link to img
    var imgLinks = $('#imageGallery a');

    imgLinks.click(function(e) {
        e.preventDefault();
        var imgLoc = $(this).attr('href');
        $image.attr('src', imgLoc);
        //add caption to overlay
        $caption.insertAfter($image);
        $image.addClass('borderedImg');
        $overlay.slideDown();

        var captionText = $(this).siblings('.work__description').html();
        $caption.html(captionText);

    });

    $overlay.click(function() {
        $overlay.slideUp();
    });
});