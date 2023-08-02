document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form[name="chatMessageForm"]');

  form.addEventListener('submit', (event) => {
    event.preventDefault(); // 폼의 기본 동작(새로고침)을 막습니다.

    const messageInput = document.querySelector('#messageInput');
    const message = messageInput.value.trim();

    if (!message) {
      return; // 메시지가 비어있으면 아무것도 하지 않습니다.
    }

    const chatMessageBox = document.createElement('div');
    chatMessageBox.className = 'myChat flex flex-col items-end justify-center gap-2 mt-2 mb-2';

    const chatContents = document.createElement('div');
    chatContents.className =
      'chatContents chatSend flex items-end gap-[0.2rem] px-3 py-0';
    chatMessageBox.appendChild(chatContents);

    const chatTime = document.createElement('time');
    chatTime.className =
      'chatTime text-contentSecondary text-[0.65rem] leading-lh-160';
    chatTime.setAttribute('datetime', new Date().toISOString());
    chatTime.textContent = new Date().toLocaleTimeString('ko-KR', {
      hour: '2-digit',
      minute: '2-digit',
    });
    chatContents.appendChild(chatTime);

    const chatMessage = document.createElement('p');
    chatMessage.className =
      'chatMessage text-[white] text-paragraph-Medium leading-lh-160 px-3.5 py-2 rounded-[20px] bg-blue-400';
    chatMessage.textContent = message;
    chatContents.appendChild(chatMessage);

    const yourChatBox = document.querySelector('.yourChatBox');
    yourChatBox.appendChild(chatMessageBox);

    // 메시지 입력창을 비웁니다.
    messageInput.value = '';
  });
});

