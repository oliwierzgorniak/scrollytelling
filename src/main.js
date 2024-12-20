import "./styles/main.css";
import "./styles/landing.css";
import "./styles/projects.css";
import "./styles/end.css";

import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import handleLanding from "./scripts/handleLanding.js";
import handleProjects from "./scripts/handleProjects.js";
import handleEnd from "./scripts/handleEnd.js";
import handleWacky from "./scripts/handleWacky.js";
import handleShapes from "./scripts/handleShapes.js";

gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);

handleLanding();
handleProjects();
handleShapes();
handleWacky();
handleEnd();
