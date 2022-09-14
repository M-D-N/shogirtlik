var swiper = new Swiper(".mySwiper", {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

const modal = document.querySelector('.modal')
const modalBtn = document.querySelector('.navbar__nav--burger')
const body = document.querySelector('body')

modalBtn.addEventListener('click', () => {
    modal.classList.toggle('active')
    modalBtn.classList.toggle('active')
    body.classList.add('active')
})

modal.addEventListener('click', () => {
    modal.classList.remove('active')
    modalBtn.classList.remove('active')
    body.classList.remove('active')
})

const spoilerText = document.querySelector('.video__content--info--last')
const spoilerItem = document.querySelector('.program__content--spoiler')
const spoilerBtn_1 = document.querySelector('.video__content--btn')
const spoilerBtn_2 = document.querySelector('.program__content--btn')

spoilerBtn_1.addEventListener('click', () => {
    spoilerText.classList.toggle('active')
    spoilerBtn_1.classList.toggle('active')
})

spoilerBtn_2.addEventListener('click', () => {
    spoilerItem.classList.toggle('active')
    spoilerBtn_2.classList.toggle('active')
})

const video = document.querySelector('.video__content--item')
const videoPreview = document.querySelector('.video__content--player__preview')

videoPreview.addEventListener('click', () => {
    videoPreview.style.display = 'none'
    video.play()
})

video.addEventListener('click', () => {
    videoPreview.style.display = 'flex'
    video.pause()
})

document.addEventListener('DOMContentLoaded', function() {

    const deadline = new Date(2022, 09, 05);
    // id таймера
    let timerId = null;
    // склонение числительных
    function declensionNum(num, words) {
      return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
    }
    // вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
    function countdownTimer() {
      const diff = deadline - new Date();
      if (diff <= 0) {
        clearInterval(timerId);
      }
      const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
      const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
      const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
      const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;

      $days.textContent = days < 10 ? '0' + days : days;
      $hours.textContent = hours < 10 ? '0' + hours : hours;
      $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
      $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;

      const day = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
      const hour = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
      const minute = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
      const second = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;

      $day.textContent = days < 10 ? '0' + day : day;
      $hour.textContent = hours < 10 ? '0' + hour : hour;
      $minute.textContent = minutes < 10 ? '0' + minute : minute;
      $second.textContent = seconds < 10 ? '0' + second : second;
    //   $days.dataset.title = declensionNum(days, ['день', 'дня', 'дней']);
    //   $hours.dataset.title = declensionNum(hours, ['час', 'часа', 'часов']);
    //   $minutes.dataset.title = declensionNum(minutes, ['минута', 'минуты', 'минут']);
    //   $seconds.dataset.title = declensionNum(seconds, ['секунда', 'секунды', 'секунд']);
    }
    // получаем элементы, содержащие компоненты даты
    const $days = document.querySelector('.timer__days');
    const $hours = document.querySelector('.timer__hours');
    const $minutes = document.querySelector('.timer__minutes');
    const $seconds = document.querySelector('.timer__seconds');

    const $day = document.querySelector('.timer__day');
    const $hour = document.querySelector('.timer__hour');
    const $minute = document.querySelector('.timer__minute');
    const $second = document.querySelector('.timer__second');
    // вызываем функцию countdownTimer
    countdownTimer();
    // вызываем функцию countdownTimer каждую секунду
    timerId = setInterval(countdownTimer, 1000);
  });

//   scroll

ScrollReveal().reveal(".scroll", {
    duration: '1200',
    origin: "top",
    distance: "30px",
  });

// ScrollReveal().reveal(".scrollCon", {
//     duration: '1000',
//     origin: "bottom",
//     distance: "30px",
//     reset: true,
//     interval: 16
//   });
