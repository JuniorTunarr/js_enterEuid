import {getNode, getNodes, insertLast} from '../../lib/index.js';

function selectedGoods(e) {
  const itemId = e.currentTarget.dataset.id;
  fetch(`http://localhost:3000/products/${itemId}`)
    .then(response => response.json())
    .then(itemData => {
      // 로컬 스토리지에 해당 데이터 저장
      localStorage.setItem('selectedItem', JSON.stringify(itemData));
    });
}

function renderExchangeGoods() {
  const listWrapper = getNode('.exchangeList');

  fetch('http://localhost:3000/products')
    .then(response => response.json())
    .then(data => {
      data.forEach(item => {
        // Status에 따른 분기처리
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
                  ><time datetime='2023-08-01T23:59'>${item.createdAt}</time>
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
      const selectedItems = getNodes('.exchangeItem');
      selectedItems.forEach(good => {
        good.addEventListener('click', selectedGoods);
      });
    });
}

function handleSelectChange(e) {
  const selectedValue = e.target.value;

  // 선택된 값을 레이블에 업데이트
  const label = document.querySelector("label[for='headerSelect']");
  label.textContent = selectedValue;

  // 위 코드와 함께 아이콘 업데이트가 필요한 경우 아래 코드도 추가하세요.
  const icon = /*html*/ `<span
    class="inline-block bg-[url('./../../assets/icons/sprite.svg')] bg-no-repeat w-5 h-5 bg-[-155px_-70px] ml-[0.3125rem]"
  ></span>`;
  label.innerHTML += icon;
}

const headerSelect = document.querySelector('#headerSelect');

headerSelect.addEventListener('change', handleSelectChange);
renderExchangeGoods();
