$(".family_list").hide();
$(".family_btn").click(function(){
 $(".family_list").slideToggle(100);
})

$(".sub_bg").hide();
$(".menu>li").mouseover(function(){
 $(this).children(".sub_bg").stop().slideDown(300);
})

$(".menu>li").mouseout(function(){
 $(this).children(".sub_bg").stop().slideUp(300);
})

$(".m_nav").hide();
$(".m_btn").click(function(){
 $(".m_nav").fadeIn();
 $(".m_menu_box").addClass("active");
})

$(".m_close,.m_nav_bg").click(function(){
 $(".m_nav").fadeOut();
 $(".m_menu_box").removeClass("active");
$(".m_sub_bg").hide();
})


$(".m_sub_bg").hide();
$(".m_menu>li:nth-child(1)").click(function(){
 $(".m_sub_bg").show();
})

$(".m_sub_close").click(function(){
 $(".m_sub_bg").fadeOut(100);
})


/* main slide */
$(".main_wrap>img:nth-child(1)~").hide();
let i=0;
function slide(){
 i=i==6?0:i+1;
 $(".main_wrap>img").eq(i).show();
 $(".main_wrap>img").eq(i).siblings().hide();
}

setInterval(slide,500)


AOS.init();

let lastTop=0
$(window).scroll(function(){
let top=$(this).scrollTop();

if (top>lastTop){
$(".header").css({'margin-top':'-100px'}) //css로 작성 시 헤더에 transition 작성하기
} else{
 $(".header").css({'margin-top':'0'})

}
lastTop=top;

if(top>100){
 $(".maintitle_top").css({"padding-right":top,"transform":"scale(1.3)", "color":"gray"})
 $(".maintitle_bottom").css({"padding-left":top, "transform":"scale(1.3)", "color":"gray"})
}else{
 $(".maintitle_top").css({"padding-right":top,"transform":"scale(1)", "color":"#000"})
 $(".maintitle_bottom").css({"padding-left":top, "transform":"scale(1)", "color":"#000"})
}
})

$(".top_btn").hide();
$(window).scroll(function(){
 if($("html").scrollTop()>100){
  $(".top_btn").fadeIn()
 }else{
  $(".top_btn").fadeOut();
 }
})

$(".top_btn").click(function(){
 $("html").animate({scrollTop:0},700);
})


