$(document).ready(function(){
  $(".answer").hide();
  $(".question").click(function(){
      $(this).next(".answer").slideToggle();
  });
  $(".faq .question").addClass("pointer");
});