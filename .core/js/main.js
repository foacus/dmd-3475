let css = document.createElement('link');
css.rel = 'stylesheet';
css.href = '../.core/css/main.css';
document.body.appendChild(css);



let button = document.createElement('button');

button.classList.add('test-btn');
button.innerText = 'Run Tests';

button.addEventListener('click', function() {
    window.open('./tests.html', '_blank');
})

document.body.appendChild(button);