$("h1").addClass("big-title margin-50");
$("button").on("click",function(){
  $("h1").slideToggle().animate({opacity:0.5});
})
