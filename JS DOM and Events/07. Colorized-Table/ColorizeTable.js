function colorize() {
    const evenRows = Array.from(document.querySelectorAll('tr:nth-child(even)'))
    for (const row of evenRows) {
        row.style.backgroundColor = "Teal"
    }
}