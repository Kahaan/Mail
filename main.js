
const Router = require('./router')

document.addEventListener("DOMContentLoaded", ()=> {

let content = document.querySelectorAll(".content")
router = new Router(content)
router.start()

let newLoc = ""

const handleLi = (el) => {
  const li = el.target
  newLoc = li.innerText.toLowerCase()
  window.location.hash = newLoc
}

  document.querySelectorAll(".sidebar-nav li").forEach((li) => {
    li.addEventListener("click", handleLi)
  })




})
