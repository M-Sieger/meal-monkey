export function createVerifyForm() {
  const title = document.createElement("h2");
  title.innerText = "We have sent an OTP to your Mobile";

  const text = document.createElement("p");
  text.innerText = "Please check your mobile number 017****123 ...";

  const button = document.createElement("button");
  button.innerText = "Next";
  return text;
}
