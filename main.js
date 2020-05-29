$(document).ready(function(){
    // $("#name-title").html("🙏🏿");
    console.log('Hello world');

    $( "#projects-link" ).click(function() {
        $('html, body').animate({scrollTop: $('#projects').offset().top},
            1000);
    });

    $( "#ebook-link" ).click(function() {
        $('html, body').animate({scrollTop: $('#ebook').offset().top},
            1000);
    });
    
    $( "#youtube-link" ).click(function() {
        $('html, body').animate({scrollTop: $('#youtube').offset().top},
            1000);
    });

    $( "#universityacceptance-link" ).click(function() {
        $('html, body').animate({scrollTop: $('#youtube').offset().top},
            1000);
    });
    setTimeout(function() {
      $('#name-title').html("<h1>Isaac Tang 🔥</h1>");
    }, 2000)

});