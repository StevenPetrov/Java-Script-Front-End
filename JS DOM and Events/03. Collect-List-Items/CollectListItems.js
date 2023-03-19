function extractText() {
    var list = document.getElementById("items");
    var items = list.getElementsByTagName("li");
    var result = document.getElementById("result");

    for (var i = 0; i < items.length; i++) {
      var itemText = items[i].textContent || items[i].innerText;
      result.value += itemText + "\n";
    }
  }