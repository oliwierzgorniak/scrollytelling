import "./styles/main.css";
import "./styles/landing.css";
import "./styles/projects.css";
import "./styles/end.css";

import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import handleLanding from "./scripts/handleLanding.js";

gsap.registerPlugin(TextPlugin);

handleLanding();
