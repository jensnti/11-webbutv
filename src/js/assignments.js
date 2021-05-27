const strip = (str) => str.toLowerCase().replace(' ', '');

let assignments = [];

const createCheckbox = (id, len, extra) => {
    const element = document.createElement('input');
    element.type = "checkbox";
    element.name = strip(id);
    element.id = strip(id);
    element.addEventListener('click', (e) => {
        console.log(e.target.id)
        const check = assignments.indexOf(e.target.id);
        if (check === -1) {
            console.log(check)
            assignments.push(e.target.id);
        } else {
            console.log(check)
            assignments.splice(check, 1);
        }
        console.log(assignments);
        if (assignments.length === len -1) {
            console.log('last');
            extra.classList.toggle('d-none');
        }
    });
    return element;
}

window.addEventListener('load', () => {
    // const header = document.querySelector('h1').textContent.split('-')[1].trim().toLowerCase();
    const assignmentsElement = document.querySelector('.assignments')

    const extra = assignmentsElement.querySelector('.extra');
    extra.classList.toggle('d-none');


    const h4 = assignmentsElement.querySelectorAll('h4');
    h4.forEach((element) => {
        if (element.textContent.toLowerCase().includes('uppgift')) {
            const checkbox = createCheckbox(element.textContent, h4.length, extra);
            element.classList.add('d-flex');
            element.classList.add('justify-content-between');
            element.appendChild(checkbox);
        }
    });
});