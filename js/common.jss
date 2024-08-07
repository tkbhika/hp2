$(".h-open").click(function () {
  $(this).toggleClass('active');
  $("#h-nav").toggleClass('panel-active');
});

$("#h-nav a").click(function () {
  $(".h-open").removeClass('active');
  $("#h-nav").removeClass('panel-active');
});