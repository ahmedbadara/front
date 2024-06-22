// Function to adjust elements dynamically based on screen size
function adjustLayout() {
  const screenWidth = window.innerWidth;

  // Adjust card sizes and positions
  const cards = document.querySelectorAll(".card");
  if (screenWidth < 768) {
    cards.forEach((card) => {
      card.style.width = "90%";
      card.style.margin = "20px auto";
    });
  } else {
    cards.forEach((card) => {
      card.style.width = "auto";
      card.style.margin = "0";
    });
  }

  // Adjust font sizes
  const headers = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
  if (screenWidth < 768) {
    headers.forEach((header) => {
      header.style.fontSize = "larger";
    });
  } else {
    headers.forEach((header) => {
      header.style.fontSize = "initial";
    });
  }
}

// Function to toggle navigation menu on small screens
function toggleNav() {
  const nav = document.getElementById("navbarNavDropdown");
  nav.classList.toggle("show");
}

// Event listeners for window resize and document load
window.addEventListener("resize", adjustLayout);
window.addEventListener("DOMContentLoaded", () => {
  adjustLayout();

  // Add event listener to the navbar toggle button
  const navToggle = document.querySelector(".navbar-toggler");
  navToggle.addEventListener("click", toggleNav);
});

// Function to load images dynamically based on screen size
function loadImages() {
  const images = document.querySelectorAll("img[data-src]");
  const screenWidth = window.innerWidth;

  images.forEach((img) => {
    if (screenWidth < 768) {
      img.src = img.dataset.srcSmall;
    } else {
      img.src = img.dataset.srcLarge;
    }
  });
}

// Event listener for window resize and document load
window.addEventListener("resize", loadImages);
window.addEventListener("DOMContentLoaded", loadImages);

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("header, section, footer");
  const options = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }, index * 500); // delay in milliseconds
      }
    });
  }, options);

  sections.forEach((section) => {
    observer.observe(section);
  });
}); 
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('header, section, footer');
    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }, index * 500); // delay in milliseconds
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});

