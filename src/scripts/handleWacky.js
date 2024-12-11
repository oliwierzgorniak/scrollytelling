import gsap from "gsap";

const handleWacky = () => {
  const $playSvg = document.querySelector(".wacky__img #button");
  $playSvg.addEventListener("click", () => {
    const tl = gsap.timeline();
    tl.to(".wacky__img #hero", {
      rotation: 360,
      transformOrigin: "center center",
      duration: 10,
    });

    tl.to(
      ".wacky__img .cart",
      {
        rotation: -360,
        transformOrigin: "center center",
        duration: 10,
      },
      "<"
    );
  });
};

export default handleWacky;
