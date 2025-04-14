let searchInput = document.getElementById('searchInput');
let ul = document.getElementById('searchResults')
let searchBtn = document.getElementById('searchButton')

searchBtn.addEventListener("click", function (event) {
    console.log("Search Initiated")
    
    const query = searchInput.value.trim();

    console.log(query.length);

    if (query.length == 0){
        alert("You need to enter a value");
        return;
    }

    fetch('https://github.uconn.edu/api/v3/search/users?q=Brian')
    .then(function(response){
    return response.json();
    })
    .then(function(data){

        console.log(data);
    })
    .catch(function(error){
        console.log('Error:', error);
    });
})