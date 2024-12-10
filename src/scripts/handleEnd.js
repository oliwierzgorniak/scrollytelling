import gsap from "gsap";

const handleEnd = () => {
  gsap.from(".end__title", {
    duration: 1,
    y: "100%",
    delay: 0.5,
    scrollTrigger: {
      trigger: ".end",
      start: "50% bottom",
    },
  });

  const links = gsap.utils.toArray(".end__link");
  links.reverse();
  gsap.from(links, {
    opacity: 0,
    x: "-100%",
    duration: 0.6,
    delay: 1,
    ease: "bounce.out",
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".end",
      start: "60% bottom",
    },
  });
};

export default handleEnd;
