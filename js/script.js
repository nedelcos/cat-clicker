var clickCount = 0;
$("#click-count").append('Click the cat!');


$(".cat-pic").click(function() {
  clickCount += 1;
  $("#click-count").empty();
  if (clickCount <= 1) {
    $("#click-count").append('You have clicked ' + clickCount + ' time');
  }
  else {
    $("#click-count").append('You have clicked ' + clickCount + ' times');
  }
});
