searchVisible = 0;
transparent = true;
hasTransparent = false;

$(document).ready(function () {
    if ($('nav[role="navigation"]').hasClass('navbar-transparent')) {
        hasTransparent = true;
    }
    $('[data-toggle="search"]').click(function () {
        if (searchVisible == 0) {
            searchVisible = 1;
            $(this).parent().addClass('active');
            $(this).children('p').html('Close');
            $('.navbar-search-form').fadeIn(function () {
                $('.navbar-search-form input').focus();
            });
        } else {
            searchVisible = 0;
            $(this).parent().removeClass('active');
            $(this).children('p').html('Search');
            $(this).blur();
            $('.navbar-search-form').fadeOut(function () {
                $('.navbar-search-form input').blur();
            });
        }
    });

});

$(document).scroll(function () {
    if (hasTransparent) {
        if ($(this).scrollTop() > 50) {
            if (transparent) {
                transparent = false;
                $('nav[role="navigation"]').removeClass('navbar-transparent');
            }
            var x = document.getElementsByClassName("hiddenScroll");
            for (var i = 0; i <= x.length; i++) {
                x[i].style.visibility = "hidden";
            }
        } else {
            if (!transparent) {
                transparent = true;
                $('nav[role="navigation"]').addClass('navbar-transparent');
                var x = document.getElementsByClassName("hiddenScroll");
                for (var i = 0; i <= x.length; i++) {
                    x[i].style.visibility = "visible";
                }
            }
        }
    }
});













