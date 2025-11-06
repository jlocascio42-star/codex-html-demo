const button = document.getElementById("colorButton");
const colors = ["#FF7A00", "#FFD100", "#00A8E8", "#3DDC84", "#FF4C4C"];

button.addEventListener("click", () => {
  const random = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = random;
});
