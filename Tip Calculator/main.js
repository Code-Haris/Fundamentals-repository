/*function calcTip(bill, percent) {
    return bill * percent / 100;
}

function getMessage(tip, percent) {
    return 'A ' + percent + ' percent tip would equal €' + tip;
}

function updateFunc(billInput, tipSuggestion) {
    // Here I use closure to save billInput and tipSuggestion
    return function(percent) {
        var bill = parseFloat(billInput.value) || 0;
        tipSuggestion.innerHTML = getMessage(calcTip(bill, percent), percent);
    }
}

var tenPerBtn = document.querySelector('.tenPercent');
var fifteenPerBtn = document.querySelector('.fifteenPercent');
var twentyPerBtn = document.querySelector('.twentyPercent');
var customPerBtn = document.querySelector('.customTipBtn');
var bill = document.getElementById('billInput');
var tipSuggestion = document.getElementById('tipAmount');

var update = updateFunc(bill, tipSuggestion);

tenPerBtn.addEventListener('click', function() { update(10); });
fifteenPerBtn.addEventListener('click', function() { update(15); });
twentyPerBtn.addEventListener('click', function() { update(20); });
customPerBtn.addEventListener('click', function() { update(document.querySelector('#customTip').value); });*/

//Calculate Tip
function calculateTip() {
  var billAmt = document.getElementById("billamt").value;
  var serviceQual = document.getElementById("serviceQual").value;
  var numOfPeople = document.getElementById("peopleamt").value;

  //validate input
  if (billAmt === "" || serviceQual == 0) {
    alert("Please enter values");
    return;
  }
  //Check to see if this input is empty or less than or equal to 1
  if (numOfPeople === "" || numOfPeople <= 1) {
    numOfPeople = 1;
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }

  //Calculate tip
  var total = (billAmt * serviceQual) / numOfPeople;
  //round to two decimal places
  total = Math.round(total * 100) / 100;
  //next line allows us to always have two digits after decimal point
  total = total.toFixed(2);
  //Display the tip
  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = total;

}

//Hide the tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

//click to call function
document.getElementById("calculate").onclick = function() {
  calculateTip();

};