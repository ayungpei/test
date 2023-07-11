const lesson = document.querySelector("#lessons");
let JPlesson = document.querySelector(".JPlesson");
lesson.addEventListener("mousemove", () => {
  JPlesson.style.display = "block";
  JPlesson.style.transition = "2s";
});
lesson.addEventListener("mouseout", () => {
  JPlesson.style.display = "none";
  JPlesson.style.transition = "2s";
});
