let form = document.querySelector("form"); // form

let nameInput = document.getElementById("nameinput");
let emailInput = document.getElementById("emailinput");
let subjectInput = document.getElementById("subjectinput");
let messageInput = document.getElementById("messageinput");

let info = document.getElementById("info"); // ul

// run this code on enter or click of submit
form.addEventListener("submit", function (event) {

if(nameInput.value !== "" && emailInput.value !== "" && subjectInput.value !== "" && messageInput.value !== ""){

  event.preventDefault();

  info.innerHTML += `<h1>New Entry<h1>`;

  info.innerHTML += `<li>${nameInput.value}</li>`;
  info.innerHTML += `<li>${emailInput.value}</li>`;
  info.innerHTML += `<li>${subjectInput.value}</li>`;
  info.innerHTML += `<li>${messageInput.value}</li>`;

  nameInput.value = "";
  emailInput.value = "";
  subjectInput.value = "";
  messageInput.value = "";

}else{
    
    event.preventDefault();

    info.innerHTML += `<h1>Error! You Need to fill all boxes!<h1>`;

}

});


