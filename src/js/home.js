let storage;

window.addEventListener('load', () => {
    const subject = document.title.trim().toLowerCase();

    storage = JSON.parse(window.localStorage.getItem(subject));

    console.log(storage)

    const h3 = document.querySelectorAll('h3');

    console.log(h3)

    h3.forEach(element => {
        console.log(element.textContent.trim().toLowerCase());
    });

});