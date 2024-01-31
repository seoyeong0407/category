$(document).ready(function(){

  $(window).scroll(function(){
    $("#txt2").text($(this).scrollTop());
  });

  /* Header______________ */
  //메뉴
  $(".menu").hover(function(){
    $(this).find(".main .sub_all").stop().slideDown();
    $(".sub_bgbox").stop().slideDown();
  },function(){
    $(this).find(".main .sub_all").stop().slideUp();
    $(".sub_bgbox").stop().slideUp();
  });

  /* Main______________ */
  //메인 비주얼
  let $img = $(".changeimg ul li");
  let $btn = $(".btn ul li");
  let $lbtn = $(".side_btn .lbtn");
  let $rbtn = $(".side_btn .rbtn");
  let oldidx = 0;
  let idx = 0;
  let img_n = $img.length;

  //이미지와 버튼이 바뀌는 함수
  function changeImg(idx){
    if(oldidx != idx){
      $btn.eq(oldidx).removeClass("active");
      $btn.eq(idx).addClass("active");
      $img.eq(oldidx).stop().fadeOut("300");
      $img.eq(idx).stop().fadeIn("300");
    }
    oldidx = idx;
  };

  //자동함수 생성
  function changeAuto(){
    idx++;
    if(idx > img_n-1){
      idx=0;
    }
    changeImg(idx);
  };

  timer = setInterval(changeAuto,4000);

  //하단버튼
  $btn.click(function(){
    clearInterval(timer);
    idx=$(this).index();
    changeImg(idx);
    timer = setInterval(changeAuto,4000);
  });

  //좌우버튼
  $lbtn.click(function(){
    clearInterval(timer);
    idx--;
    if(idx < 0){
      idx=img_n-1;
    }
    changeImg(idx);
    timer = setInterval(changeAuto,4000);
  });

  $rbtn.click(function(){
    clearInterval(timer);
    idx++;
    if(idx > img_n-1){
      idx=0;
    }
    changeImg(idx);
    timer = setInterval(changeAuto,4000);
  });
  
  /* Section______________ */
  //about
  $(window).scroll(function(){
    if($(window).scrollTop() < 300){
    }else{
      $(".content1 img").css("opacity","1")
    }
  });

  //membership
  $(".pong").click(function(){
    $(this).toggleClass("active");
    $(this).siblings(".pong_info").stop().slideUp();
    $(this).next().stop().slideToggle();
  });

  //Mall
  let x=0;
  let s=-1;

  function motion(){
    x = x + s;
    if(x<-1200){x=0};
    if(x>0){x=-1200};

    $(".slideContainer").css({left:x});
  };

  bauto=setInterval(motion,20);

  $(".slideContainer").hover(function(){ 
    clearInterval(bauto);
  }, function(){
    bauto = setInterval(motion,20);
  });

  //New&Best
  let x1=0;
  let s1=-1;

  function motion1(){
    x1 = x1 + s1;
    if(x1<-1440){x1=0};
    if(x1>0){x1=-1440};

    $(".slideContainer2").css({left:x1});
  };

  bauto1=setInterval(motion1,20);

  $(".slideContainer2").hover(function(){ 
    clearInterval(bauto1);
  }, function(){
    bauto1 = setInterval(motion1,20);
  });

});