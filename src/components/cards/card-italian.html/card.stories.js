import "./card.css";
import cardItalian from "./card-italian.html";
import cardSri_lankan from "./card-sri_lankan.html";

export default {
  title: "Components/Cards",
  parameters: { layout: "centered" },
};

export const withItalian = () => cardItalian;
export const withSri_lankan = () => cardSri_lankan;