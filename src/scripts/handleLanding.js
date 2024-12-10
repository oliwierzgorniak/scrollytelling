import gsap from "gsap";

const handleLanding = () => {
  const tl = gsap.timeline();

  tl.to(".landing__title", {
    duration: 1.5,
    delay: 1.5,
    text: {
      value: "Oliwier Zgórniak",
    },
  });

  tl.from(
    ".nav__a",
    {
      duration: 0.4,
      opacity: 0,
    },
    "<"
  );

  tl.from(".landing__description", {
    duration: 0.7,
    y: "100%",
    opacity: 0,
  });

  tl.from(".landing__link", {
    opacity: 0,
    x: "100%",
    duration: 0.6,
    ease: "bounce.out",
    stagger: 0.2,
  });

  tl.from(".landing__mouse", {
    opacity: 0,
    delay: 0.5,
    duration: 0.6,
  });

  const mouseTl = gsap.timeline({
    repeat: -1,
    repeatDelay: 4,
  });

  mouseTl.to(".landing__mouse #wheel", {
    y: "100%",
    duration: 0.8,
    ease: "power2.out",
  });

  mouseTl.to(".landing__mouse #wheel", {
    y: "0",
    duration: 0,
  });

  tl.add(mouseTl);
};

export default handleLanding;
