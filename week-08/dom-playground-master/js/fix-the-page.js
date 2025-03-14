/**
 * Use this javascript file to fix the page design and layout. 
 * Reference the index.html comments for complete details.
 */

// 1) Add CSS Properties to the body tag
let body = document.getElementById('css-zen-garden');
body.style.backgroundColor = '#69f';
body.style.margin = 0;
body.style.color = '#000033';
body.style.fontFamily = "'Trebuchet MS', sans-serif";
body.style.fontSize = '14pt';
//<!-- font: 10pt/14pt "Trebuchet MS", sans-serif; -->

// 2) Add the .page-wrapper class
let div1 = document.querySelector('div') 
div1.classList.add('page-wrapper');


// 3) Add the .summary class
sumDiv = document.getElementById('zen-summary')
sumDiv.classList.add('summary')

// 4) Add the .sidebar class
sideBar = document.querySelector('aside');
sideBar.classList.add('sidebar')

// 5) Add these links to the "Resources" <ul>
let resources = [
    {
        title: "View the source CSS file of the currently-viewed design.",
        href: "css/style.css",
        linkText: "View This Design&#8217;s <abbr title=\"Cascading Style Sheets\">CSS</abbr>"
    },
    {
        title: "Links to great sites with information on using CSS.",
        href: "http://www.mezzoblue.com/zengarden/resources/",
        linkText: "<abbr title=\"Cascading Style Sheets\">CSS</abbr> Resources "
    },
    {
        title: "A list of Frequently Asked Questions about the Zen Garden.",
        href: "http://www.mezzoblue.com/zengarden/faq/",
        linkText: "<abbr title=\"Frequently Asked Questions\">FAQ</abbr> "
    },   
    {
        title: "Send in your own CSS file.",
        href: "http://www.mezzoblue.com/zengarden/submit/",
        linkText: "Submit a Design"
    },
    {
        title: "View translated versions of this page.",
        href: "http://www.mezzoblue.com/zengarden/translations/",
        linkText: "Translations"
    },
]; 

// Loop over the resources array to build each list item.
var resourcesList = document.getElementById("resourceList")

resources.forEach(function(resource) {

    var li = document.createElement("li");
    var a = document.createElement("a");

    a.href = resource.href;
    a.innerText = resource.linkText;
    a.Title = resource.title;

    li.appendChild(a);
    resourcesList.appendChild(li);

});

// Hint: Loop over the resources array to build each list item. 
// E.g., <li><a href="someLink" title="someTitle">someText</a></li>


