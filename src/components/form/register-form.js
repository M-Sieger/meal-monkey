/*export function createRegisterForm() {
        return `
        <form class="form">
            <h2>Reset Passwort</h2>
             <p>Please enter your email to recive a link to create new password via email</p>
            <input placeholder="email" />
             <input type="submit" />
        </form>*/

export function createRegisterForm() {
  const form = document.createElement("form");
  form.className = "form";

  const button = document.createElement("button");
  button.innerText = "Register";
  button.className = button;

  function register() {
    alert("Registered");
  }

  button.addEventListener("click", register);

  const title = document.createElement("h2");
  title.innerText = "Reset Passwort";

  const text = document.createElement("p");
  text.innerText =
    "Please enter your email to reveive a link to create an new password via email";

  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Email";
  input.className = "input";

  return form;
}
