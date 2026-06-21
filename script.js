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
  centeredSlides: true,
  slidesPerView: 1,
  spaceBetween: 20,

  preventClicks: false,
  preventClicksPropagation: false,

  autoplay: {
    delay: 3000,
  },

  breakpoints: {
    768: {
      slidesPerView: 3,
    },
  },
});

new Swiper(".giftSwiper", {
  loop: true,
  centeredSlides: true,
  slidesPerView: 1,
  spaceBetween: 20,

  preventClicks: false,
  preventClicksPropagation: false,

  autoplay: {
    delay: 3500,
  },

  breakpoints: {
    768: {
      slidesPerView: 3,
    },
  },
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

document.addEventListener("click", (e) => {
  const img = e.target.closest(".gallerySwiper img, .giftSwiper img");

  if (!img) return;

  lightboxImg.src = img.src;
  lightbox.classList.add("active");

  document.body.style.overflow = "hidden";
});

function closeLightbox() {
  lightbox.classList.remove("active");
  lightboxImg.src = "";
  document.body.style.overflow = "";
}

closeBtn.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    closeLightbox();
  }
});

const imageModal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeModal = document.querySelector(".close-modal");

document.addEventListener("click", (e) => {
  const img = e.target.closest(".gallerySwiper img, .giftSwiper img");

  if (!img) return;

  modalImage.src = img.src;
  imageModal.classList.add("active");

  document.body.style.overflow = "hidden";
});

function hideModal() {
  imageModal.classList.remove("active");
  modalImage.src = "";
  document.body.style.overflow = "";
}

closeModal.addEventListener("click", hideModal);

imageModal.addEventListener("click", (e) => {
  if (e.target === imageModal) {
    hideModal();
  }
});