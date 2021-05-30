const strip = (str) => str.trim().toLowerCase().replace(/ /g, '');

window.addEventListener('load', () => {
    const h1 = document.querySelector('h1');
    const title = strip(h1.textContent);


    let storage = localStorage.getItem(title);

    const pre = document.createElement('pre');
    pre.innerHTML = JSON.stringify(JSON.parse(storage), undefined, 2);

    h1.insertAdjacentElement('afterend', pre);
})