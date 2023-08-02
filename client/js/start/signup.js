const phoneNumberInput = document.querySelector('.inputSignUpMessage');
const countButton = document.querySelector('.signUpMessageSend');

function enableButton(button) {
  button.style.color = 'black';
  button.style.fontWeight = '600';
  button.style.border = '1px solid #93C5FD';
  button.disabled = false;
}

function disableButton(button) {
  button.style.color = '';
  button.style.fontWeight = '';
  button.style.border = '';
  button.disabled = true;
}

function validatePhoneNumber(phoneNumber) {
  const regex = /^(?:\+82|0)[0-9]{10}$/;
  return regex.test(phoneNumber);
}

function onPhoneNumberInput() {
  const inputValue = phoneNumberInput.value.replace(/\D/g, '');
  phoneNumberInput.value = inputValue;
  const isPhoneNumberValid = validatePhoneNumber(inputValue);

  const invalidNumberMessage = document.querySelector('.invalidNumberMessage');
  if (inputValue.length > 0 && !isPhoneNumberValid) {
    invalidNumberMessage.classList.remove('hidden');
  } else {
    invalidNumberMessage.classList.add('hidden');
  }

  if (isPhoneNumberValid) {
    enableButton(countButton);
  } else {
    disableButton(countButton);
  }
}

function generateRandomNumber() {
  return Array.from({length: 6}, () => Math.floor(Math.random() * 10)).join('');
}

phoneNumberInput.addEventListener('input', onPhoneNumberInput);

function getCreatedSignUpElements() {
  const signUpInfo = document.querySelector('.singUpInfo');
  signUpInfo.style.display = 'none';
  const signInInMain2 = document.createElement('div');
  signInInMain2.className = 'signInInMain2';
  signInInMain2.innerHTML = `
  <main class="singInMain flex justify-start items-stretch gap-3 flex-col flex-nowrap">
  <input inputmode="tel" maxlength="6" placeholder="인증번호 입력" class="signInMessageCheck px-3 py-2 border-solid border-black border-[0.5px]"/>
  <span class="signInWarningMessage text-xs leading-relaxed text-gray-500">어떤 경우에도 타인에게 공유하지마세요!</span>
</main>
<div class="signInFooter2 flex justify-start items-stretch mx-3 flex-col flex-nowrap">
  <button id="signInStartBtn" class="signInStartBtn text-white text-sm font-bold leading-snug mt-3 mb-2.5 py-3 rounded-lg border-none bg-gray-500 disabled">동의하고 시작하기</button>
  <a href="#" class="signInStartNo text-xs leading-relaxed underline text-center text-gray-500">인증번호가 오지 않아요?</a>
  `;
  return signInInMain2;
}

function handleVerificationInput(verificationInput, generatedRandomNumber) {
  const signInStartBtn = document.getElementById('signInStartBtn');

  const isCodeValid = verificationInput.value === generatedRandomNumber;
  if (isCodeValid) {
    signInStartBtn.classList.replace('bg-gray-500', 'bg-darkcyan');
    signInStartBtn.classList.replace('border-none', 'border-black');
    enableButton(signInStartBtn);
    signInStartBtn.addEventListener('click', () => {
      window.location.href = '/views/main/main.html';
    });
  } else {
    signInStartBtn.classList.replace('bg-darkcyan', 'bg-gray-500');
    signInStartBtn.classList.replace('border-black', 'border-none');
    disableButton(signInStartBtn);
  }
}

function showAlertWithCode(generatedRandomNumber) {
  return new Promise(resolve => {
    alert(`인증번호: ${generatedRandomNumber}`);
    resolve();
  });
}

async function onCountButtonClick() {
  const phoneNumber = phoneNumberInput.value;
  if (!validatePhoneNumber(phoneNumber)) {
    phoneNumberInput.value = '';
    alert('유효하지 않은 휴대폰 번호입니다. 숫자로 이루어진 11자리의 번호를 입력해주세요.');
    disableButton(countButton);
    return;
  }

  const signInInMain2 = getCreatedSignUpElements();
  countButton.insertAdjacentElement('afterend', signInInMain2);
  disableButton(countButton);

  const generatedRandomNumber = generateRandomNumber();
  await showAlertWithCode(generatedRandomNumber);

  const verificationInput = signInInMain2.querySelector('.signInMessageCheck');
  verificationInput.value = generatedRandomNumber;
  handleVerificationInput(verificationInput, generatedRandomNumber);

  verificationInput.addEventListener('input', () =>
    handleVerificationInput(verificationInput, generatedRandomNumber),
  );
}

countButton.addEventListener('click', onCountButtonClick);
