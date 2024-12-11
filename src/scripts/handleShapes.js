import global from "./handleShapes/globals/dynamic";
import { BACKGROUND_COLOR, SHAPES } from "./handleShapes/globals/static";
import SlingShot from "./handleShapes/classes/SlingShot";
import Bomb from "./handleShapes/classes/Bomb";

const handleShapes = () => {
  let slingShot;

  window.setup = function () {
    angleMode(DEGREES);
    const $canvas = document.querySelector(".shapes__canvas");
    createCanvas(532, 532, $canvas);
    background(BACKGROUND_COLOR);
    noStroke();

    slingShot = new SlingShot();
    global.bomb = new Bomb(SHAPES[global.shapeIndex]);
  };

  window.draw = function () {
    background(BACKGROUND_COLOR);

    global.shapes.forEach((shape) => shape.display());
    global.bomb.display();
    if (global.bomb.hasExploaded)
      global.bomb = new Bomb(SHAPES[global.shapeIndex]);
    slingShot.display();
  };
};

export default handleShapes;
