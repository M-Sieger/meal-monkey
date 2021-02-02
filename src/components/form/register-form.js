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

        const title = document.createElement("h2");
        title.innerText = "Reset Passwort";
        
        

        const button = document.createElement ("button");
        button.innerText = "Show me my email";
 
        function register() {
                alert("msieger1994@gmail.com");
}

button.addEventListener("click", register);

return button;

}








