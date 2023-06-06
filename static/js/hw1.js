// const button1 = document.getElementById("show-more-1");
// const button2 = document.getElementById("show-more-2");
// const hiddenContent1 = document.getElementById("hidden-content-1");
// const hiddenContent2 = document.getElementById("hidden-content-2");

// const toggleContent = function (hiddenContent) {
//   hiddenContent.classList.toggle("hidden");
// };

// button1.addEventListener("click", () => {
//   toggleContent(hiddenContent1);
// });
// button2.addEventListener("click", () => {
//   toggleContent(hiddenContent2);
// });

// var arr1=new Array()
// arr1[0]="/static/images/artifact_model.jpg";
// arr1[1]="/static/images/uiux.hw1.jpg";
// var arr2=new Array()
// arr2[0]="/static/images/uiux.hw1_2.png";
// arr2[1]="/static/images/artifact_model_2.jpg";

// const image1=document.getElementById("img1");
// const image2=document.getElementById("img2");
// setInterval(function(){image();},5000);
// image1.addEventListener("mouseenter",()=>{
//   for (let i = 1; i < 1000; i++) {
//     clearInterval(i)};})
// image1.addEventListener("mouseleave",()=>{setInterval(function(){image();},5000);})
// image2.addEventListener("mouseenter",()=>{
//   for (let i = 1; i < 1000; i++) {
//     clearInterval(i)};})
// image2.addEventListener("mouseleave",()=>{setInterval(function(){image();},5000);})
// var i=0;
//   function image()
//   {
//       image1.src=arr1[i];
//       image2.src=arr2[i];
//       i++;
//       if(i>1){i=0};
//   };
const toggleContent = function (buttonId, contentId) {
  const button = document.getElementById(buttonId);
  const hiddenContent = document.getElementById(contentId);

  button.addEventListener("click", () => {
    hiddenContent.classList.toggle("hidden");
  });
};

toggleContent("show-more-1", "hidden-content-1");
toggleContent("show-more-2", "hidden-content-2");

const images = [
  {
    element: document.getElementById("img1"),
    srcs: ["/static/images/artifact_model.jpg", "/static/images/uiux.hw1.jpg"],
  },
  {
    element: document.getElementById("img2"),
    srcs: [
      "/static/images/uiux.hw1_2.png",
      "/static/images/artifact_model_2.jpg",
    ],
  },
];

let imageIndex = 0;
let intervalId = null;

function setImageSources() {
  for (const image of images) {
    image.element.src = image.srcs[imageIndex];
  }

  imageIndex = (imageIndex + 1) % images[0].srcs.length;
}

function startImageChange() {
  intervalId = setInterval(setImageSources, 5000);
}

function stopImageChange() {
  clearInterval(intervalId);
  intervalId = null;
}

for (const image of images) {
  image.element.addEventListener("mouseenter", stopImageChange);
  image.element.addEventListener("mouseleave", startImageChange);
}

startImageChange();
