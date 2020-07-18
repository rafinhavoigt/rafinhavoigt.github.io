function changePage(){
    var page = window.location.hash.substring(1);
    Metro.utils.exec(page);
}
function loadPage(url){
    function makeAnimations(){
        $('.animation').fadeIn();
        window.scrollTo(0,0);
    }
    $.get(url).then(function(response){
        var ano = new Date().getFullYear();
        $('main').html(response);
        $('main').append(`<footer class="text-muted p-5">Rafael Voigt Ferreira © ${ano}</footer>`);
        makeAnimations();
    });
}
function work(){
    $('.text-center').removeClass('pos-absolute pos-center');
    loadPage('partials/work.html');
    $('.mif-folder').removeClass('fg-gray');
    $('.mif-folder').addClass('fg-white');
    $('.mif-home').removeClass('fg-white');
    $('.mif-home').addClass('fg-gray');
}
function home(){
    $('.text-center').addClass('pos-absolute pos-center');
    loadPage('partials/home.html');
    $('.mif-folder').removeClass('fg-white');
    $('.mif-folder').addClass('fg-gray');
    $('.mif-home').removeClass('fg-gray');
    $('.mif-home').addClass('fg-white')
}
$(function(){
    $(window).on('hashchange', function(){
        changePage();
    });
    if (window.location.hash){
        changePage();
    } else {
        window.location.hash='home';
    }
});
