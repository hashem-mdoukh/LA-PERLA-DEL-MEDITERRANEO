AOS.init();

let btn = document.querySelector(".scroll-To-top");
let whatsapp = document.querySelector(".whatsapp");
let humporgar = document.querySelector("header .container .links");
console.log(humporgar);

window.onscroll = Button;

btn.onclick = scrollToTop;

function Button() {
  if (window.scrollY >= 100) {
    btn.style.display = "block";
    whatsapp.style.display = "block";
  } else {
    btn.style.display = "none";
    whatsapp.style.display = "none";
  }
}

function scrollToTop() {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
}

whatsapp.addEventListener("click", () => {
  window.open("https://wa.me/393479337939")
});

humporgar.addEventListener("click", () => {
  humporgar.classList.toggle("open")
})

