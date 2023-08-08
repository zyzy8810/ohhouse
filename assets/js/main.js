
$(function (){ //문서로드 후 실행 1번만!



  let lastScroll = 0;

  $(window).scroll(function(){
    curr=$(this).scrollTop();

    bottomTarget = $('.header-bottom').offset().top;
    topTarget = $('.header-top').offset().top;


    h = ($('.banner-area').hasClass('hide'))?0:$('.banner-area').height();

    if(curr >= h){
      $('.header .header-top .fix-top').addClass('fix')
    }else{
      $('.header .header-top .fix-top').removeClass('fix')
    }

    
    // 내 현재스크롤 헤더바텀시작지점보다 컸을때  top30으로 가려놓기
    if(curr >= bottomTarget){
      $('.header-bottom .fix-bottom').addClass('fix');

      // 헤더바텀시작지점보다 큰지점 부터 내릴때와 올릴때 이벤트주기
      if(curr > lastScroll){//내릴때
        $('.header-bottom .fix-bottom').removeClass('show')
      }else{ //올릴때
        $('.header-bottom .fix-bottom').addClass('show')
      }
      lastScroll = curr;


    }
    //내 현재스크롤 헤더탑시작 지점보다 작을대 모든것다빼기
    if(curr <= topTarget){
      $('.header-bottom .fix-bottom').removeClass('fix')
      $('.header-bottom .fix-bottom').removeClass('show')
    }


  })


  $('.ranking-area').hover(
    function() {
      $(this).find('.ranking-hover').fadeIn();
    },
    function() {
      $(this).find('.ranking-hover').fadeOut(function() {
        $(this).css('display', 'none');
      });
    }
  );

  // $('.ranking-hover .close-btn').click(function() {
  //   $(this).closest('.ranking-hover').fadeOut(function() {
  //     $(this).css('display', 'none');
  //   });
  // });


  $(document).click(function(e){
    if($('.search-area').has(e.target).length==0){
      $('.search-area').removeClass('active');
    }
  })



  $('.header .banner-area .close').click(function(){
    $('.header .banner-area').addClass('hide')
  })

  $('.header .nav-item a').mouseover(function(){
    menuName = $(this).data('menu');
    $('.header .nav-item a').removeClass('on')
    $(this).addClass('on')
    $(menuName).addClass('on').siblings().removeClass('on')
  })

  $('.header').mouseleave(function(){
    $('.header .nav-item a').removeClass('on')
    $('.header-bottom .menu-list').removeClass('on').eq(0).addClass('on')
  })


    $(".search-area").click(function() {
      $(this).toggleClass("active");
    });



  swiper
  var ranking = new Swiper(".ranking", {
    direction: "vertical",
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
  });

  var eventSlide = new Swiper(".event-slide", {
    rewind: true,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    pagination: {
      slidesPerView: 1,
      loop:true,
      el: ".fraction",
      type: "fraction",
    },
    navigation:{
      nextEl:'.next',
      prevEl:'.prev',
    }
    
  });

  var cateSlide = new Swiper(".cate-slide", {
    slidesPerView: 'auto',
    freeMode: true,
    navigation:{
      nextEl:'.sc-category .next',
      prevEl:'.sc-category .prev',
    }
  });

  var dealSlide = new Swiper(".deal-slide", {
    slidesPerView: 4,
    spaceBetween: 30,
    freeMode: true,
    navigation:{
      nextEl:'.sc-deal .next',
      prevEl:'.sc-deal .prev',
    }
  });


  var saleSlide = new Swiper(".sc-sale .sale-slide", {
    slidesPerView: 4,
    freeMode: true,
    navigation: {
      nextEl: ".sc-sale .next",
      prevEl: ".sc-sale .prev",
    },
  });

  var recommend = new Swiper(".sc-recommend .cont-slide", {
    slidesPerView: 6,
    navigation: {
      nextEl:'.sc-recommend .next',
      prevEl:'.sc-recommend .prev',
    },
  });


  var saleSlide = new Swiper(".sc-sale .sale-slide", {
    slidesPerView: 4,
    freeMode: true,
    navigation: {
      nextEl: ".sc-sale .next",
      prevEl: ".sc-sale .prev",
    },
  });




  var swiper = new Swiper(".tab-slide", {
    slidesPerView: 'auto',
        navigation: {
      nextEl: ".sc-best .next",
      prevEl: ".sc-best .prev",
    },
  });
  



setInterval(() => {

  $('.date11').each(function(index,element){
     time=$(this).data('time');
      masTime = new Date(time);
      todayTime = new Date();
      console.log(time);
      diff = masTime - todayTime;
      diffDay = String(Math.floor(diff / (1000*60*60*24)));
      diffHour =String( Math.floor((diff / (1000*60*60)) % 24)).padStart(2,"0");
      diffMin = String(Math.floor((diff / (1000*60)) % 60)).padStart(2,"0");
      diffSec = String(Math.floor(diff / 1000 % 60)).padStart(2,"0");
      element.innerHTML=`${diffDay}일:${diffHour}:${diffMin}:${diffSec}초`;
  })
  
}, 1000);




})//