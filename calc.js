//Author: Sean Casaus
//Use: Learn Javascript with html
//About: Simple Percentage Calculators
//Date: 2/23/18
//-----------------------------------------------------------------------------

//Textfields
var numField1 = document.getElementById('numField1');
var numField2 = document.getElementById('numField2');
var numField3 = document.getElementById('numField3');
var numField4 = document.getElementById('numField4');
var numField5 = document.getElementById('numField5');
var numField6 = document.getElementById('numField6');
var numField7 = document.getElementById('numField7');
var numField8 = document.getElementById('numField8');
var numField9 = document.getElementById('numField9');
var numField10 = document.getElementById('numField10');
var numField11 = document.getElementById('numField11');
var numField12 = document.getElementById('numField12');
var numField13 = document.getElementById('numField13');
var numField14 = document.getElementById('numField14');

//X % of Y
var resultField = document.getElementById('resultField');
var form = document.getElementById('xIsWhatPercentOfY');

var myCalcFunction = function(event) {
    if (!numField1.value || !numField2.value) {
        alert("Please Enter Values in Fields!");
    }
    else {
        //built in function to convert from string to float
        var x = parseFloat(numField1.value);
        var y = parseFloat(numField2.value);
        numField3.value = numField2.value;
        numField4.value = numField1.value;
        
        var result = 100 * (x / y);

        resultField.innerText = "Percentage: " + result + "%";
        event.preventDefault(); //stops default refresh
    }
}

//Y % X
var resultField2 = document.getElementById('resultField2');
var form2 = document.getElementById('yIsWhatPercentOfX');

var myCalcFunction2 = function(event2) {
    if (!numField3.value || !numField4.value) {
        alert("Please Enter Values in Fields!");
    }
    else {
        //built in function to convert from string to float
        var y = parseFloat(numField3.value);
        var x = parseFloat(numField4.value);
        
        var result = 100 * (y / x);

        resultField2.innerText = "Percentage: " + result + "%";
        event2.preventDefault(); //stops default refresh
    }
}

//X is Y% of What?
var resultField3 = document.getElementById('resultField3');
var form3 = document.getElementById('xIsYPercentOfWhat');

var myCalcFunction3 = function(event3) {
    if (!numField5.value || !numField6.value) {
        alert("Please Enter Values in Fields!");
    }
    else {
        //built in function to convert from string to float
        var x = parseFloat(numField5.value);
        var y = parseFloat(numField6.value);
        
        var result = x / (y/100);

        resultField3.innerText = "What: " + result;
        event3.preventDefault(); //stops default refresh
    }
}

//What % of X is Y?
var resultField4 = document.getElementById('resultField4');
var form4 = document.getElementById('whatPercentOfXisY');

var myCalcFunction4 = function(event4) {
    if (!numField7.value || !numField8.value) {
        alert("Please Enter Values in Fields!");
    }
    else {
        //built in function to convert from string to float
        var x = parseFloat(numField7.value);
        var y = parseFloat(numField8.value);
        
        var result = (y / x) * 100;

        resultField4.innerText = "Percentage: " + result + "%";
        event4.preventDefault(); //stops default refresh
    }
}

//What is Y% of X?
var resultField5 = document.getElementById('resultField5');
var form5 = document.getElementById('whatIsYPercentOfX');

var myCalcFunction5 = function(event5) {
    if (!numField9.value || !numField10.value) {
        alert("Please Enter Values in Fields!");
    }
    else {
        //built in function to convert from string to float
        var x = parseFloat(numField9.value);
        var y = parseFloat(numField10.value);
        
        var result = (x / 100) * y;

        resultField5.innerText = "What: " + result;
        event5.preventDefault(); //stops default refresh
    }
}

//X % of what is Y?
var resultField6 = document.getElementById('resultField6');
var form6 = document.getElementById('xPercentageOfWhatIsY');

var myCalcFunction6 = function(event6) {
    if (!numField11.value || !numField12.value) {
        alert("Please Enter Values in Fields!");
    }
    else {
        //built in function to convert from string to float
        var x = parseFloat(numField11.value);
        var y = parseFloat(numField12.value);
        
        var result = y / (x / 100);

        resultField6.innerText = "What: " + result;
        event6.preventDefault(); //stops default refresh
    }
}

//Y% of X is what?
var resultField7 = document.getElementById('resultField7');
var form7 = document.getElementById('yPercentageOfXisWhat');

var myCalcFunction7 = function(event7) {
    if (!numField13.value || !numField14.value) {
        alert("Please Enter Values in Fields!");
    }
    else {
        //built in function to convert from string to float
        var x = parseFloat(numField13.value);
        var y = parseFloat(numField14.value);
        
        var result = (x / 100) * y;

        resultField7.innerText = "What: " + result;
        event7.preventDefault(); //stops default refresh
    }
}

//Action Listeners 
//submit is built in keyword for javascript
form.addEventListener('submit', myCalcFunction);
form2.addEventListener('submit', myCalcFunction2);
form3.addEventListener('submit', myCalcFunction3);
form4.addEventListener('submit', myCalcFunction4);
form5.addEventListener('submit', myCalcFunction5);
form6.addEventListener('submit', myCalcFunction6);
form7.addEventListener('submit', myCalcFunction7);












