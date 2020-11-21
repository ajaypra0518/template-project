
var x = document.getElementById('preloader');
function funload() {
    x.style.display = 'none';

}


function myFunction(content) {
    var x = document.getElementById(content);
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}


$(function () {
    $(document).scroll(function () {
        var $nav = $(".sticky-top1");
        var $link = $(".nav-link1");
        var $logo = $(".navbar-brand1")
        $nav.toggleClass('scrolled', $(this).scrollTop() > $link.height());
        $link.toggleClass('scrolled', $(this).scrollTop() > $link.height());
        $logo.toggleClass('scrolled', $(this).scrollTop() > $link.height());
    });
});




function myfunction() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {


        document.getElementById("dummy").style.position = "fixed";
        document.getElementById("dummy").style.backgroundColor = "white";
        document.getElementById("dummy").style.zIndex = "999999999"
        document.getElementById("dummy").style.width = "100%"
        document.getElementsByClassName("navbar2")[0].style.color="black"
        for(var i=0;i<5;i++){
            document.getElementsByClassName("navlink2")[i].style.color="black"
        }
    }
    else {
        document.getElementById("dummy").style.position = "static";
        document.getElementById("dummy").style.backgroundColor = "rgb(33, 37, 41)";
        document.getElementsByClassName("navbar2")[0].style.color="white"
        for(var i=0;i<5;i++){
            document.getElementsByClassName("navlink2")[i].style.color="white"
        }

    }
}













jQuery(document).ready(function ($) {


    if ($('.owl-clients').length) {
        $('.owl-clients').owlCarousel({
            loop: true,
            nav: false,
            dots: true,
            items: 1,
            margin: 30,
            autoplay: false,
            smartSpeed: 700,
            autoplayTimeout: 6000,
            responsive: {
                0: {
                    items: 1,
                    margin: 0
                },
                460: {
                    items: 1,
                    margin: 0
                },
                576: {
                    items: 3,
                    margin: 20
                },
                992: {
                    items: 5,
                    margin: 30
                }
            }
        });
    }

});

























