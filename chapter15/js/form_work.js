// Define the value of the "username" input field
const usernameElement = document.getElementById("username");
usernameElement.value = "MyCoolUsername";


// Give focus to the "username" input field
usernameElement.focus();

// Show a tip associated with a selected text area
usernameElement.addEventListener("focus", e => {
    document.getElementById("usernameHelp").textContent = "Enter a unique username!";
  });
  // Hide the advice when the user moves onto a different field
  usernameElement.addEventListener("blur", e => {
    document.getElementById("usernameHelp").textContent = "";
  });

  // show if the email confirmation checkbox is checked
  document.getElementById("confirmation").addEventListener("change", e => {
    console.log(`Email confirmation request: ${e.target.checked}`);
  });

  // show the subscription type selected via radio button
  const subscriptionlements = Array.from(document.getElementsByName("subscription"));
  subscriptionlements.forEach(element => {
    element.addEventListener("change", e => {
        console.log(`Selected subscription: ${e.target.value}`);
    });
  });

  // show the selected nationality
  document.getElementById("nationality").addEventListener("change", e => {
    console.log(`Nationality code: ${e.target.value}`);
  });

  // show some info about the first form elemeent
  const formElement = document.querySelector("form");
  console.log(`Number of fields: ${formElement.elements.length}`);
  console.log(formElement.elements.password.type);
  console.log(formElement.elements.username.type);

  // shows all user input and cancels form data saending
  formElement.addEventListener("submit", e => {
    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;
    const email = e.target.elements.emailAddress.value;
    console.log(`Username: ${username}, password: ${password}, email: ${email}`);

    if (e.target.elements.confirmation.checked) {
        console.log("You asked for email confirmation");
    } else {
        console.log("You didn't ask for email confirmation");
    }
    switch (e.target.elements.subscription.value) {
        case "newspromo":
            console.log("You are subscribed to newsletters and promotions");
            break;
        case "news":
            console.log("You are subscribed to newsletters only.");
            break;
        case "no":
            console.log("You are not subscribed to anything.");
            break;
        default:
            console.error("Unknown subscription error");
    }
    switch (e.target.elements.nationality.value) {
        case "US":
            console.log("Hello! You are a US citizen");
            break;
        case "FR":
            console.log("Bonjour! You are a French citizen");
            break;
        case "ES":
            console.log("Hola! You are a Spanish citizen!");
            break;
        default:
            console.log("You nationality is unknown.");
    }
    e.preventDefault();
  });

  // validate password length
  document.getElementById("password").addEventListener("input", e => {
    const password = e.target.value;
    let passwordLength = "too short";
    let messageColor = "red";
    if (password.length >= 8) {
        passwordLength = "adequate";
        messageColor = "green";
    } else if (password.length >= 4) {
        passwordLength = "moderate";
        messageColor = "orange";
    }
    const passwordHelpElement = document.getElementById("passwordHelp");
    passwordHelpElement.textContent = `Length: ${passwordLength}`;
    passwordHelpElement.style.color = messageColor;
  });

  // checking an email address once it's entered
  document.getElementById("emailAddress").addEventListener("blur", e => {
    let emailAddressValidity = "";
    if (e.target.value.indexOf("@") === -1) {
        // the email address doesn't contain @
        emailAddressValidity = "Invalid address";
    }
    document.getElementById("emailHelp").textContent = emailAddressValidity;
  });