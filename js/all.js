(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

$(document).ready(function () {
    // Nav click slick smooth scroll
    // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]').not('[href="#0"]').click(function (event) {
        // On-page links
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function () {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) {
                        // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });

    // Close nav on link click
    $('.navbar-nav>li>a').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });

    // Sticky Nav
    window.onscroll = function () {
        myFunction();
    };

    // Get the header
    var header = document.getElementById("siteNavTop");

    // Get the offset position of the navbar
    var sticky = header.offsetTop;

    // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
            $(document.body).addClass("nav-fixed");
        } else {
            header.classList.remove("sticky");
            $(document.body).removeClass("nav-fixed");
        }
    }

    $("#calcualtedBricks").text("$"+0);
    
    $("#amountToMultiply").on("focus",function () {
        $("#customAmount").val(" ");
        $("input[name='donation_amount']").parent().removeClass('active');
        $("input[name='donation_amount']").prop("checked", false);
    }).on("blur",function () {
        var calcaulatedBricks;
        calcaulatedBricks = $("#amountToMultiply").val() * 50;
        $("#calcualtedBricks").text("$"+calcaulatedBricks);
    });

    $("input[name='donation_amount']").on('change',function () {
        $("#amountToMultiply").val(" ");
        $("#customAmount").val(" ");
        $("#calcualtedBricks").text("$"+0);
    });

    $("#customAmount").on("focus",function () {
        $("#amountToMultiply").val(" ");
        $("#calcualtedBricks").text("$"+0);
        $("input[name='donation_amount']").parent().removeClass('active');
        $("input[name='donation_amount']").prop("checked", false);
    });
});

},{}]},{},[1]);
