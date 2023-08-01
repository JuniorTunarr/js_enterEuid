


// 폼 요소 가져오기
const chatMessageForm = document.querySelector('[name="chatMessageForm"]');
// 메시지 입력 요소 가져오기
const messageInput = document.querySelector('#messageInput');
// 채팅 영역 스크롤 숨기기
const scrollArea = document.querySelector(".scroll");
scrollArea.style.overflowY = "hidden";


// 새로운 채팅 메시지 추가 함수
function addChatMessage(message) {
  // 새로운 채팅 메시지 HTML 생성
  const chatMessageHTML = `

  <div class="chatarea w-full flex justify-end">
  <div class="chatContents chatSend flex items-end gap-[0.2rem] py-0">
    <p
      class="chatMessage text-[white] text-paragraph-Medium leading-lh-160 px-3.5 py-2 rounded-[5px] bg-blue-400"
    >
    ${message}
    </p>
  </div>
</div>
    `;

  // 채팅 영역을 가져와서 새로운 채팅 메시지 HTML 추가하기
  const chatArea = document.querySelector('.myChat');
  chatArea.insertAdjacentHTML('beforeend', chatMessageHTML);

  // 입력창 초기화
  messageInput.value = '';
   // 스크롤바를 숨기고 최하단으로 고정하기
   
   scrollArea.scrollTop = scrollArea.scrollHeight;
   setTimeout(() => {
    scrollArea.style.overflowY = "auto";
   }, 500);


}



// 폼에서 submit 이벤트 발생 시 메시지 추가 및 처리
chatMessageForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const message = messageInput.value;
  if (message) {
    addChatMessage(message);
  }
});
