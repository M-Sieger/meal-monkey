import "./card.css";
import cardItalian from "./card-italian.html";
import cardSri_lankan from "./card-sri_lankan.html";
import cardContainer from "./card-container.html";

export default {
  title: "Components/Cards",
  parameters: { layout: "centered" },
};

export const Italian = () => cardItalian;
export const Sri_lankan = () => cardSri_lankan;
export const multiple = () => cardContainer;
multiple.parameters = { layout: "fullscreen" };
