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
        console.log('data', data)
        if(data.status == 'error'){
            data.errors.to.forEach(item =>{
                responseMessage.innerHTML = `${item} <br>`;
            });
            data.errors.subject.forEach(item =>{
                responseMessage.innerHTML = `${item} <br>`
            });
            data.errors.message.forEach(item =>{
                responseMessage.innerHTML = `${item} <br>`
            });
        }else{
            responseMessage.innerHTML = `Message sent!`
        }
    })
    .catch(function(error){

        // let errorMessage = Object.values(error.errors);
        // responseMessage.innerHTML = `${errorMessage}`;    
    });
})