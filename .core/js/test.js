
const body = document.querySelector('body');
const head = document.querySelector('head');

async function runMochaTests(list=[]) {

    if(list.length > 0) {
        // Add CSS
        $el('link', {rel: 'stylesheet', href: 'https://unpkg.com/mocha/mocha.css'}).appendTo(head);

        // Add report canvas
        $el('div', {id: 'mocha'}).appendTo(body);

        // Add required scripts
        // $el('script', { src: 'https://unpkg.com/chai/chai.js', type: 'module' }).appendTo(body);

        let loadChai = new Promise((resolve, reject) => {
            $el('script', { src: 'https://unpkg.com/chai/chai.js', type: 'module' }).addEvent('load', () => {
                console.log('Chai loaded')
                resolve()
            }).appendTo(body);
        })

        let loadMocha = new Promise((resolve, reject) => {
            $el('script', { src: 'https://unpkg.com/mocha/mocha.js' }).addEvent('load', () => {
                mocha.setup({ ui: "bdd" });
                mocha.checkLeaks();
                console.log('Mocha loaded')
                resolve()
            }).appendTo(body);
        })

        testsLoaded = [];
        loadMocha.then(() => {
            // Add tests
            list.forEach(test => {
                testsLoaded.push(
                    new Promise((resolve, reject) => {
                        $el('script', { src: `test/test.${test}.js`, type:'module' }).addEvent('load', () => {
                            console.log(`Test ${test} loaded`);
                            resolve();
                        }).appendTo(body);
                    })
                );
                // $el('script', { src:   `test/test.${test}.js` }).appendTo(body);
            });

            Promise.all(testsLoaded).then(() => {
                $el('script', { class: 'mocha-exec' }, 'mocha.run();').appendTo(body);
            });

        });
        
    }

}

// Quick and Dirty Element maker
function $el(tag, attributes={}, content='') {
    const obj = document.createElement(tag);
    obj.innerHTML = content;

    Object.keys(attributes).forEach(key => {
        obj.setAttribute(key, attributes[key]);
    });

    obj.appendTo = function (el) {
        el.appendChild(this);
        return obj
    };

    obj.addEvent = function(evt, fn) {
        obj.addEventListener(evt, fn);
        return obj;
    }

    return obj;
}