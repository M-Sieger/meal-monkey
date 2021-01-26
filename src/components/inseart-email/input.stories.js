import "./input.css";
import inputEmail from "./input-email.html";
import inputPw from "./input-pw.html";

export default {
  title: "input",
  parameters: { layout: "centered" },
};

export const withEmail = () => inputEmail;
export const withPw = () => inputPw;