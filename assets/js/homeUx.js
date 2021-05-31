const drawer = document.querySelector(".mobile_drawer")
const mobileMenuBotton = document.querySelector(".mobile_menu")
const drawerClose = document.querySelector(".drawer_close")
const navbar = document.querySelector(".nav_buttons_container");
const body = document.querySelector("body");
let dropdownContentIndex = null
const dropdownContent = document.querySelectorAll(".dropdown_content")
const servicesContent = document.querySelector(".services")
const productsContent = document.querySelector(".products")
const header = document.querySelector("header")



servicesContent.addEventListener("mouseleave",()=>{

  servicesContent.classList.add("hide")

})
productsContent.addEventListener("mouseleave",()=>{

  productsContent.classList.add("hide")

})
navbar.addEventListener("click",(e)=>{

switch (e.target.innerText) {
  case "SERVICES":
    navSwitch(dropdownContent,0)
    dropdownContentIndex = 0
    break;
  case "PRODUCTS":
    navSwitch(dropdownContent,1)
    dropdownContentIndex = 1;
  default:
    break;
}


})

const navSwitch =(d,s)=>{
for (let i = 0; i < d.length; i++) {
  d[i].classList.add('hide')
}
d[s].classList.remove('hide')
}

body.onscroll = function(){

  if (scrollY > 30){
      
      header.classList.add("fixed");
      
}else {
      header.classList.remove("fixed");
      
  }
 
}

mobileMenuBotton.addEventListener("click",()=>{
  drawerSlider("0px");
})
drawerClose.addEventListener("click",()=>{
  drawerSlider("-100vw");
})

const drawerSlider = (pos)=>[
  drawer.style.transform =`translateX(${pos})`
]