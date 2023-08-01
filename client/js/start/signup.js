const phoneInput = document.querySelector(".inputSignUpMessage");
const submitButton = document.querySelector(".signUpMessageSend");

// 조건1: 휴대폰 번호 입력시 랜덤한 6자리 난수 생성
function generateRandomNumber(length) {
    const min = Math.pow(10, length - 1);
    const max = Math.pow(10, length) - 1;
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// 조건2 및 조건3: API로 생성된 6자리 난수 전송, 무료 API 사용
async function sendSMSCode(phoneNumber, randomNumber) {
    const API_ENDPOINT = 'https://api.yourfreeapi.com/freesms?apikey=YOUR_API_KEY';
    const response = await fetch(`${API_ENDPOINT}&to=${phoneNumber}&text=${randomNumber}`);
    const result = await response.json();
    console.log(result);
}

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

async function handleSubmit() {
    const phoneNumber = phoneInput.value;
    const randomNumber = generateRandomNumber(6);
    await sendSMSCode(phoneNumber, randomNumber);
}

phoneInput.addEventListener("input", handleInputChange);
submitButton.addEventListener("click", handleSubmit);
