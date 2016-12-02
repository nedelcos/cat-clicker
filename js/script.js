var HTMLname = '<div class="cat-name">%data%</div>';
var HTMLpic = '<img id="cat-pic%data2%" class="cat-pic" src="%data%">';
var HTMLclickCount = '<div id="click-count%data2%">%data%</div>'


var Cat = function (name, pic, clicks) {
  this.name = name;
  this.pic = pic;
  this.clicks = 0;
}

var allCats = [];
allCats[0] = new Cat("Tom", "img/tom.jpg");
allCats[1] = new Cat("Ralph", "img/ralph.jpg");

for (i = 0; i < allCats.length; i++) {
    formattedName = HTMLname.replace("%data%", allCats[i].name);
    formattedPic = HTMLpic.replace("%data%", allCats[i].pic).replace("%data2%", i);
    formattedCount = HTMLclickCount.replace("%data%", allCats[i].clicks).replace("%data2%", i);

    $(".cat-cont:last").append(formattedName);
    $(".cat-cont:last").append(formattedCount);
    $(".cat-cont:last").append(formattedPic);

    $("#cat-pic" + 0).click(function () {
        allCats[0].clicks += 1;
        $("#click-count" + 0).empty();

        if (allCats[0].clicks <= 1) {
          $("#click-count" + 0).append('You have clicked ' + allCats[0].clicks + ' time');
        }
        else {
          $("#click-count" + 0).append('You have clicked ' + allCats[0].clicks + ' times');
        };
    });

    $("#cat-pic" + 1).click(function () {
        allCats[1].clicks += 1;
        $("#click-count" + 1).empty();

        if (allCats[1].clicks <= 1) {
          $("#click-count" + 1).append('You have clicked ' + allCats[1].clicks + ' time');
        }
        else {
          $("#click-count" + 1).append('You have clicked ' + allCats[1].clicks + ' times');
        };
    });

};
