const phoneInput = document.querySelector(".inputSignUpMessage");
const submitButton = document.querySelector(".signUpMessageSend");
 

function handleInputChange(e) {
    const isValidPhoneNumber = /^(010{1})[0-9]{3,4}[0-9]{4}$/.test(e.target.value);

    if (isValidPhoneNumber) {
        submitButton.disabled = false;
        submitButton.classList.remove("bg-[#FFFFFF]");
        phoneInput.style.borderColor = "green";
    } else {
        submitButton.disabled = true;
        submitButton.classList.add("bg-[#FFFFFF]");
        phoneInput.style.borderColor = "red";
    }
}

phoneInput.addEventListener("input", handleInputChange);