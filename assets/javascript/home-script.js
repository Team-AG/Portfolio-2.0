
// SCROLL FUNCTION FOR NAVBAR
//THE NAVBAR CHANGES FROM HAVING A BACKGROUND TO NOT HAVING A BACKGROUND AS YOU SCROLL DOWN
$(document).ready(function () {
    $(window).scroll(function () {
        //ADDS NAVBAR BACKGROUND IF YOU SCROLL DOWN
        // CLASS'S CAN BE CHANGED OR RENAMED
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
// BACKGROUND IS HIDDEN IF STATEMENT IS NOT MET
        } else {
            $('.navbar').removeClass("sticky");
        }
    })
});