
module.exports = {

  render(){
    let container = document.createElement("ul"),
    container.className = "messages",
    container.innerHTML = "An inbox message",
    return container
  }
}
