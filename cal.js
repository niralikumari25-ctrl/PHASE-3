const button = document.querySelector("button");
const inputbill = document.querySelector("#bill");
const inputtip = document.querySelector("#tip");
const inputpeople = document.querySelector("#people");


button.addEventListener("click", function(e){
    e.preventDefault();
    const billvalue = inputbill.value;
    const tipvalue = inputtip.value;
    const peoplevalue = inputpeople.value;

    if (billvalue == ""){
        alert("Please Enter Your Bill Amount");
    }else if (tipvalue == ""){
        alert("Please enter Tip percentage");
    }
    else if (peoplevalue == "" || peoplevalue <= 0) {
        alert("Please enter valid number of people");
    }
    else {
        calculateTip = billvalue * (1 + tipvalue/100);
        perPerson = calculateTip / peoplevalue;
        document.getElementById('total').innerHTML = "Rs." + calculateTip.toFixed(2);
        document.getElementById("total").innerHTML = "Rs." + perPerson.toFixed(2);
    }
});







