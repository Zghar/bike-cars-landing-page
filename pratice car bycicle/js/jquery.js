$(document).ready(function(){
   $(".bike").slideToggle(2000);
   //scroll top too cars div
   $(window).scroll(function(){
       if($(window).scrollTop()>=$("#cars").offset().top()){

$('#cars').css(" color","white")

       };
   })
   $(".navbar").animate({
       width:"100%",

   },10000);
})