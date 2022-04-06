// To run this assignment, right click on index.html in the Visual Studio Code file explorer to the left
// and select "Open with Live Server"

// Your Code Here.
function snapCrackle(maxValue) {
    let message = ""

    for (let count = 1; count <= maxValue; count += 1) {

    if (count % 2 === 1) {
        message += "Snap, "
    } else if (count % 5 === 0) {
        message += "Crackle, "
    } else if (count % 2 === 1 && count % 5 === 0) {
        message += "SnapCrackle, "
    } else {
        message += count + ", "
    }
}
    return message
}
console.log(snapCrackle(12))


let highestNumber = prompt("What is the highest number?")
let result = snapCrackle(highestNumber)

function render(text, maxValue) {
    document.write(`<h1>Snap Crackle!</h1> <h3>Max Value: ${maxValue} </h3> <p> ${text}  </p>`)
}
render(result, highestNumber)