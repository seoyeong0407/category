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

  function changeImg(idx){
    if(oldidx != idx){
      $btn.eq(oldidx).removeClass("active");
      $btn.eq(idx).addClass("active");
      $img.eq(oldidx).stop().fadeOut("300");
      $img.eq(idx).stop().fadeIn("300");
    }
    oldidx = idx;
  };

  // function (idx){
  //   idx++;
  //   if(idx == 1){
  //     $("main").css("background-color","#111")
  //   }else if(idx == 2){
  //     $("main").css("background-color","#333")
  //   }else if(idx == 3){
  //     $("main").css("background-color","#555")
  //   }else if(idx == 4){
  //     $("main").css("background-color","#777")
  //   }else if(idx == 5){
  //     $("main").css("background-color","#fff")
  //   }else if(idx > img_n){
  //     idx=0;
  //   }
  // }

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
  //content1
  $(window).scroll(function(){
    if($(window).scrollTop() < 300){
    }else{
      $(".content1 img").css("opacity","1")
    }
  });

});