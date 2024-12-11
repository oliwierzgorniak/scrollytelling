import gsap from "gsap";

const handleProjects = () => {
  const $nutcrackerVideo = document.querySelector(".nutcracker__video");
  const $nutcrackerProjectContainer = document.querySelector(
    ".project-container:has(.nutcracker)"
  );
  gsap.to($nutcrackerVideo, {
    scrollTrigger: {
      trigger: $nutcrackerProjectContainer,
      start: "top 50%",
      onEnter: () => $nutcrackerVideo.play(),
    },
  });
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
        y: "-90vh",
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
        y: "20vh",
      },
      {
        y: "-40vh",
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
