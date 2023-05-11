$('.reviews_slider').bxSlider({
    pager: true,
    nextText: '',
    prevText: ''
});

sufferingSlider = $('.suffering_list').bxSlider();
basisSlider = $('.basis_list').bxSlider();
methodsSlider = $('.methods_list').bxSlider();
block_5Slider = $('.block_5_part').bxSlider();
var mobSliderConfig = {
    minSlides: 1,
    maxSlides: 1,
    adaptiveHeight: true,
    controls: true,
    pager: true,
    nextText: '',
    prevText: ''
}

$(document).ready(function() {
    $('.go_to').click(function() {
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({
                scrollTop: $(scroll_el).offset().top
            }, 1500);
        }
        return false;
    });
    $(".doctor__btn").click(function() {
        $(".doctor__btn").css("display", "none");
        $(".doctor__wrapper").slideDown("slow", function() {
            // Animation complete.
        });
    });
    var time = 600;
    var intr;

    function start_timer() {
        intr = setInterval(tick, 1000);
    }

    function tick() {

        if (localStorage.alphamaxblack73274) {
            if (localStorage.alphamaxblack73274 <= 0) {
                time = 5;
            } else {
                time = localStorage.alphamaxblack73274;
            }

        } else {
            time = 600;
        }
        time = time - 1;
        localStorage.alphamaxblack73274 = time;

        var mins = Math.floor(time / 60);
        var secs = time - mins * 60;
        if (mins == 0 && secs == 0) {
            clearInterval(intr);
        }
        secs = secs >= 10 ? secs : "0" + secs;
        $("#min").html("0" + mins);
        $("#sec").html(secs);

        localStorage.alphamaxblack73274 = time;
    }
    start_timer();

})