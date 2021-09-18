function calculate() {
    
    var amount = document.getElementById("amount");
    var apr = document.getElementById("apr");
    var years = document.getElementById("years");
    var payment = document.getElementById("mp");
    var total = document.getElementById("tip");
    var totalinterest = document.getElementById("tap");

    var principal = parseFloat(amount.value);
    var interest = parseFloat(apr.value) / 100 / 12;
    var payments = parseFloat(years.value) * 12;
      
    var x = Math.pow(1 + interest, payments);
    var monthly = (principal*x*interest)/(x-1);

    if (isFinite(monthly)){
        payment.innerHTML = monthly.toFixed(2);
        total.innerHTML = (monthly * payments).toFixed(2);
        totalinterest.innerHTML = ((monthly*payments)-principal).toFixed(2);
        save(amount.value, apr.value, years.value);
    }else {
        payment.innerHTML = "";
        total.innerHTML = ""
        totalinterest.innerHTML = "";
    }
}

function save(amount, apr, years) {
    document.getElementById("amount").value = amount;
    document.getElementById("apr").value = apr;
    document.getElementById("years").value = years;
}