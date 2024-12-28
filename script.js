const services = document.querySelectorAll(".service");

services.forEach((service) => {
  service.addEventListener("mouseenter", () => {
    service.style.transform = "scale(1.05)";
    service.style.boxShadow = "0 6px 8px rgba(0, 0, 0, 0.2)";
  });

  service.addEventListener("mouseleave", () => {
    service.style.transform = "scale(1)";
    service.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
  });
});
const futureItems = document.querySelectorAll(".future-item");
const serviceItems = document.querySelectorAll(".service");

function handleScrollAnimation(elements) {
  elements.forEach((item) => {
    const itemPosition = item.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (itemPosition < screenPosition) {
      item.style.opacity = "1";
      item.style.transform = "translateY(0)";
    } else {
      item.style.opacity = "0";
      item.style.transform = "translateY(20px)";
    }
  });
};

window.addEventListener("scroll", () => {
  handleScrollAnimation(futureItems);
  handleScrollAnimation(serviceItems);
});
const moreItems = document.querySelectorAll(".more-item");

window.addEventListener("scroll", () => {
  moreItems.forEach((item) => {
    const itemPosition = item.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (itemPosition < screenPosition) {
      item.style.opacity = "1";
      item.style.transform = "translateY(0)";
    } else {
      item.style.opacity = "0";
      item.style.transform = "translateY(20px)";
    }
  });
});
const footer = document.querySelector(".footer");

window.addEventListener("scroll", () => {
  const footerPosition = footer.getBoundingClientRect().top;
  const screenPosition = window.innerHeight;

  if (footerPosition < screenPosition) {
    footer.style.opacity = "1";
    footer.style.transform = "translateY(0)";
  } else {
    footer.style.opacity = "0";
    footer.style.transform = "translateY(20px)";
  }
});
const mainTitle = document.querySelector(".main-title");
const text = "Eagle مرحبا بكم في منصة";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    mainTitle.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 100);
  }
}

window.onload = typeEffect;
window.addEventListener("load", () => {
          const loadingScreen = document.getElementById("loading");
        
          setTimeout(() => {
            loadingScreen.style.opacity = "0";
            setTimeout(() => {
              loadingScreen.style.display = "none";
            }, 500);
          }, 800); 
        });
        var chd = document.querySelector('.sidecentermenunone');
        function toggleMenu() {
          if (chd.style.display === "block") {
            chd.style.display = "none";
          } else {
            chd.style.display = "block";
          }
        }
        window.addEventListener('resize', function () {
          const element = document.querySelector('.siedmgn');
          if (window.innerWidth > 768) {
            element.style.display = 'none';
          } else {
            element.style.display = 'block';
          }
        });
                