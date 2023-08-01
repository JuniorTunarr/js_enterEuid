import {getNode, insertLast} from '../../lib/index.js';

function renderProductInfo() {
  const selectedProduct = getNode('.productWrap');

  // 로컬 스토리지에서 상품 데이터 가져오기
  const selectedItem = JSON.parse(localStorage.getItem('selectedItem'));
  if (!selectedItem) {
    alert('상품 정보를 불러올 수 없습니다.');
    return;
  }

  const productInfo = /* html */ `
    <section class="productImage">
      <h2 class="sr-only" id="productLabel">상품 이미지</h2>
      <figure class="productImage">
        <img class="productImg w-[320px] h-[225px] object-fill" src="${selectedItem.image}" alt="${selectedItem.alt}" />
      </figure>
    </section>
    <section class="productSeller">
      <h2 class="sr-only">판매자 정보</h2>
      <div class="productSeller flex justify-between gap-3.5 px-0 py-2.5">
        <dl class="flex items-center ml-3">
          <dd>
            <img
              src="./../../assets/images/main/rectangle.svg"
              alt="판매자 프로필 사진"
              class="sellerImage w-10 h-10 bg-[#919191] rounded-[50px]"
            />
          </dd>
          <div class="flex flex-col ml-3">
            <dt class="sellerName text-base font-semibold leading-[150%]"> ${selectedItem.user.name}</dt>
            <dd class="sellerLocation text-[0.6564rem] leading-[160%] font-normal text-left ml-1">
            ${selectedItem.user.place}
            </dd>
          </div>
        </dl>
        <div class="flex flex-col mr-3">
          <span class="text-[#5a85ee] text-base font-semibold leading-[150%]">
          ${selectedItem.user.temp}&#8451;<span class="ml-1">😀</span></span
          >
          <span class="text-[0.6564rem] leading-[150%] font-normal text-[#919191] text-right mr-1"
            >매너온도</span
          >
        </div>
      </div>
    </section>

    <section class="productInfo">
      <h2 class="sr-only">상품 정보</h2>
      <div class="productDetail flex flex-col pl-3 pr-0 pt-3 pb-5">
        <span class="productTitle text-[1.1664rem] font-semibold">${selectedItem.title} </span>
        <span
          class="productRelease text-[0.6564rem] font-normal text-[#919191] inline-block mt-1.5"
          >${selectedItem.category} &middot; <time datetime="2023-08-03T23:59">${selectedItem.createdAt}</time></span
        >
        <p
          class="productBrief w-[289px] h-[108px] text-sm font-normal leading-[160%] mt-[0.8125rem]"
        >
         ${selectedItem.contents}
        </p>
      </div>
    </section>
    <section class="relatedWrap">
    <h2 class="sr-only">관련 콘텐츠</h2>
    <p
      class="relatedContents w-80 px-3.5 py-3 border-t-[0.3px] border-t-[#919191] bg-[#FFF] border-l border-r shadow-sm text-base font-semibold leading-7"
    >
      이 글과 함께 봤어요
    </p>
    <ul class="relatedList flex gap-3 flex-wrap pt-1 pb-4 px-3.5">
      <li class="relatedItem w-[138px] pb-2">
        <a href="/" class="relatedLink">
          <img
            src="./../../assets/images/main/storyBg.png"
            alt="상품이미지"
            class="relatedImg w-full h-auto mb-1"
          />
          <p class="relatedTitle text-[0.6564rem] leading-[160%] font-normal mt-3 ml-0.5">
            스타벅스 아메리카노
          </p>
          <p class="relatedPrice text-[0.6564rem] leading-[150%] font-semibold ml-0.5">
            10,000원
          </p>
        </a>
      </li>
      <li class="relatedItem w-[138px] pb-2">
        <a href="/" class="relatedLink">
          <img
            src="./../../assets/images/main/storyBg.png"
            alt="상품이미지"
            class="relatedImg w-full h-auto mb-2"
          />
          <p class="relatedTitle text-[0.6564rem] leading-[160%] font-normal mt-3 ml-0.5">
            로지텍 키보드
          </p>
          <p class="relatedPrice text-[0.6564rem] leading-[150%] font-semibold ml-0.5">
            80,000원
          </p>
        </a>
      </li>
      <li class="relatedItem w-[138px] pb-2">
        <a href="/" class="relatedLink">
          <img
            src="./../../assets/images/main/storyBg.png"
            alt="상품이미지"
            class="relatedImg w-full h-auto mb-2"
          />
          <p class="relatedTitle text-[0.6564rem] leading-[160%] font-normal mt-3 ml-0.5">
            스타벅스 아메리카노
          </p>
          <p class="relatedPrice text-[0.6564rem] leading-[150%] font-semibold ml-0.5">
            10,000원
          </p>
        </a>
      </li>
      <li class="relatedItem w-[138px] pb-2">
        <a href="/" class="relatedLink">
          <img
            src="./../../assets/images/main/storyBg.png"
            alt="상품이미지"
            class="relatedImg w-full h-auto mb-2"
          />
          <p class="relatedTitle text-[0.6564rem] leading-[160%] font-normal mt-3 ml-0.5">
            로지텍 키보드
          </p>
          <p class="relatedPrice text-[0.6564rem] leading-[150%] font-semibold ml-0.5">
            80,000원
          </p>
        </a>
      </li>
    </ul>
  </section>
    `;
  insertLast(selectedProduct, productInfo);
}

function renderFooter() {
  const selectedItem = JSON.parse(localStorage.getItem('selectedItem'));
  if (!selectedItem) {
    alert('상품 정보를 불러올 수 없습니다.');
    return;
  }
  const footer = /* html */ `
    <footer class="fixed bottom-0 ml-0-0 mr-0-0 w-[20rem] border border-gray-200">
      <div
        class="bg-white max-w-full rounded-t-lg flex w-full h-[calc(100%_-_87px)] justify-between pt-2 pb-2 z-10"
      >
        <div class="flex gap-3 ml-3">
          <span
            aria-label="좋아요"
            class="inline-block bg-[url('./../../assets/icons/sprite.svg')] bg-no-repeat w-5 h-5 bg-[-77px_-229px] mt-2"
          ></span>
          <span class="w-[1px] h-[34px] bg-[#919191]"></span>
          <div class="flex flex-col justify-center mb-2">
            <span class="text-[0.875rem] leading-[160%] font-semibold ml-0.5">${selectedItem.price}원</span>
            <span class="text-[0.6564rem] leading-4 font-normal ml-0.5 text-[#5a85ee]"
              >가격 제안하기</span
            >
          </div>
        </div>

        <button class="p-2 rounded-lg bg-[#5A85EE]  mr-3">
          <span class="text-[white] text-[0.875rem] inline-block leading-4 pr-1 pl-1">채팅하기</span>
        </button>
      </div>
    </footer>
  `;

  const body = getNode('body');
  insertLast(body, footer);
}

function handleClear() {
  localStorage.clear();
  window.history.back();
}

function handleBack() {
  const backButton = document.querySelector('.headerItem > a');
  if (backButton) {
    backButton.addEventListener('click', handleClear);
  }
}
document.addEventListener('DOMContentLoaded', () => {
  handleBack();
  renderProductInfo();
  renderFooter();
});
