// $(function () {
//     $("#kuraokami").hover(function (e) {
//         $(this).html("Tonette Pham").fadeIn();
//     }, function (e) {
//         $(this).html("KURAOKAMI");
//     });
// });


// function scroll() {
//     var element = document.getElementById("skills");
//     element.scrollIntoView({behavior:"smooth"});
//     console.log("success")
// };

// scroll();

$(document).ready(function(){
    $('.slideNav').click(function(e){
        var linkHref= $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(linkHref).offset().top
        });

        e.preventDefault();
    })
})

// $(document).ready(function(){
//     $('.grid-item').hover(function(){
//         document.getElementById("grid-item1").innerHTML = "This"
//     })
// })