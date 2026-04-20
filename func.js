function showMessage(event) {
    event.preventDefault(); // Stop form from refreshing the page
    document.getElementById("formMessage").textContent = "Thank you for your message!";
}

function pic(i) {
    var hold;
    if (i == 0) {
        hold = "hold1.jpg"
    } else {
        hold = "hold2.jpg"
    }
    document.getElementById("myImage").src = hold;
}