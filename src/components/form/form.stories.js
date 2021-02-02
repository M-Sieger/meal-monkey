import "./form.css";
import { createRegisterForm } from "./register-form";
import { createVerifyForm } from "./verifyform";

export default {
  title: "Components/Form",
  parameters: { layout: "centered" },
};

export const register = () => createRegisterForm();
export const verify = () => createVerifyForm();
