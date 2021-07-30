import tilt from "tilt.js";

export default function initTilt() {
  document.querySelector(".js-tilt").tilt({
    maxTilt: 3,
  });
}
