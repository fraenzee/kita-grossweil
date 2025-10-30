export function initCarousel(root) {
  const items = root.querySelectorAll(".carousel-item");
  let current = 0;

  function showSlide(i) {
    items.forEach((el, idx) => {
      el.classList.toggle("opacity-100", idx === i);
      el.classList.toggle("opacity-0", idx !== i);
    });
    current = i;
  }

  root.querySelector("[data-prev]").addEventListener("click", () => {
    showSlide((current - 1 + items.length) % items.length);
  });

  root.querySelector("[data-next]").addEventListener("click", () => {
    showSlide((current + 1) % items.length);
  });
}