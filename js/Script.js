// Selecting: text input, buttons, and other necessary elements
const textInput = document.querySelector(".text_input");
const btnEncrypt = document.querySelector (".btn_encrypt");
const btnDecrypt = document.querySelector (".btn_decrypt");
const btnCopy = document.querySelector (".btn_copy");
const message = document.querySelector (".message")
const finalMessage = document.querySelector(".final_message");
const info = document.querySelector (".info");

//Defining encryption rules
let encryption = [
    ["e", "enter"], 
    ["o", "ober"], 
    ["i", "imes"],
    ["a", "ai"],
    ["u", "ufat"], 
]


// Function for visual variations after entering text
const swap = (newValue) => {
    finalMessage.innerHTML = newValue; // Updating the content of final message
    finalMessage.classList.add("message-style");// Adding a CSS class to style .message 
    textInput.value = ""; // Clearing the text input
    message.style.backgroundImage = "none"; // Removing background image from .message
    info.style.display = "none"; // Hiding .info
    btnCopy.style.display = "block"; // Showing copy button

}

// Function to restart the page to initial state
const restart = () => {
    finalMessage.innerHTML = "Ningun mensaje ha sido encontrado"; // Reseting to initial message
    finalMessage.classList.remove("message-style"); // Removing the added class in the swap function
    // Resetting background image only for desktop screens
    if (window.innerWidth > 1023) {
        message.style.backgroundImage = "url('./imagenes/muneco.svg')"; //Showing image for desktop screens
    } else {
        message.style.backgroundImage = "none"; // Removing the image for mobile and tablets
    }
    info.style.display = "block"; // Showing .info
    textInput.style.display = "block"; // Showing the text input
    btnCopy.style.display = "none"; // Hiding the copy button
    textInput.focus(); // Setting focus on the text input    

}

// ENCRYPT BUTTON functionality:

// Adding an event listener to the "Encrypt" button
btnEncrypt.addEventListener("click", () => {
    const text = textInput.value.toLowerCase() // Getting the input text to lowercase
    if(text != "") { // If there's input text
        // We define the encrypt function
        function encrypt (newText){
            for(let i = 0; i < encryption.length; i++){
                if (newText.includes(encryption[i][0])){ // Checking if text includes a character that needs to be encrypted
                    newText = newText.replaceAll(encryption[i][0], encryption[i][1]); // Replacing characters using encryption rules 
                };
            };
            return newText; // Returning the encrypted text
        };
    } else {
        alert("Ingresa el texto a encriptar") // If there's no text, it will show this alert
        restart(); // Resetting the page to initial state
    }
    // We execute swap and encrypt functions over the textInput value.
    swap(encrypt(text));    

});

// DECRYPT BUTTON functionality:

// Adding an event listener to the "Decrypt" button
btnDecrypt.addEventListener("click", () => {
    const text = textInput.value.toLowerCase(); // Getting the input text to lowercase
    if(text != "") { // If there's input text
        // We define the decrypt function
        function decrypt (newText){
            for(let i = 0; i < encryption.length; i++){
                if (newText.includes(encryption[i][1])){ // Checking if text includes encrypted sequences that need to be decrypted
                    newText = newText.replaceAll(encryption[i][1], encryption[i][0]); // Replacing encrypted sequences using encryption rules
                };
            };
            return newText; // Returning dencrypted text
        };
    } else {
        alert("Ingresa el texto a desencriptar"); // If there's no text, it will show this alert
        restart(); // Resetting the page to initial state
    }
    // We execute swap and decrypt functions over the textInput value.
    swap(decrypt(text)); 

});

// COPY BUTTON functionality:

// Adding an event listener to the "Copy" button
btnCopy.addEventListener("click", () => {
    let text = finalMessage; // Getting the final message
    text.select (); // Selecting the content of text
    document.execCommand('copy'); // Executing the command to copy
    alert("El texto ha sido copiado"); // Showing an alert indicating the text has been copied
    restart(); // Resetting the page to initial state

});