$(document).ready(function () {
    const circleType = new CircleType(document.getElementById('curved'));
    const circleTypeSecond = new CircleType(document.getElementById('curvedSecond'));
    circleType.radius(800);
    circleTypeSecond.radius(800);
    $('.hero-carousel').slick({
        autoplay: false,
        infinite: true  ,
        speed: 300,
        slidesToShow: 1,
        arrows: false,
        dots: false,
        // adaptiveHeight: true
    });
});