$(function(){

    $(".video-slider").owlCarousel({
        loop: false,
        responsiveClass: true,
        margin: 0,
        items: 3,
        dots: true,
        responsive:{
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    });

    var wow = new WOW({
        mobile: false
    });
    wow.init();



    $(".feature-box").on("mouseenter", function(){
        hvr = $(this).find(".hover");

        hvr.attr("src", hvr.attr("src"));
    });



    // for(i=0; i<$(".rbox > .r").length; i++){
    //     $t = $( $(".rbox > .r")[i] );
    //     elem = $("<div class='ticks' ></div>");

    //     $( $t.find(".c")[0] ).append(elem);

    //     elem.append( $t.find(".c")[1].innerHTML );
    //     elem.append( "<span>|</span>" );
    //     elem.append( $t.find(".c")[2].innerHTML );
        


    // }


});