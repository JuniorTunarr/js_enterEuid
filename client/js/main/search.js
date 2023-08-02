import {
  addClass,
  getNode,
  removeClass,
  insertLast,
  clearContents,
  debounce,
  tokenize,
  matches,
  getNodes,
} from '../../lib/index.js';

function filterGoods(searchValue) {
  if (!searchValue) return;

  const listWrapper = getNode('.exchangeList');
  clearContents(listWrapper);

  fetch('http://localhost:3000/products')
    .then(response => response.json())
    .then(data => {
      let filteredData;
      const tokens = tokenize(searchValue);
      if (tokens.length === 1 && data.find(item => item.category === searchValue)) {
        filteredData = data.filter(item => item.category === searchValue);
      } else {
        filteredData = data.filter(item => {
          const title = item.title.toLowerCase();
          return matches(title, [...tokens]);
        });
      }

      filteredData.forEach(item => {
        const dataStatus =
          item.status === 'underReservation'
            ? `<span class="bg-[#719cf7] text-white text-[0.625rem] font-normal inline-block leading-[1.6] mr-1 mt-1  px-1.5 py-1 rounded-[0.3125rem]">예약중</span>`
            : item.status === 'soldOut'
            ? `<span class="bg-[#9da1b4] text-white text-[0.625rem] font-semibold inline-block leading-normal mr-1 mt-1 px-1.5 py-1 rounded-[0.3125rem]">판매완료</span>`
            : `<span class="mr-0"></span>`;
        const listItem = `
          <li class="exchangeItem flex" data-id="${item.id}">
            <a
              href="productInfo.html?id=${item.id}"
              class="relative flex w-full gap-3 p-3 border-b-[#bdbdbd] border-b border-solid"
            >
              <img
                src="${item.image}"
                alt="중고거래 상품"
                class="w-[90px] h-[90px]"
              />
              <div class="flex w-full gap-1 flex-1 pt-3 flex-col">
                <p class="text-sm">${item.title}</p>
                <p class="text-[0.625rem] text-[#9da184] mt-0.5">
                  ${item.user.place}<span aria-hidden="true"> &middot; </span
                  ><time datetime='2023-08-03T23:59'>${item.createdAt}</time>
                </p>
                <p class="mt-1">
                 ${dataStatus}
                  <span class="inline-block align-text text-sm font-semibold pt-1"
                    >${item.price}원</span
                  >
                </p>
                <p class="absolute text-[0.625rem] right-2.5 bottom-[5px]">
                  <span
                    class="inline-block bg-[url('./../../assets/icons/sprite.svg')] bg-no-repeat w-5 h-5 bg-[-190px_-85px] transform translate-x-0.5 translate-y-2.5"
                  ></span>
                  <span class="sr-only">좋아요</span>
                  <span class="inline-block pl-0.5 pr-1 pt-0.5 pb-0">${item.likes}</span>
                </p>
              </div>
            </a>
          </li>
        `;
        insertLast(listWrapper, listItem);
      });
    });
}

const handleInput = () => {
  const inputContent = getNode('.searchInput');
  const keyBoardWrap = getNode('.keyBoardWrap');

  const searchButtons = getNodes('.searchKeyword');

  searchButtons.forEach(button => {
    button.addEventListener('click', () => {
      const category = button.textContent.trim();
      filterGoods(category);
    });
  });
  inputContent.addEventListener(
    'keyup',
    debounce(e => {
      const inputLength = e.target.value.length;
      if (inputLength > 0) {
        removeClass(keyBoardWrap, 'opacity-0');
        filterGoods(e.target.value);
      } else {
        addClass(keyBoardWrap, 'opacity-0');
      }
    }, 500),
  );

  inputContent.addEventListener('focus', () => {
    removeClass(keyBoardWrap, 'opacity-0');
  });
  inputContent.addEventListener('blur', () => {
    addClass(keyBoardWrap, 'opacity-0');
  });
};

document.addEventListener('DOMContentLoaded', handleInput);
