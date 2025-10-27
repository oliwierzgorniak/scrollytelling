export default function handleTitle() {
  const title = document.querySelector(".landing__title");

  window.addEventListener("resize", () => {
    if (window.innerWidth < window.innerHeight) {
      title.textContent = "Oliwier Zgórniak";
    } else {
      title.textContent = "";
    }
  });
}
