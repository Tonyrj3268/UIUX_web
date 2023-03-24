const button1 = document.getElementById("show-more-1");
const button2 = document.getElementById("show-more-2");
const hiddenContent1 = document.getElementById("hidden-content-1");
const hiddenContent2 = document.getElementById("hidden-content-2");

const toggleContent = function (hiddenContent) {
  hiddenContent.classList.toggle("hidden");
};

button1.addEventListener("click", () => {
  toggleContent(hiddenContent1);
});
button2.addEventListener("click", () => {
  toggleContent(hiddenContent2);
});

var arr1=new Array()
arr1[0]="/static/images/artifact_model.jpg";
arr1[1]="/static/images/uiux.hw1.jpg";
var arr2=new Array()
arr2[0]="/static/images/uiux.hw1_2.png";
arr2[1]="/static/images/artifact_model_2.jpg";


const image1=document.getElementById("img1");
const image2=document.getElementById("img2");
setInterval(function(){image();},5000);
image1.addEventListener("mouseenter",()=>{
  for (let i = 1; i < 1000; i++) {
    clearInterval(i)};})
image1.addEventListener("mouseleave",()=>{setInterval(function(){image();},5000);})
image2.addEventListener("mouseenter",()=>{
  for (let i = 1; i < 1000; i++) {
    clearInterval(i)};})
image2.addEventListener("mouseleave",()=>{setInterval(function(){image();},5000);})
var i=0;
  function image()
  {
      image1.src=arr1[i];
      image2.src=arr2[i];
      i++;
      if(i>1){i=0};             
  };
