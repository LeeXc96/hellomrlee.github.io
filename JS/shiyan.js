
// 点击下箭头
function throttle(method,context){
    clearTimeout(method.tId);
    method.tId=setTimeout(function(){
        method.call(context);
    },500);
}
a = 0;
b = 0;

$(".down_arrow").click(function () {
    throttle(dianji,window);
});
function dianji () {
    a++;
    console.log(a);
    if(a<6){
        $("#content").animate({top:"-=100vh"});
            if(a==5){
                $(".down_arrow").css({"background-position":"0px -40px"});
            }
    }else{
        a=0;
        $("#content").animate({top:"0px"});
        $(".down_arrow").css({"background-position":"0px 2px"});     
    }
}
// 屏幕轮播
function scroll (){
    var u=function(h){
        if(a==0){return}
        if($("#content").is(":animated")){return}a--;
        $("#content").animate({top:h},);
        if(a<5){
           $(".down_arrow").css({"background-position":"0px 2px"});   
        }
    };
    var d=function(h){
        if(a==b-1){
            return
        }
        if($("#content").is(":animated")){
            return
        }
        a++;
        $("#content").animate({top:h},);
        if(a==5){
            $(".down_arrow").css({"background-position":"0px 47px"});    
        }
    };
    b=$("#content .ping1").length;


    var scrollFunc=function(e){
    b=$("#content .ping1").length;
    // console.log(b)
    e=e||window.event;
    if(e.wheelDelta){
        var div=document.getElementById("content");
        if(e.wheelDelta>0){new u("+=100vh")}
        if(e.wheelDelta<0){new d("-=100vh")}
    }
    if(e.detail){
        if(e.detail<0){new u("+=100vh")}
        if(e.detail>0){new d("-=100vh")}}
        // console.log(e)    
    };
    window.onmousewheel=document.onmousewheel=scrollFunc;
    document.onmousewheel=scrollFunc;
    
  };
  scroll()

// 点击跳转页面
$(".bigmove1").click(function () {
    $("#content").animate({"top":"0vh"});
    a=0;
    $(".down_arrow").css({"background-position":"0px 2px"});
});
$(".bigmove2").click(function () {
    $("#content").animate({"top":"-100vh"});
    a=1;
    $(".down_arrow").css({"background-position":"0px 2px"});
});
$(".bigmove3").click(function () {
    $("#content").animate({"top":"-200vh"});
    a=2;
    $(".down_arrow").css({"background-position":"0px 2px"});
});
$(".bigmove4").click(function () {
    $("#content").animate({"top":"-300vh"});
    a=3;
    $(".down_arrow").css({"background-position":"0px 2px"});
});
$(".bigmove5").click(function () {
   $("#content").animate({"top":"-400vh"});
   a=4;
   $(".down_arrow").css({"background-position":"0px 2px"});
});
$(".bigmove6").click(function () {
   $("#content").animate({"top":"-500vh"});
   a=5;
   $(".down_arrow").css({"background-position":"0px 47px"});
   console.log(a);
});    
var tops = setInterval(function(){
    if($("#content").css('top') == '-200vh'){
        $('.skillbar').each(function(){
            $(this).find('.skillbar-bar').animate({
                width:$(this).attr('data-percent')
            });
        });    
    }else{
        $('.skillbar').each(function(){
             $(this).find('.skillbar-bar').animate({
                 width:'0px'
             });
         });  
    }
},500)
// 轮播函数=================================================
function lunbo() {
    $(".conten_4nr").animate({"left":-$(".conten_4nr div").width()+"px"},1000,function () {
        $(".conten_4nr div").eq(0).clone(true).appendTo(".conten_4nr");
        $(".conten_4nr div").eq(0).remove();
        $(".conten_4nr").animate({"left":"0px"},0);
    });
}
// 定时器函数==================================================
var index=0;
var timer=setInterval(timer1,3000);
function timer1() {
    if(index==0){
        $(".conten_4dl div").eq(1).addClass("sel").siblings().removeClass("sel");
        index=1;
    }else{
        $(".conten_4dl div").eq(0).addClass("sel").siblings().removeClass("sel");
        index=0;
    }
  lunbo();
};
// 对点点的点击事件============================================
$(".conten_4lb .conten_4dl div").click(function () {
    clearInterval(timer);
    if($(this).hasClass("sel")){
        $(this).removeClass("sel").siblings().addClass("sel");        
     lunbo();
    }
});