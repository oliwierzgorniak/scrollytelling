import gsap from "gsap";

const handleProjects = () => {
  const sections = gsap.utils.toArray(".project-container");
  gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".scroll-container",
      pin: true,
      scrub: 1,
      snap: 1 / (sections.length - 1),
    },
  });
};

export default handleProjects;
