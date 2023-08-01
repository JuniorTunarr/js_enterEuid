// main.js

// 클릭한 요소에 대한 배경색과 글자색을 변경하고 이미지를 변경하는 함수
function toggleButton(e) {
    const button = e.target.closest('.button');
    const isSelected = button.classList.contains('selected');
    const icon = button.querySelector('.icon');

    if (isSelected) {
    button.classList.remove('selected');
    button.style.backgroundColor = '#a7a7a7';
    button.style.color = 'black';
    if (icon) {
        icon.style.backgroundPosition = '-191px -49px';
    }
    } else {
    button.classList.add('selected');
    button.style.backgroundColor = '#373F67';
    button.style.color = 'white';
    if (icon) {
        icon.style.backgroundPosition = '-216px -48px';
    }
    }
}


// 검색 기능을 구현하는 함수
//한글!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 어떻게??????????????????
function searchFunction(e) {
    const rawSearchTerm = e.target.value;
    const searchTermHangul = Hangul.a(Hangul.d(rawSearchTerm)).toLowerCase();
    const searchTermEnglish = rawSearchTerm.toLowerCase().replace(/\s+/g, "");
    const buttons = document.querySelectorAll(".button");

    buttons.forEach((subtitle) => {
    const parentButton = subtitle.closest(".button");
    const subtitleText = subtitle.textContent.toLowerCase().replace(/\s+/g, "");

      // 검색어가 비어 있는 경우 모든 버튼을 표시하고, 그렇지 않으면 검색어와 일치하는 버튼만 표시합니다.
    if (searchTermHangul === "" && searchTermEnglish === "") {
        parentButton.style.display = "flex";
    } else if (subtitleText.includes(searchTermHangul) || subtitleText.includes(searchTermEnglish)) {
        parentButton.style.display = "flex";
    } else {
        parentButton.style.display = "none";
    }
    });
}




// 이벤트 리스너의 호출 빈도를 제한하기 위한 throttle 함수
function throttle(func, wait) {
    let context, args, timeout, lastExecution = 0;
    const throttled = function () {
        context = this;
        args = arguments;
        const now = Date.now();
        const remaining = wait - (now - lastExecution);

        if (remaining <= 0 || remaining > wait) {
            lastExecution = now;
            func.apply(context, args);
        } else if (!timeout) {
            timeout = setTimeout(() => {
                lastExecution = now;
                func.apply(context, args);
                timeout = null;
            }, remaining);
        }
    };
    return throttled;
}

// 페이지 로드 후 이벤트를 등록
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.button');
    const searchBox = document.querySelector('.Search');

    buttons.forEach((button) => {
        button.addEventListener('click', toggleButton);
    });

    searchBox.addEventListener('input', throttle(searchFunction, 300));
});
