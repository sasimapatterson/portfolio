// Back-to-top button
mybutton = document.getElementById("myBtn");

// When user scrolls down 20px the button will show up
 window.onscroll = function() {
     scrollFunction()
    };

 function scrollFunction() {
     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
         mybutton.style.display = "block";
     } else {
         mybutton.style.display = "none";
     }
 }

// When user clicks on the button, scroll to the top
 function topFunction() {
     document.body.scrollTop = 0; // For Safari
     document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

 // To open and close menu using burger nav
function onClickMenu() {
    document.getElementById("menu").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
 }
