$(document).ready(function(){
    // $("#name-title").html("🙏🏿");
    console.log('Hello world');

    $( "#projects-link" ).click(function() {
        $('html, body').animate({scrollTop: $('#projects').offset().top},
            2000);
    });

    $( "#ebook-link" ).click(function() {
        $('html, body').animate({scrollTop: $('#ebook').offset().top},
            2000);
    });
    
    $( "#youtube-link" ).click(function() {
        $('html, body').animate({scrollTop: $('#youtube').offset().top},
            2000);
    });

    $( "#universityacceptance-link" ).click(function() {
        $('html, body').animate({scrollTop: $('#universityacceptance').offset().top},
            2000);
    });
    setTimeout(function() {
      $('#name-title').html("<h1>Isaac Tang 🔥</h1>");
    }, 2000)

});