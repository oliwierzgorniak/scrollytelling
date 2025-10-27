import gsap from "gsap";

const handleProjects = () => {
  const projectContainers = document.querySelectorAll(".project-container");
  projectContainers.forEach(($projectContainer) => {
    const $visualization = $projectContainer.querySelector(
      ".project__visualization"
    );
    const $textContainer = $projectContainer.querySelector(
      ".project__text-container"
    );
    gsap.fromTo(
      $visualization,
      {
        y: "-80vh",
      },
      {
        y: "80vh",
        scrollTrigger: {
          trigger: $projectContainer,
          start: "top 50%",
          scrub: 0.5,
        },
      }
    );

    gsap.fromTo(
      $textContainer,
      {
        y: "60vh",
      },
      {
        y: "-60vh",
        scrollTrigger: {
          trigger: $projectContainer,
          start: "top 50%",
          scrub: 0.5,
        },
      }
    );
  });
};

export default handleProjects;
