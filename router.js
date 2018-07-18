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

  render() {
    this.node.innerHTML = "";
    let component = this.activeRoute();
    if(component) {
      this.node.appendChild(component.render());
    }
  }

  activeRoute(){
    let hash = window.location.hash.substr(1)
  }

}
