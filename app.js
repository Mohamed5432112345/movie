// $(document).ready(()=>{
//     $('#hamburger-menu').click(()=>{
//         $('#hamburger-menu').toggleClass('active')
//     })
// })
$(function(){
    $(".hamburger-menu").click(function() {
        $(".hamburger-menu").toggleClass("active")
        $(".nav .nav-menu").toggleClass("active")
    })
    let mavText = ["<i class='bx bx-chevron-left'></i>","<i class='bx bx-chevron-right'></i>"]
    $('#hero-carousel').owlCarousel({
        items:1,
        dots:false,
        loop:true,
        nav:true,
        navText: mavText,
        autoplay: true,
        autoplayHvrtPause:true
    })
    $('#top-movies-slide').owlCarousel({
        items:6,
        dots:false,
        loop:true,
        autoplay: true,
        autoplayHvrtPause:true,
        responsive: {
            500: {
                items: 3
            },
            1280: {
                items: 4
            },
            1600: {
                items: 6
            }
        }
    })
    $(".movies-slide").owlCarousel({
        items:2,
        dots:false,
        nav: true,
        navText: mavText,
        margin:15,
        responsive: {
            500: {
                items: 3
            },
            1280: {
                items: 4
            },
            1600: {
                items: 6
            }
        }
    })
})