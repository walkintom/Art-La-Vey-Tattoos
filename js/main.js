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

// Contact Form Validation
var form = document.getElementById("contactForm");
async function handleSubmit(event) {
event.preventDefault();
var status = document.getElementById("formStatus");
var data = new FormData(event.target);
fetch(event.target.action, {
  method: form.method,
  body: data,
  headers: {
    'Accept': 'application/json'
}
}).then(response => {
  if (response.ok) {
    status.innerHTML = "Thanks for your submission!";
    form.reset()
  } else {
    response.json().then(data => {
    if (Object.hasOwn(data, 'errors')) {
      status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
    } else {
      status.innerHTML = "Oops! There was a problem submitting your form"
    }
  })
}
}).catch(error => {
  status.innerHTML = "Oops! There was a problem submitting your form"
});
}
form.addEventListener("submit", handleSubmit)
