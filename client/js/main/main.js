function handleSelectChange(event) {
  const selectedValue = event.target.value;

  // 선택된 값을 레이블에 업데이트
  const label = document.querySelector("label[for='headerSelect']");
  label.textContent = selectedValue;

  // 위 코드와 함께 아이콘 업데이트가 필요한 경우 아래 코드도 추가하세요.
  const icon = /*html*/ `<span
    class="inline-block bg-[url('./../../assets/icons/sprite.svg')] bg-no-repeat w-5 h-5 bg-[-155px_-70px] ml-[0.3125rem]"
  ></span>`;
  label.innerHTML += icon;
}

function initSwiper() {
  const swiperWrapper = document.getElementById('swiper-wrapper');

  fetch('http://localhost:3000/euid')
    .then(response => response.json())
    .then(data => {
      data.forEach(slide => {
        const slideDiv = `
          <div class="swiper-slide relative w-[20rem] h-[15.9375rem] bg-[#9DA1B4]">
            <h3 class="sr-only">${slide.name}</h3>
            <p class="text-white font-medium text-[1rem] absolute overflow-elliasis whitespace-normal line-clamp-2 max-w-[200px] max-h-[60px] leading-normal left-[30px] top-[30px]">
              ${slide.description}
            </p>
            <img class="absolute w-[13.75rem] right-0 bottom-0" src="${slide.image.thumbnail}" alt="${slide.image.alt}" />
            <a href="${slide.link}" target="_blank" class="text-black absolute text-[0.6875rem] left-[30px] top-[85px]">자세히 보기</a>
          </div>
        `;
        swiperWrapper.insertAdjacentHTML('beforeend', slideDiv);
      });

      // Initialize Swiper after creating slides
      const mainSwiper = new Swiper('.swiper .swiper-container', {
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        speed: 1500,
        slidesPerView: 1,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        preventClicks: false,
        preventClicksPropagation: false,
      });

      const pageSwiper = new Swiper('.swiper .swiper-container', {
        loop: true,
        pagination: {
          el: '.swiper-pagination2',
          type: 'progressbar',
        },
      });
      mainSwiper.controller.control = pageSwiper;
    });
}
function storyList() {
  const listWrapper = document.querySelector('.storyList');

  fetch('http://localhost:3000/story')
    .then(response => response.json())
    .then(data => {
      data.forEach(item => {
        const listItem = `
    <li class="w-[138px] h-[171px] pb-1">
      <a href="#" class="">
        <img
          class="w-full h-[120px] mb-3 rounded"
          src="${item.image}"
          alt="프로필 사진"
        />
        <p class="leading-normal text-[0.6875rem]">
          ${item.title}
        </p>
        <p class="text-[0.6875rem] leading-loose text-[#a7a7a7]">
          ${item.category} <span aria-hidden="true">&#124;</span> ${item.cardinality} ${item.name}
        </p>
      </a>
    </li>
    `;
        listWrapper.insertAdjacentHTML('beforeend', listItem);
      });
    });
}
initSwiper();
storyList();
const headerSelect = document.querySelector('#headerSelect');
headerSelect.addEventListener('change', handleSelectChange);
