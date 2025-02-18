/**
 * Get references to each of the form inputs
 */
let total = document.querySelector('#total');
let tip = document.querySelector('#tip');
let people = document.querySelector('#people');

/**
 * Whenever the fields are updated, we call
 * the updateValues function. 
 */
total.addEventListener('change', updateValues);
total.addEventListener('keyup', updateValues);
tip.addEventListener('change', updateValues);
tip.addEventListener('keyup', updateValues);
people.addEventListener('change', updateValues);
people.addEventListener('keyup', updateValues);

/**
 * We will need references for the span tags
 * that we will use to output our results.
 */
let tipOutput = document.querySelector(".tipOutput");
let totalOutput = document.querySelector(".totalOutput");

/**
 * This function is run every time an input is changed
 * by a user.
 */
function updateValues(event){

    // Get the latest values from our form inputs
    let totalValue = total.value;
    let tipValue = tip.value;
    let peopleValue = people.value;

    // Update the values on the screen
    tipOutput.innerText = calculateTipPerPerson(totalValue, tipValue, peopleValue);
    totalOutput.innerText = calculateTotalPerPerson(totalValue, tipValue, peopleValue);
}

/**
 * Your code goes down here ...
 * @todo Write functions for calculateTipPerPerson() and calculateTotalPerPerson()
 */

function calculateTipPerPerson(totalValue, tipValue, peopleValue){
    let tipPerPerson = tipValue * .01 * totalValue / peopleValue;
    return Math.floor(tipPerPerson * 100) / 100;
}
function calculateTotalPerPerson(totalValue, tipValue, peopleValue){
    let tipPerPerson = tipValue * .01 * totalValue / peopleValue;
    let totalPerPerson = totalValue / peopleValue;
    return Math.floor((tipPerPerson + totalPerPerson) * 100) / 100;
}