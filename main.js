
document.addEventListener("DOMContentLoaded", ()=> {

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
