const envelope = document.getElementById("envelope");
const welcomeScreen = document.getElementById("welcomeScreen");
const invitation = document.getElementById("invitation");

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

envelope.addEventListener("click", () => {

  envelope.classList.add("open");

  music.play();

setTimeout(() => {

  welcomeScreen.style.opacity = "0";

  setTimeout(() => {

    welcomeScreen.style.display = "none";

    invitation.classList.remove("hidden");

    requestAnimationFrame(() => {
      invitation.classList.add("show");
    });

    musicBtn.classList.remove("hidden");

  }, 700);

}, 1800);
});

/* MUSIC CONTROL */

musicBtn.addEventListener("click", () => {

  if (music.paused) {
    music.play();
    musicBtn.textContent = "⏸";
  } else {
    music.pause();
    musicBtn.textContent = "▶";
  }
});

/* COUNTDOWN */

const targetDate = new Date("July 11, 2026 14:00:00").getTime();

const countdown = document.getElementById("countdown");

setInterval(() => {

  const now = new Date().getTime();

  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));

  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) /
    (1000 * 60 * 60)
  );

  const minutes = Math.floor(
    (distance % (1000 * 60 * 60)) /
    (1000 * 60)
  );

  const seconds = Math.floor(
    (distance % (1000 * 60)) / 1000
  );

  countdown.innerHTML =
    `${days}d ${hours}h ${minutes}m ${seconds}s`;

}, 1000);

/* CAROUSELS */

new Swiper(".gallerySwiper", {

  loop: true,

  autoplay: {
    delay: 3000
  },

  slidesPerView: 1.2,
  spaceBetween: 20,

  breakpoints: {

    768: {
      slidesPerView: 1
    }
  }
});

new Swiper(".giftSwiper", {

  loop: true,

  autoplay: {
    delay: 3500
  },

  slidesPerView: 1.2,
  spaceBetween: 20,

  breakpoints: {

    768: {
      slidesPerView: 1
    }
  }
});

/* RSVP */

document.querySelector("form").addEventListener("submit", function(e) {

  e.preventDefault();

  alert("Thank you for your RSVP! We can't wait to celebrate with you. ✨");

  this.reset();
});


const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".lightbox-close");

document
  .querySelectorAll(".gallerySwiper img, .giftSwiper img")
  .forEach((img) => {

    img.addEventListener("click", () => {
      lightboxImg.src = img.src;
      lightbox.classList.add("active");
      document.body.style.overflow = "hidden";
    });

  });

closeBtn.addEventListener("click", () => {
  lightbox.classList.remove("active");
  document.body.style.overflow = "";
});

lightbox.addEventListener("click", (e) => {

  if (e.target === lightbox) {
    lightbox.classList.remove("active");
    document.body.style.overflow = "";
  }

});