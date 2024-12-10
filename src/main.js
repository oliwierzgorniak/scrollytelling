import "./styles/main.css";
import "./styles/landing.css";
import "./styles/projects.css";
import "./styles/end.css";

import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import handleLanding from "./scripts/handleLanding.js";
import handleProjects from "./scripts/handleProjects.js";

gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);

handleLanding();
handleProjects();
