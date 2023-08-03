// Function to create a qnaPost item
function createQnaPostItem(postData) {
  const listItem = `
    <li class="qnaPostItem w-full px-3 py-3">
    <a href="qnaboard.html" class="qnaPostLink flex gap-[0.2rem] items-start">
    <div class="qnaPostText w-[227px] leading-[120%] flex flex-col">
          <span class="qnaPostTopic rounded text-white text-[0.6rem] font-semiBold px-3 py-0 bg-slate-400 max-w-[52px] text-center">${
            postData.label
          }</span>
          <p class="qnaPostTitle text-[0.8rem] text-ellipsis whitespace-nowrap overflow-hidden w-56">${
            postData.title
          }</p>
          <p class="qnaPostContent text-[#B1B4C3] text-ellipsis whitespace-nowrap overflow-hidden text-[0.65rem] leading-lh-160">${
            postData.detail
          }</p>
          <p class="qnaPostInfo text-contentTertiary text-[0.65rem]">${
            postData.place
          } &#183; <time datetime="${postData.createdAt}">${
            postData.createdAt
          }</time> &#183; 조회 ${postData.views || '0'}</p>
        </div>

        ${
          postData.image
            ? `<div class="qnsPostImg">
              <img src="${
                postData.image
              }" alt="QNA 게시글 첨부 이미지" class="qnaPostImg w-[62px] h-[62px]" />
              <div class="qnaboardEmoji flex justify-end qnaboard_first pl-1.5 mt-1">
                <p class="qnaPostInfo text-contentTertiary text-[0.75rem]">
                  <span class="sprite inline-block bg-[url('./../../assets/icons/sprite.svg')] bg-no-repeat w-3.5 h-3.5 bg-[-291px_-10px] spriteRecommend"></span>
                  <span class="sr-only">추천</span>${postData.like || '0'}
                </p>
                <p class="qnaPostInfo text-contentTertiary text-[0.75rem]">
                  <span class="sprite inline-block bg-[url('./../../assets/icons/sprite.svg')] bg-no-repeat w-3.5 h-3.5 bg-[-266px_-10px] spriteComment"></span>
                  <span class="sr-only">댓글</span>${postData.comment || '0'}
                </p>
              </div>
            </div>`
            : ''
        }
      </a>
    </li>
  `;
  return listItem;
}

// Function to render qnaPost items
function renderQnaPostList() {
  const qnaPostListWrapper = document.querySelector('.qnaPostList');

  fetch('http://localhost:3000/qnaMain')
    .then(response => response.json())
    .then(data => {
      data.forEach(qnaPostData => {
        const qnaPostItemHTML = createQnaPostItem(qnaPostData);
        qnaPostListWrapper.insertAdjacentHTML('beforeend', qnaPostItemHTML);
      });
    });
}

// Call the renderQnaPostList function to populate the qnaPost list
renderQnaPostList();
