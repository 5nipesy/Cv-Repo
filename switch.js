$(function() {
  $("#toggle").click(function() {
    if ($(this).is(":checked")) {
      $("#menu1").show();
      $("#menu2").hide();
    } else {
      $("#menu1").hide();
      $("#menu2").show();
    }
  });
});