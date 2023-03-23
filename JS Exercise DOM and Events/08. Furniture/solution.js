function solve() {
  generateButton = document.getElementsByTagName("button")[0];
  items = document.getElementsByTagName("textarea")[0];
  generateButton.addEventListener("click", ()=> 
    {
      items = JSON.parse(items.value)
      for (const item of items) {
        if (item.name && item.img && item.price && item.decFactor){
          let clone = document.getElementsByTagName('tr')[1]
          let mainObj = clone.cloneNode(true);

          itemName = mainObj.getElementsByTagName('p')[0]
          itemName.innerHTML  = item.name

          itemImg = mainObj.getElementsByTagName('img')[0]
          itemImg.src = `${item.img}`

          itemPrice = mainObj.getElementsByTagName('p')[1]
          itemPrice.innerHTML  = item.price

          itemFactor = mainObj.getElementsByTagName('p')[2]
          itemFactor.innerHTML  = item.decFactor

          clone.parentNode.appendChild(mainObj)
        }
      }
      
    })
  inputs = Array.from(document.querySelectorAll('input[type=checkbox]'))
  for (const input of inputs) {
    input.disabled = false
  }
  buyButton = document.getElementsByTagName("button")[1];
  boughtProducts = []
  totalPrice = 0
  averageFactor = 0
  buyButton.addEventListener("click", ()=>{
    for (const input of inputs) {
      main =input.parentNode.parentNode
      if (input.checked == true){
        boughtProducts.push(main.getElementsByTagName('p')[0].textContent)
        totalPrice += Number(main.getElementsByTagName('p')[1].innerHTML)
        averageFactor += Number(main.getElementsByTagName('p')[2].innerHTML)
      }
    }
    averageFactor /= boughtProducts.length
    result = `Bought furniture: ${boughtProducts.join(', ')}
Total price: ${totalPrice.toFixed(2)}
Average decoration factor: ${averageFactor}`

    document.getElementsByTagName("textarea")[1].value = result
  })
  
  
}