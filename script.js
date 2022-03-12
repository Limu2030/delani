// list the icons
var img = document.querySelectorAll(".js-image");
// for every icon add an event listener
img.forEach((el) => {
  // get the text container for each icon. i.e. the clicked icon
  var nextDisplay = el.nextElementSibling;
  // when the icon is clicked hide the text container
  el.addEventListener("click", () => {
    // this is where we display the text container
    nextDisplay.style.display = "flex";
    // this is where we hide the icon
    el.style.display = "none";
  });

  // from here the reverse is happening
  // when the text container is clicked, the icon is displayed and the container hidden
  nextDisplay.addEventListener("click", () => {
    nextDisplay.style.display = "none";
    el.style.display = "flex";
  });
});

// <!-- 2 -->

// list the icons
var img = document.querySelectorAll(".js-image2");
// for every icon add an event lietener
img.forEach((el) => {
  // get the text container for each icon. i.e. the clicked icon
  var nextDisplay = el.nextElementSibling;
  // when the icon is clicked hide the text container
  el.addEventListener("click", () => {
    // this is where we display the text container
    nextDisplay.style.display = "flex";
    // this is where we hide the icon
    el.style.display = "none";
  });

  // from here the reverse is happening
  // when the text container is clicked, the icon is displayed and the container hidden
  nextDisplay.addEventListener("click", () => {
    nextDisplay.style.display = "none";
    el.style.display = "flex";
  });
});

// <!-- 3 -->

// list the icons
var img = document.querySelectorAll(".js-image3");
// for every icon add an event lietener
img.forEach((el) => {
  // get the text container for each icon. i.e. the clicked icon
  var nextDisplay = el.nextElementSibling;
  // when the icon is clicked hide the text container
  el.addEventListener("click", () => {
    // this is where we display the text container
    nextDisplay.style.display = "flex";
    // this is where we hide the icon
    el.style.display = "none";
  });

  // from here the reverse is happening
  // when the text container is clicked, the icon is displayed and the container hidden
  nextDisplay.addEventListener("click", () => {
    nextDisplay.style.display = "none";
    el.style.display = "flex";
  });
});

// portfolio section - jQuery
$(".bigPort").mouseover(function () {
  $(".port-1").show();
});
$(".bigPort").mouseout(function () {
  $(".port-1").hide();
});

$(".bigPort-2").mouseover(function () {
  $(".port-2").show();
});
$(".bigPort-2").mouseout(function () {
  $(".port-2").hide();
});

$(".bigPort-3").mouseover(function () {
  $(".port-3").show();
});
$(".bigPort-3").mouseout(function () {
  $(".port-3").hide();
});

$(".bigPort-4").mouseover(function () {
  $(".port-4").show();
});
$(".bigPort-4").mouseout(function () {
  $(".port-4").hide();
});

$(".bigPort-5").mouseover(function () {
  $(".port-5").show();
});
$(".bigPort-5").mouseout(function () {
  $(".port-5").hide();
});

$(".bigPort-6").mouseover(function () {
  $(".port-6").show();
});
$(".bigPort-6").mouseout(function () {
  $(".port-6").hide();
});

$(".bigPort-7").mouseover(function () {
  $(".port-7").show();
});
$(".bigPort-7").mouseout(function () {
  $(".port-7").hide();
});

$(".bigPort-8").mouseover(function () {
  $(".port-8").show();
});
$(".bigPort-8").mouseout(function () {
  $(".port-8").hide();
});

// feedback section

$("#feedback").submit(function () {
  var name = this.NAME.value;
  var email = this.EMAIL.vaue;
  var message = this.MESSAGE.value;
  alert(
    name + " we have received your message. Thank you for reaching out to us"
  );
});
