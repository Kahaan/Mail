

function Router(node){
  this.node = node
}

Router.prototype.start = window.addEventListener("hashchange", render)
