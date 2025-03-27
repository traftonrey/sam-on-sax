// Navigation Bar Appear & Disappear Logic
window.addEventListener('DOMContentLoaded', function() {
    var logoBig = document.querySelector('.logo-big');
    var navbar = document.querySelector('.navbar');
  
    function toggleNavbarVisibility() {
      if (logoBig.offsetWidth > 0 || logoBig.offsetHeight > 0) {
        navbar.style.opacity = '0';
      } else {
        navbar.style.opacity = '1';
      }
    }
  
    // Initial check on page load
    toggleNavbarVisibility();
  
    // Check when the window is resized
    window.addEventListener('resize', toggleNavbarVisibility);
  
    // Check when scrolling
    window.addEventListener('scroll', function() {
      if (window.pageYOffset >= logoBig.offsetTop + logoBig.offsetHeight) {
        navbar.style.opacity = '1';
      } else {
        toggleNavbarVisibility();
      }
    });
});

// Navigation Bar Transitions
$(document).ready(function() {
  // Smooth scrolling for navigation links
  $(".nav-link").on("click", function(event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;
      var target = $(hash);

      $("html, body").animate(
        {
          scrollTop: target.offset().top
        },
        {
        duration: 1200,
        easing: "swing"
        }
      );
    }
  });
});

// Logo Fade In & Fade Out Logic
window.addEventListener('DOMContentLoaded', function() {
  var logoBig = document.querySelector('.logo-big');
  var images = [
    'resources/logo/SamSax_01.jpg',
    'resources/logo/SamSax_02.jpg',
    'resources/logo/SamSax_03.jpg',
    'resources/logo/SamSax_04.jpg',
    'resources/logo/SamSax_05.jpg',
    'resources/logo/SamSax_06.jpg'
  ];
  var currentIndex = 0;

  function fadeLogo() {
    var newImage = new Image();
    newImage.src = images[(currentIndex + 1) % images.length];
    newImage.alt = "Sam on Sax Logo Header";
    newImage.loading = "lazy";
    newImage.classList.add('logo-big');
    newImage.style.opacity = '0';
    newImage.style.position = 'absolute';
    newImage.style.top = '0';
    newImage.style.left = '0';
    newImage.style.zIndex = '1';
  
    logoBig.parentNode.insertBefore(newImage, logoBig);
  
    setTimeout(function() {
      newImage.style.opacity = '1';
    }, 100);
  
    setTimeout(function() {
      logoBig.style.opacity = '0';
    }, 4000);
  
    setTimeout(function() {
      logoBig.style.zIndex = '0';
      logoBig = newImage;
      currentIndex = (currentIndex + 1) % images.length;
    }, 7600);
  }
  
   
  fadeLogo();
  // Start the fade animation
  setInterval(fadeLogo, 4000);
});
