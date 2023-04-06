function solve() {
    BASE_URL = 'http://localhost:3030/jsonstore/grocery/'
    productContainer = document.getElementById('tbody')

    loadBtn = document.getElementById('load-product')
    loadBtn.addEventListener('click',loadProducts);

    addBtn = document.getElementById('add-product')
    addBtn.addEventListener('click', addProduct);

    updateBtnMain = document.getElementById('update-product')

    nameInput = document.getElementById('product')
    countInput = document.getElementById('count')
    priceInput = document.getElementById('price')

    function loadProducts(e) {
        e.preventDefault();
        fetch(BASE_URL)
            .then(res => res.json())
            .then((loadedProducts)=> {
                productContainer.innerHTML = ''
                products = Object.values(loadedProducts)
                for (const { product, count, price, _id} of products){
                    mainTR = createElement('tr',null,null,null,_id)
                    produtName = createElement('td',mainTR,product,["name"])
                    produtClass = createElement('td',mainTR,count,["count-product"])
                    produtPrice = createElement('td',mainTR,price,["product-price"])
                    btnContainer = createElement('td',mainTR,null,["btn"])

                    updateBtn = createElement('button',btnContainer,'Update',["update"])
                    updateBtn.addEventListener('click',updateProductLoader)

                    deleteBtn = createElement('button',btnContainer,'Delete',["delete"])
                    deleteBtn.addEventListener('click',deleteProduct)

                    productContainer.appendChild(mainTR)   

                    nameInput.value = ''
                    countInput.value = ''
                    priceInput.value = ''
                }})
    }

    function addProduct(e){
        namePush = nameInput.value
        countPush = countInput.value
        pricePush = priceInput.value
        httpHeaders = {
            method: 'POST',
            body: JSON.stringify({
                product: namePush,
                count: countPush,
                price: pricePush})
          }
        fetch(BASE_URL,httpHeaders)
          .then(res=>res.json())
        loadProducts(e)
          

    }

    function deleteProduct(e){
        id = this.parentNode.parentNode.id
        httpHeaders = {
            method: 'DELETE',
          }
          fetch(BASE_URL+id, httpHeaders)
            .then(res => res.json())
            .then(() => {loadProducts(e)})
    }

    function updateProductLoader(e){
        updateProductId = this.parentNode.parentNode.id
        updateProductName = this.parentNode.parentNode.children[0]
        updateProductCount = this.parentNode.parentNode.children[1]
        updateProductPrice = this.parentNode.parentNode.children[2]
        nameInput.value = updateProductName.textContent
        countInput.value = updateProductCount.textContent
        priceInput.value = updateProductPrice.textContent
        addBtn.disabled  = true
        updateBtnMain.disabled = false

        updateBtnMain.addEventListener('click', pushUpdateProduct);
        function pushUpdateProduct(e){
            namePushUpdate = nameInput.value
            countPushUpdate = countInput.value
            pricePushUpdate = priceInput.value
            httpHeaders = {
            method: 'PATCH',
            body: JSON.stringify({
                product: namePushUpdate,
                count: countPushUpdate,
                price: pricePushUpdate})
            }
            fetch(BASE_URL+updateProductId,httpHeaders)
                .then(res=>res.json())
                .then(()=>{
                    loadProducts(e)
                    addBtn.disabled  = false
                    updateBtnMain.disabled = true
                })
        }
        
    }



    function createElement(type, parentNode, content, classes, id, attributes, useInnerHTML) {
        const htmlElement = document.createElement(type);
        if (content && useInnerHTML) {
          htmlElement.innerHTML = content;
        } else {
          if (content && type !== 'input'){
            htmlElement.textContent = content;
          }
      
          if (content && type === 'input'){
            htmlElement.value = content;
            }
          }
        if (classes && classes.length > 0){
          htmlElement.classList.add(...classes);
        }  
        if (id) {
          htmlElement.id = id;
        }
        if (attributes){
          for (const key in attributes){
            htmlElement.setAttribute(key, attributes[key])};
        }
        if (parentNode){
          parentNode.appendChild(htmlElement);
        }
        return htmlElement
      }
}

solve()