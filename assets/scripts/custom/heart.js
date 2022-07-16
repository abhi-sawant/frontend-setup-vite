export const heart = () => {
  let clickMe = document.getElementById("clickMe");
  let colorMask = document.getElementById("active-gradient-mask-mlbw");
  let x = 42;

  clickMe.addEventListener("click", function () {
    if (x > 0) x = x - 7;
    colorMask.children[0].setAttribute("points", `0 42, 50 42, 50 ${x}, 0 ${x}`);
  });
};
