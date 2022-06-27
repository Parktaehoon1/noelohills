// 멀티미디어 요소 로딩 전 실행
$(document).ready();

// 멀티미디어 요소 로딩 완료 후 실행
window.onload = function(){
  // 상단 배너 슬라이드 
  new Swiper('.sw-banner', {
    loop:true,
    // fade 효과 ( swiper demo 확인 )
    effect: "fade",
    // pagination( swiper demo 확인, click 가능 )
    pagination: {
      el: ".sw-banner-pg",
      clickable: true
    },
    autoplay:{
      delay: 2500,
      disalbeOnInteraction: false,
    },
    // touchMove 제거 , 스와이퍼 api에서 찾아보기
    allowTouchMove:false,
  });

  // visual 슬라이드
  new Swiper('.sw-visual', {
    loop:true,
    // pagination( swiper demo 확인, click 가능 )
    pagination: {
      el: ".sw-visual-pg",
      clickable: true
    },
    autoplay:{
      delay: 2500,
      disalbeOnInteraction: false,
    },
  });
};