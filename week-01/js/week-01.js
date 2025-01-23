/**
 * Week 01
 */

// 1. Change the value to your first name:
let firstName = 'Troy';

// 2. Change the value to your age:
let age = 21;

// 3. Complete the sentence: "I'm taking this course because..."
let whyImTakingThisCourse = "I have programming expierence making games and I want to expand my understanding and skillsets into web design.";

// 4. You're all done. Take a look at the code below to see how this all works.

// Get a reference to the button in index.html with the class "alert-btn"
let button = document.querySelector('button.alert-btn');

// Add an event listener for the click event to the button
if(button !== null){
    button.addEventListener('click', function() {

        // Create a message to display in the alert
        let message = 'My name is ' + firstName + 
                    ' and I am ' + age + ' years old. ' +
                    'I am taking this course because ' + whyImTakingThisCourse;
        
        // Display an alert with the message we created
        alert(message);
    });
}



// Export the variables so we can use them in the tests
export { firstName, age, whyImTakingThisCourse };