/*export function createRegisterForm() {
        return `
        <form class="form">
            <h2>Reset Passwort</h2>
             <p>Please enter your email to recive a link to create new password via email</p>
            <input placeholder="email" />
             <input type="submit" />
        </form>*/


export function createRegisterForm(){
        const form = document.createElement("form");
        form.className = "form";

        
        const button = document.createElement ("button");
        button.innerText = "Register";
        
        button.addEventListener("click", register);
        
        
        
        function register() {
                alert("Registered");
        }
        
        
        const title = document.createElement("h2");
        title.innerText = "Reset Passwort";

        const text = document.createElement("p");
        title.innerText = "Please enter your email to reveive a link to create an new password via email";

        
        const input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("placeholder", "email");


        
 
       



return button;

}








