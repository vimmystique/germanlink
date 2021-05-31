const splashScreen = document.querySelector(".splash")

setTimeout(() => {
  splashScreen.style.display = "none"
  document.querySelector('.App').style.display = "block"
}, 1500);