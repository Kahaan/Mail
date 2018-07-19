let Routes = require("./main")

class Router {

  constructor(node, routes){
    this.node = node
    this.routes = routes
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
    return hash
  }

}

module.exports = Router
