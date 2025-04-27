let form = document.querySelector("form");
let responseMessage = document.getElementById("responseMessage");

form.addEventListener("submit", function (event){

    event.preventDefault();

    let formData = new FormData(form)

    console.log(formData);

    fetch('https://fake-mail-api.laravel.cloud/api/send', {
        method: 'POST',
        body: formData
    })
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
    })
    .catch(function(error){
        console.error('Error:', error)

        responseMessage.innerHTML = error.message;
    });
})