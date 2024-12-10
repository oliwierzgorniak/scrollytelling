import gsap from "gsap";

const handleLanding = () => {
  gsap.to(".landing__title", {
    duration: 2,
    text: {
      value: "Oliwier Zgórniak",
      preserveSpaces: true,
    },
  });
};

export default handleLanding;
