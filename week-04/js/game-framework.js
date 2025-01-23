/**
 * Game Framework
 * It's safe to ignore this file. It's just a helper for the game.
 * 
 */

// Get the templates
let confirmTmpl = document.querySelector('#confirm').content;
let promptTmpl = document.querySelector('#prompt').content;
let alertTmpl = document.querySelector('#alert').content;



function Confirm(question = '', helpText='', appendTo = 'main') {

    if (typeof question == 'string' && question !== '') {

        return new Promise((resolve, reject) => {

            // documentFragment from string
            let df =  confirmTmpl.cloneNode(true);

            df.querySelector('.card-title').textContent = question;
            df.querySelector('.card-text').textContent = helpText;


            df.querySelector('.btn-true').addEventListener('click', (event) => {
                console.log('Promise Resolved', true)
                resolve(true)
            }, {once: true})

            df.querySelector('.btn-false').addEventListener('click', (event) => {
                console.log('Promise Resolved', false)
                resolve(false)
            }, { once: true })

            document.querySelector(appendTo).appendChild(df)
        });
    }
}


function Alert(question = '', helpText = '', appendTo = 'main') {

    if (typeof question == 'string' && question !== '') {

        return new Promise((resolve, reject) => {

            // documentFragment from string
            let df = alertTmpl.cloneNode(true);

            df.querySelector('.card-title').textContent = question;
            df.querySelector('.card-text').textContent = helpText;

            df.querySelector('.btn-true').addEventListener('click', (event) => {
                console.log('Promise Resolved', true)
                resolve(true)
            }, { once: true })

            df.querySelector('.btn-false').addEventListener('click', (event) => {
                console.log('Promise Resolved', false)
                resolve(false)
            }, { once: true })

            document.querySelector(appendTo).appendChild(df)
        });
    }
}


function Prompt(question = '', helpText = '', appendTo = 'main') {

    if (typeof question == 'string' && question !== '') {

        return new Promise((resolve, reject) => {

            // documentFragment from string
            let df = promptTmpl.cloneNode(true);

            df.querySelector('.card-title').textContent = question;
            // df.querySelector('.card-text').textContent = helpText;
            let input = df.querySelector('input');

            df.querySelector('.btn-true').addEventListener('click', (event) => {
                console.log('Promise Resolved', input.value)
                resolve(input.value)
            }, { once: true })

            df.querySelector('.btn-false').addEventListener('click', (event) => {
                console.log('Promise Resolved', false)
                resolve(false)
            }, { once: true })

            document.querySelector(appendTo).appendChild(df)
        });
    }
}


// Autoscroll to the bottom of the page
const resizeObserver = new ResizeObserver(entries =>
    window.scrollTo(0, document.body.scrollHeight)
)

// start observing a DOM node
resizeObserver.observe(document.body)

export { Confirm, Alert, Prompt }