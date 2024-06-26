const nav=document.getElementById("click");
function on(){
    nav.style.left="0";
}
function off(){
    nav.style.left="-100%";
}
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  document.addEventListener('DOMContentLoaded', function() {
    setActiveLink();
});

function setActiveLink() {
    const links = document.querySelectorAll('ul a');
    const currentUrl = window.location.href;

    links.forEach(function(link) {
        if (link.href === currentUrl) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}
