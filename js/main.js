// Navbar Scroll Change
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 970) {
        document.getElementById("nav").style.background = "#000";
    } else {
        document.getElementById("nav").style.background = "rgba(0, 0, 0, 0.6)";
  }
}

// ScrollSpy & Smooth Scrolling
$(document).ready(function(){
    // Add scrollspy to <body>
    $('body').scrollspy({target: ".navbar", offset: 0});   
  
    // Add smooth scrolling on all links inside the navbar
    $('a[href*="#"]').on('click', function(event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top - 71
        }, 0, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      }  // End if
    });
  });

// Testimonials
const slides = $(".SP-slider");
const dotsContainer = $(".carousel-dots");
const interval = 5000; // Time interval for auto-sliding in milliseconds
let currentIndex = 0;

// Create pagination dots
for (let i = 0; i < slides.length; i++) {
  dotsContainer.append('<span class="dot" data-index="' + i + '"></span>');
}

const dots = $(".dot");

// Function to show a specific slide
function showSlide(index) {
  slides.hide();
  slides.eq(index).show();
  dots.removeClass("active");
  dots.eq(index).addClass("active");
}

// Initial slide display
showSlide(currentIndex);

// Auto slide
function autoSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

// Set an interval for auto-sliding
let sliderInterval = setInterval(autoSlide, interval);

// Handle dot click event
dots.click(function () {
  const dotIndex = $(this).data("index");
  showSlide(dotIndex);
  currentIndex = dotIndex;
  clearInterval(sliderInterval); // Stop auto-sliding
  sliderInterval = setInterval(autoSlide, interval); // Restart auto-sliding
});

// Handle next and previous button clicks
$("#nextButton").click(function () {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
  clearInterval(sliderInterval); // Stop auto-sliding
  sliderInterval = setInterval(autoSlide, interval); // Restart auto-sliding
});

$("#prevButton").click(function () {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
  clearInterval(sliderInterval); // Stop auto-sliding
  sliderInterval = setInterval(autoSlide, interval); // Restart auto-sliding
});

// Messenger Plugin
var chatbox = document.getElementById('fb-customer-chat');
chatbox.setAttribute("page_id", "65996290389");
chatbox.setAttribute("attribution", "biz_inbox");

window.fbAsyncInit = function() {
  FB.init({
    xfbml            : true,
    version          : 'v13.0'
  });
};

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/en_GB/sdk/xfbml.customerchat.js';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
