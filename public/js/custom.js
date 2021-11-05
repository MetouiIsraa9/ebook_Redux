



// Table of contyent
// 1.  vars and inits
// 2.  Inits Menu
// 3.  Init Timer
// 4.  Init Favorite
// 5.  Init Isotope Filtering
// 6.  Init Slider


jQuery(document).ready(function ($) {
    "user strict";
    //1. var and inits
    var mainSlider = $('.mail_slider');
    var hamburger = $('.hamburger_container');
    var menu = $('.hamburger_menu');
    var menuActive = false;
    var hamburgerClose = $('.hamburger_close');
    var fsOverlay = $('.fs_menu_overlay');

    initMenu();
    initFavorite();
    initIstopeFiltering();
    initTimer();

    //2.inits Menu
    function initMenu() {
        console.log("etape0");
        if (hamburger.length) {
            hamburger.on('click', function () {
                if (!menuActive) {
                    openMenu();
                }
            });
        }
        if (fsOverlay.length) {
            fsOverlay.on('click', function () {
                if (menuActive) {
                    closeMenu();

                }

            });

        }

        if (hamburgerClose.length) {
            hamburgerClose.click(function () {
                if (!menuActive) {
                    closeMenu();

                }

            });
        }
        if ($('.menu_item'), length) {
            console.log("etape10");
            var items = document.querySelector('.menu_item');
            var i;
            for (i = 0; i < items.length; i++) {
                console.log(items[i]);
                if (items[i].classList.contains("has-children")) {
                    console.log("etape11");
                    items[i].onclick = function () {
                        this.classList.toggle("active");
                        var panel = this.children[1];
                        if (panel.style.maxHeight) {
                            panel.style.maxHeight = null;
                        } else {
                            panel.style.maxHeight = panel.scrollHeight + "px";
                        }
                    }
                }
            }
        }

    }

    function openMenu() {
        menu.addClass('active');
        fsOverlay.css('pointer-events', "auto");
        menuActive = true;
    }
    function closeMenu() {

        menu.removeClass('active');

        fsOverlay.css('pointer-events', "none");

        menuActive = false;

    }

    //3.int timer

    function initTimer() {
        if ($('.timer').length) {
            var date = new Date();
            date.setDate(date.getDate() + 3);
            var target_date = date.getTime();


            // var fore time units

            var days, hours, minutes, seconds;
            var d = $('#day');
            var h = $('#hour');
            var m = $('#minute');
            var s = $('#second');

            setInterval(function () {
                var current_date = new Date().getTime();
                var seconds_left = (target_date - current_date) / 1000;

                days = parseInt(seconds_left / 86400);
                seconds_left = seconds_left % 86400;

                hours = parseInt(seconds_left / 3600);
                seconds_left = seconds_left % 3600;

                minutes = parseInt(seconds_left / 60);
                seconds = parseInt(seconds_left % 60);

                d.text(days);
                h.text(hours);
                m.text(minutes);
                s.text(seconds);

            }, 1000)
        }
    }

    //4.inti favorite

    function initFavorite() {
        if ($('.favorite').length) {
            var favs = $('.favorite');
            favs.each(function () {
                var fav = $(this);
                var active = false;
                if (fav.hasClass('active')) {
                    active = true;
                }
                fav.on('click', function () {
                    if (active) {
                        fav.removeClass('active');
                        active = false;
                    }
                    else {
                        fav.addClass('active');
                        active = true;
                    }
                });
            });
        }

    }
    //5.int Isotope Filtering
    function initIstopeFiltering() {
        if ($('.grid_sorting_button').length) {
            $('.grid_sorting_button').click(function () {
                $('.grid_sorting_button.active').removeClass('active');
                $(this).addClass('active');

                var selector = $(this).attr('data-filter');
                $('.book-grid').isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false
                    }
                });
                return false
            });
        }
    }

    //6.int Slider












    //copy right
    var date = new Date().getFullYear();

    document.getElementById("year").innerHTML = date;



});


