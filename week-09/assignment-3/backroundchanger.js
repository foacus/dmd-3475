let btn = document.querySelector('button');
let color = document.getElementById('colorselect');

document.body.style.backgroundColor = color.value;

//btn.addEventListener('click', function(){
    //document.body.style.backgroundColor = color.value;
//})

color.addEventListener("input", updateColor);
color.addEventListener("change", updateColor);

function updateColor(){
    document.body.style.backgroundColor = color.value;
}

