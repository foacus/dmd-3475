let searchInput = document.getElementById('searchInput');
let ul = document.getElementById('searchResults');
let searchBtn = document.getElementById('searchButton');
let resultsCount = document.getElementById('resultsCount');

searchBtn.addEventListener("click", function (event) {
    console.log("Search Initiated")
    
    const query = searchInput.value.trim();

    console.log(query.length);

    if (query.length == 0){
        alert("You need to enter a value");
        return;
    }

    fetch(`https://github.uconn.edu/api/v3/search/users?q=${query}`)

    .then(function(response){
    return response.json();
    })

    .then(function(data){
        
        ul.innerHTML = '';

        if(data.total_count > 0){
            resultsCount.textContent = `${data.total_count} result(s) found.`;
       
            data.items.forEach(function(user){
                const li = document.createElement('li');

                li.innerHTML = `
                <img src="${user.avatar_url}" alt="Avatar" width="50" height="50" class="me-3 rounded">
                <a href="https://github.uconn.edu/${user.login}" target="_blank">${user.login}</a>
                `;

                ul.appendChild(li);
            });
        } else {
            resultsCount.textContent = 'No users found.';
        }
        
           
    })
    .catch(function(error){
        console.log('Error:', error);
    })
})