import gsap from "gsap";

const handleWacky = () => {
  const $playSvg = document.querySelector(".wacky__img #button");
  const tl = gsap.timeline();
  tl.to(".wacky__img #hero", {
    rotation: 360,
    transformOrigin: "center center",
    duration: 10,
    ease: "power1.inOut",
  });

  tl.to(
    ".wacky__img .cart",
    {
      ease: "power1.inOut",
      rotation: -360,
      transformOrigin: "center center",
      duration: 10,
    },
    "<"
  );
  tl.pause();

  $playSvg.addEventListener("click", () => {
    tl.resume();
  });
};

export default handleWacky;
