const phoneNumberInput = document.querySelector('.inputPhoneNumber');
const countButton = document.querySelector('.buttonSendVerification');

function enableButtonStyles(button) {
  button.style.color = 'black';
  button.style.fontWeight = '600';
  button.style.border = '1px solid #93C5FD';
  button.disabled = false;
}

function disableButtonStyles(button) {
  button.style.color = '';
  button.style.fontWeight = '';
  button.style.border = '';
  button.disabled = true;
}

function validatePhoneNumber(phoneNumber) {
  const numericRegex = /^[0-9]+$/;
  if (!numericRegex.test(phoneNumber)) {
    return;
  }

  if (phoneNumber.length !== 11) {
    return false;
  }

  return true;
}

function generateRandomNumber() {
  let randomNumber = '';
  for (let i = 0; i < 6; i++) {
    randomNumber += Math.floor(Math.random() * 10);
  }
  return randomNumber;
}

phoneNumberInput.addEventListener('input', () => {
  const inputValue = phoneNumberInput.value;

  if (inputValue.length > 0 && !isNaN(inputValue[0])) {
    enableButtonStyles(countButton);
  } else {
    disableButtonStyles(countButton);
  }
});

let generatedRandomNumber = '';

function checkVerificationCodeAndEnableButtonStyles(input, button) {
  if (input.value === generatedRandomNumber) {
    enableButtonStyles(button);
  } else {
    disableButtonStyles(button);
  }
}

countButton.addEventListener('click', () => {
  const phoneNumber = phoneNumberInput.value;

  if (validatePhoneNumber(phoneNumber)) {
    enableButtonStyles(countButton);
    generatedRandomNumber = generateRandomNumber();
    alert(`인증번호: ${generatedRandomNumber}`);
  } else {
    phoneNumberInput.value = '';
    alert('유효하지 않은 휴대폰 번호입니다. 숫자로 이루어진 11자리의 번호를 입력해주세요.');
    disableButtonStyles(countButton);
  }
});

const submitButton = document.querySelector('.signInStartBtn');

if (submitButton) {
  signInInMain2.querySelector('.verificationInput').addEventListener('input', event => {
    const verificationInput = event.target;
    checkVerificationCodeAndEnableButtonStyles(verificationInput, submitButton);
  });

  submitButton.addEventListener('click', () => {
    const randomString = generateRandomString(30);
    alert(randomString);
  });
}

function generateRandomString(stringLength) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let randomString = '';

  for (let i = 0; i < stringLength; i++) {
    randomString += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return randomString;
}
