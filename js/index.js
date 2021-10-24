let aboutOffest=$("#about").offset().top;
let x=$(".color-items").outerWidth();
$(".color-box").animate({left:-x},0);

console.log(aboutOffest);

$(window).scroll(function () { 
    let wScroll=$(window).scrollTop();
    if(wScroll > aboutOffest - 100){
        $('#main-nav').css('backgroundColor', 'rgba(0, 0, 0, 0.6)');
        $('#btnUp').fadeIn(500);
    }
    else{
        $('#main-nav').css('backgroundColor', 'transparent');
        $('#btnUp').fadeOut(500);

    }
});

$('#btnUp').click(function () { 
    $('html,body').animate({scrollTop:0},3000);
    
});

$('a[href^="#"]').click((e)=>{
    let linkId=$(e.target).attr('href');
    console.log(linkId);
    let linkOffest=$(linkId).offset().top;
    $('html,body').animate({scrollTop:linkOffest},1000);
});

$(".color-button").click(function (e) { 
    let x=$(".color-items").outerWidth();
    console.log($(".color-box").css("left"));
    if($(".color-box").css("left") == "0px"){
        console.log('true');
    $(".color-box").animate({left:-x},1000);
}
else{
    $(".color-box").animate({left:0},1000);   

}
});
let colorSelect=$(".color-item");
colorSelect.eq(0).css("backgroundColor", "red");
colorSelect.eq(1).css("backgroundColor", "yellow");
colorSelect.eq(2).css("backgroundColor", "blue");
colorSelect.eq(3).css("backgroundColor", "green");
colorSelect.eq(4).css("backgroundColor", "orange");

colorSelect.click((e)=>{
    let bgColor=$(e.target).css('backgroundColor');
    $('h2,h2,p').css("color",bgColor);
});
$(document).ready(function () {
    $(".readyScreen .fa-spinner").fadeOut(1000,()=>{
        $(".readyScreen").fadeOut(1000,()=>{
            $(".readyScreen").remove();
            $("body").css("overflow-y","auto");
        });
    });
});