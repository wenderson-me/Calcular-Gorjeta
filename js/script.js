function tipCalc() {

    //input
    var userAmount = document.getElementById("userAmount").value;
    var tip = document.getElementById("options").value;
    var peopleAmount = document.getElementById("peopleAmount").value;

    //validate input

    if (userAmount == "") {
        alert("Por obsequio digite um valor");
        return;
    }

    //if the number of people box is empty or just one person

    if (peopleAmount === "" || peopleAmount <= 1) {
        peopleAmount = 1;
        document.getElementById("each").style.display = "none";
    } else {
        document.getElementById("each").style.display = "block"
    }   

    
    //calculate tip
    var total = (userAmount * tip) / peopleAmount;
    //round to 2 decimal places
    total = Math.round(total * 100) / 100;
    //to always have two digits after a decimal point
    total = total.toFixed(2);
    //display tip
    document.getElementById("totalTip").style.display = "block";
    document.getElementById('tip').innerHTML = total;

    console.log(total)
}

    //hide tip on load 
    document.getElementById("totalTip").style.display = "none";

    //click to call function
    document.getElementById("calculate").onclick = function() {
        tipCalc();
    }