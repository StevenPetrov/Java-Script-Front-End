function toggle() {
    let head = document.getElementsByClassName("head")[0];
    let text = document.getElementById("extra");
    let getSpan = head.getElementsByTagName("span")[0]
    if (getSpan.textContent === "More"){
        text.style.display = "block"
        getSpan.innerText = "Less"
    } else {
        text.style.display = "none"
        getSpan.innerText = "More"
    }
}