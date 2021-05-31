const hours = new Date().getHours()
const isDayTime = hours >= 6 && hours < 20
const theme = document.querySelectorAll('.theme')
const themeSwitch = document.querySelector(".theme_button")

let manual = false;

if (isDayTime) {
  dayTimeMonitor(true)
} else {
  dayTimeMonitor(false)
}

themeSwitch.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-sun-o")) {
    dayTimeMonitor(false)
  } else if (e.target.classList.contains("fa-moon-o")) {
    dayTimeMonitor(true)
  }
  manual = true;
})

function dayTimeMonitor(day) {
for (let i = 0; i < theme.length; i++) {

   if (day) {
    themeSwitch.classList.remove("fa-moon-o")
    themeSwitch.classList.add("fa-sun-o")
    theme[i].classList.remove("gl_nighttime_mode")
    theme[i].classList.add("gl_daytime_mode")
  } else if (!day) {
    themeSwitch.classList.remove("fa-sun-o")
    themeSwitch.classList.add("fa-moon-o")
    theme[i].classList.add("gl_nighttime_mode")
    theme[i].classList.remove("gl_daytime_mode")
  }
}
 

}

setInterval(() => {
    if (!manual) {
      if (isDayTime) {
        dayTimeMonitor(true)
      } else {
        dayTimeMonitor(false)
      }
      console.log("logging ");
    }


  }

  , 60000)