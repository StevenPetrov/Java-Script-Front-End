function create(words) {
   parentDiv = document.getElementById('content')
   for (par of words) {
      let div = document.createElement("div");
      let paragraph = document.createElement("p")
      let text = document.createTextNode(par)
      paragraph.appendChild(text)
      paragraph.style.display = "none"
      div.appendChild(paragraph)
      div.addEventListener("click", () => {paragraph.style.display = "block"})
      parentDiv.appendChild(div)
   }
}