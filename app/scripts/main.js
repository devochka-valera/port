$(".skillbar").each(function(i, elem) {
    elem.childNodes[1].style.width = elem.childNodes[3].innerHTML;
})



function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: -34.397,
            lng: 150.644
        },
        zoom: 8
    });
};