const swiperWrapper = document.getElementById('swiper-wrapper');

export const swipers = fetch('http://localhost:3000/euid')
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
