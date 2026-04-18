function goYes() {
  window.location.href = "page2.html";
}

function shakeNo(btn) {
  btn.style.animation = "shake 0.3s";
  setTimeout(() => {
    btn.style.animation = "";
  }, 300);
}
function shoot() {
  const arrow = document.getElementById("arrow");
  const heart = document.getElementById("heart");

  arrow.style.opacity = "1";

  arrow.animate([
    { transform: "translateX(0px)" },
    { transform: "translateX(500px)" }
  ], {
    duration: 800,
    fill: "forwards"
  });

  setTimeout(() => {
    heart.style.transform = "scale(1.5)";
  }, 700);

  setTimeout(() => {
    window.location.href = "page3.html";
  }, 1500);
}
function nextPage(page) {
  window.location.href = page;
}
window.onload = function () {
  const lines = document.querySelectorAll(".line");

  lines.forEach((line, index) => {
    setTimeout(() => {
      line.style.opacity = "1";
      line.style.transition = "opacity 1s";
    }, index * 1500); // delay between each line
  });
};