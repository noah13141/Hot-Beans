function test(){
    alert("DO IT NOWWWWW");
}

function checkname(){
    console.log("A");
    let fname = document.getElementById("fname").value;
    console.log("B");
    let lname = document.getElementById("lname").value;
    console.log("C");

    if (fname == "" || lname == "") {
        alert("GET BACK HERE AND ENTER YOUR NAME");
    }
    else{
        alert("Thanks GOAT!! Welcome " + fname);
    }
}

/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}