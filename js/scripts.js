$(function(){
  $("button#how").click(function(){
    $("ul#user").prepend("<li class='how'>How are you?</li>");
    $("ul#computer").prepend("<li class='how'>Okay, I guess.</li>");
    $(".how").css("background-color", "green");
    $("ul li").click(function() {
      $(this).remove();
    });
  });
  $("button#what").click(function(){
    $("ul#user").prepend("<li class='what'>What are you?</li>");
    $("ul#computer").prepend("<li class='what'>I am the computer.</li>");
      $(".what").css("background-color", "yellow");
    $("ul li").click(function() {
      $(this).remove();
    });
  });
  $("button#why").click(function(){
    $("ul#user").prepend("<li  class='why'>Why are you?</li>");
    $("ul#computer").prepend("<li  class='why'>WHY ARE YOU?</li>");
      $(".why").css("background-color", "red");
    $("ul li").click(function() {
      $(this).remove();
    });

  });

});
