var arr_image = [
  "https://images.unsplash.com/photo-1542766788-a2f588f447ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zml0bmVzcyUyMGNsdWJ8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
  "https://images.unsplash.com/photo-1570829460005-c840387bb1ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&w=1000&q=80",
  "https://images.unsplash.com/photo-1598289431512-b97b0917affc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zml0bmVzcyUyMGNsdWJ8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
];
var index = 0;
var slideImage = document.getElementsByClassName("slide-image")[0];
var slickDot = document.querySelectorAll(".slick-dots li");

const prev = () => {
  slickDot[index].classList.remove("slick-active");
  index--;

  if (index < 0) {
    index = arr_image.length - 1;
  }
  slideImage.src = arr_image[index];

  slickDot[index].classList.add("slick-active");
};

const next = () => {
  slickDot[index].classList.remove("slick-active");
  index++;

  if (index == arr_image.length) {
    index = 0;
  }
  slideImage.src = arr_image[index];

  slickDot[index].classList.add("slick-active");
};
