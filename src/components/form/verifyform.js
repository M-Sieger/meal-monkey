import { createElement } from "../form/createElement";

function createInputElement() {
  const input = createElement("input", {
    className: "input",
    placeholder: "*",
    type: "password",
    maxLength: 1,
  });
  return input;
}

export function createVerifyForm() {
  const inputElement1 = createInputElement();
  const inputElement2 = createInputElement();
  const inputElement3 = createInputElement();
  const inputElement4 = createInputElement();

  const messageElement = createElement("p", {
    className: "message",
  });

  return createElement("form", {
    className: "form",
    children: [
      createElement("h2", {
        innerText: "We have sent an OTP to your Mobile",
      }),
      createElement("p", {
        innerText:
          "Please check your mobile number 0171*******12 continue to reset your password",
      }),

      messageElement,
      createElement("div", {
        className: "form_top",
        children: [inputElement1, inputElement2, inputElement3, inputElement4],
      }),
      createElement("input", {
        type: "submit",
        innerText: "Next",
        className: "btn",
      }),

      createElement("p", {
        innerText: "Didn't Receive",
        className: "form_hint",
        children: [
          createElement("a", {
            innerText: "Click here",
            href: "#",
          }),
        ],
      }),
    ],
    onsubmit: function (event) {
      event.preventDefault();
      const password =
        inputElement1.value +
        inputElement2.value +
        inputElement3.value +
        inputElement4.value;

      if (password === "3217") {
        messageElement.innerText = "";
      } else {
        messageElement.innerText = "Wrong Password";
      }
    },
  });
}
