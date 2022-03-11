// list the icons
var img = document.querySelectorAll(".js-image");
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

// // <!-- 2 -->

// // list the icons
// var img = document.querySelectorAll(".js-image");
// // for every icon add an event lietener
// img.forEach((el) => {
//   // get the text container for each icon. i.e. the clicked icon
//   var nextDisplay = el.nextElementSibling;
//   // when the icon is clicked hide the text container
//   el.addEventListener("click", () => {
//     // this is where we display the text container
//     nextDisplay.style.display = "flex";
//     // this is where we hide the icon
//     el.style.display = "none";
//   });

//   // from here the reverse is happening
//   // when the text container is clicked, the icon is displayed and the container hidden
//   nextDisplay.addEventListener("click", () => {
//     nextDisplay.style.display = "none";
//     el.style.display = "flex";
//   });
// });

// // <!-- 3 -->

// // list the icons
// var img = document.querySelectorAll(".js-image");
// // for every icon add an event lietener
// img.forEach((el) => {
//   // get the text container for each icon. i.e. the clicked icon
//   var nextDisplay = el.nextElementSibling;
//   // when the icon is clicked hide the text container
//   el.addEventListener("click", () => {
//     // this is where we display the text container
//     nextDisplay.style.display = "flex";
//     // this is where we hide the icon
//     el.style.display = "none";
//   });

//   // from here the reverse is happening
//   // when the text container is clicked, the icon is displayed and the container hidden
//   nextDisplay.addEventListener("click", () => {
//     nextDisplay.style.display = "none";
//     el.style.display = "flex";
//   });
// });
