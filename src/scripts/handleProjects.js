import gsap from "gsap";

const handleProjects = () => {
  // const sections = gsap.utils.toArray(".project-container");
  // gsap.to(sections, {
  //   xPercent: -100 * (sections.length - 1),
  //   ease: "none",
  //   scrollTrigger: {
  //     trigger: ".scroll-container",
  //     pin: true,
  //     scrub: 1,
  //     // snap: 1 / (sections.length - 1),
  //   },
  // });
  const $nutcrackerVideo = document.querySelector(
    ".nutcracker .project__visualization"
  );
  const tl = gsap.timeline();
  // tl.
  // tl.to(".nutcracker", {
  //   scrollTrigger: {
  //     pin: true,
  //   },
  // });
  tl.to($nutcrackerVideo, {
    scrollTrigger: {
      trigger: ".nutcracker",
      pin: true,
      pinnedContainer: ".project-container:has(.nutcracker)",
      scrub: true,
    },
    currentTime: $nutcrackerVideo.duration,
  });
  // tl.to(".shapes", {
  //   xPercent: -100,
  //   scrollTrigger: {
  //     scrub: true,
  //   },
  // });
};

export default handleProjects;
