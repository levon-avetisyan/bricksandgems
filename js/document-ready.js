$(document).ready(function () {
    const circleType = new CircleType(document.getElementById('curved'));
    const circleTypeSecond = new CircleType(document.getElementById('curvedSecond'));
    circleType.radius(800);
    circleTypeSecond.radius(800);
    $('.hero-carousel').slick({
        autoplay: true,
        infinite: true,
        speed: 3000,
        slidesToShow: 1,
        arrows: false,
        dots: false,
        // adaptiveHeight: true
    });
});