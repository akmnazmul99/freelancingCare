$(document).ready(function() {
//  wow js animation
    wow = new WOW(
            {
                animateClass: 'animated',
                offset: 100,
            }
    );
    wow.init();

// carousel timer
    $(function() {
        $('.carousel').carousel({
            interval: 2000
        });
    });
});
