document.addEventListener("DOMContentLoaded", () => {
  // Offer Bar Close
  const offerBar = document.querySelector(".bg-black");
  document.getElementById("offer-close").addEventListener("click", () => {
    offerBar.style.display = "none";
  });

  // Side Navbar Toggle
  const sideNavMenu = document.getElementById("side-navbar-activate");
  const sidenavbar = document.querySelector(".side-navbar");
  if (sideNavMenu && sidenavbar) {
    sideNavMenu.addEventListener("click", () => {
      sidenavbar.style.marginLeft = "0px";
    });

    const closeBtn = document.getElementById("side-navbar-close");
    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        sidenavbar.style.marginLeft = "-60%";
      });
    }
  }

  // Image Slider Logic

  const sliderTrack = document.getElementById("slider-track");
  const leftArrow = document.getElementById("slider-left-activate");
  const rightArrow = document.getElementById("slider-right-activate");

  let currentIndex = 0;
  const totalSlides = 3; // Number of images
  const slideWidth = window.innerWidth;

  function updateSlider() {
    sliderTrack.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }

  // Arrow Navigation
  rightArrow.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
  });

  leftArrow.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlider();
  });

  // Auto Play every 5 seconds
  setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
  }, 5000);

  //scroll container
    const container = document.getElementById("scroll-container");
  document.getElementById("scroll-left").addEventListener("click", () => {
    container.scrollBy({ left: -200, behavior: "smooth" });
  });

  document.getElementById("scroll-right").addEventListener("click", () => {
    container.scrollBy({ left: 200, behavior: "smooth" });
  });

  //brands running
  const scroller = document.getElementById('thumbnail-scroll');

  scroller.addEventListener('mouseenter', () => {
    scroller.style.animationPlayState = 'paused';
  });

  scroller.addEventListener('mouseleave', () => {
    scroller.style.animationPlayState = 'running';
  });

  // Swipe Support (Touch Events)
  let startX = 0;
  let isDragging = false;

  sliderTrack.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
    isDragging = true;
  });

  sliderTrack.addEventListener("touchmove", (e) => {
    if (!isDragging) return;
    const diff = e.touches[0].clientX - startX;

    // Optional: you can apply dragging effect if you want
  });

  sliderTrack.addEventListener("touchend", (e) => {
    if (!isDragging) return;
    const endX = e.changedTouches[0].clientX;
    const diff = endX - startX;

    if (diff > 50) {
      // Swiped right
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    } else if (diff < -50) {
      // Swiped left
      currentIndex = (currentIndex + 1) % totalSlides;
    }

    updateSlider();
    isDragging = false;
  });

  // Handle resizing (update slide width)
  window.addEventListener("resize", () => {
    updateSlider(); // Keeps position after resize
  });





  // Like Button Toggle
 const likeButtons = document.querySelectorAll(".like-button");
  likeButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const target = e.target;
      if (target.src.includes("blackheart")) {
        target.src = "img/icons/redheart.png";
      } else {
        target.src = "img/icons/blackheart.png";
      }
    });
  });

  // Scroll Animation Reveal
  window.addEventListener("scroll", () => {
    const elements = document.querySelectorAll(".initial-scroll-animate");
    elements.forEach((el) => {
      let windowHeight = window.innerHeight;
      let elBound = el.getBoundingClientRect();
      if (windowHeight > elBound.top - 100) {
        el.classList.remove("reveal-scroll-animate");
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
    const username = localStorage.getItem("fashique_username");
    const displayEl = document.getElementById("username-display");

    if (username) {
      displayEl.textContent = `Hello, ${username}`;
      displayEl.classList.remove("hidden");
    }
  });



//Collections
