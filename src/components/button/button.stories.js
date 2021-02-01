import "./button.css";
import buttonBorder from "./button-border.html";
import buttonFilled from "./button-filled.html";
import buttonTest from "./button-test.html";

export default {
  title: "Components/Button",
  parameters: { layout: "centered" },
};

export const withBorder = () => buttonBorder;
export const withFilled = () => buttonFilled;
export const test = () => buttonTest