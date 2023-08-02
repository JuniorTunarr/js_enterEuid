function createChatItem(chatData) {
  const listItem = /*html*/ `
    <li class="qnaChatItem h-[4.25rem] pt-[0.8rem] pb-4 px-[1.15rem] border-[solid] border-contentSecondary">
      <a href="chatcontent.html" class="qnaChatLink items-center flex mr-24">
        <img src="${chatData.user.image}" alt="프로필 이미지"
          class="qnaChatProfileImg w-[2.3rem] h-[2.3rem] bg-contentSecondary mr-4 rounded-[5rem]" />
        <div class="qnaChatProfile shrink-0 w-full">
          <span class="qnaChatName text-paragraph-Medium font-semiBold leading-lh-150">${
            chatData.user.name
          }</span>
          <span class="qnaChatInfo text-[0.65rem] leading-lh-160">${chatData.user.place} &#183;
            <time datetime="${chatData.user.createdAt}">${chatData.user.createdAt}</time>
          </span>
          <p class="qnaChatMessage overflow-hidden text-ellipsis whitespace-nowrap text-paragraph-Medium leading-lh-160">
            ${chatData.chat}
          </p>
        </div>
        ${
          chatData.attachment
            ? `<img src="${chatData.attachment}" alt="QNA 게시글 첨부 이미지" class="qnaChat__img w-9 h-9 mr-3" />`
            : ''
        }
      </a>
    </li>
  `;
  return listItem;
}

// Function to render chat items
function renderChatList() {
  const chatListWrapper = document.querySelector('.qnaChatList');

  fetch('http://localhost:3000//chatlist')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      data.forEach(chatItemData => {
        const chatItemHTML = createChatItem(chatItemData);
        chatListWrapper.insertAdjacentHTML('beforeend', chatItemHTML);
      });
    });
}

// Call the renderChatList function to populate the chat list
renderChatList();
