class Router {

  constructor(node){
    this.node = node
  }

  start(){
    this.render(),
    window.addEventListener("hashchange", (e) => {
      this.render()
    })
  }

}
