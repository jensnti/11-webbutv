const strip = (str) => str.toLowerCase().replace(' ', '');

let storage, part, subject, assignmentsElements, extra, area;

const createCheckbox = (id, type) => {
    const element = document.createElement('input');
    element.type = "checkbox";
    element.name = id;
    element.id = id;

    if (storage[area][part][type].indexOf(id) !== -1) {
        element.checked = true;
    }

    element.addEventListener('click', (e) => {
        const check = storage[area][part][type].indexOf(e.target.id);
        if (check === -1) {
            storage[area][part][type].push(e.target.id);
        } else {
            storage[area][part][type].splice(check, 1);
        }
        if (type === 'basic') {
            if (storage[area][part][type].length === assignmentsElements[type].length) {
                extra.classList.add('visible');
                extra.classList.remove('invisible');
            } else {
                extra.classList.remove('visible');
                extra.classList.add('invisible');
            }
        }
        window.localStorage.setItem(subject, JSON.stringify(storage));
    });
    return element;
}

const getAssignments = (container) => {
    let basicAssignments = [];
    let extraAssignments = [];
    let extra = false;
    container.childNodes.forEach(element => {
        if (element.textContent.toLowerCase().search('⭐⭐') !== -1) {
            extra = true;
        }
        if (element.textContent.toLowerCase().search('uppgift') !== -1) {
            if (element.tagName === 'DIV') {
                element.childNodes.forEach(child => {
                    if (child.tagName !== 'H4') return;
                    extraAssignments.push(child);
                })
            }
            if (element.tagName !== 'H4') return;
            basicAssignments.push(element);
        }
    });
    return {
        basic: basicAssignments,
        extra: extraAssignments
    };
}

window.addEventListener('load', () => {
    const title = document.title.split('-');
    subject = title[1].trim().toLowerCase();
    part = title[0].trim().toLowerCase();
    area = document.querySelector('#area').textContent.trim().toLowerCase();
    const assignmentsContainer = document.querySelector('.assignments')
    extra = assignmentsContainer.querySelector('.extra');

    assignmentsElements = getAssignments(assignmentsContainer);

    storage = JSON.parse(window.localStorage.getItem(subject));

    if (storage === null) {
        storage = {
            [area]: {
                [part]: {
                    basic: [],
                    extra: []
                }    
            }
        };
    } else {
        if (!storage[area].hasOwnProperty(part)) {
            storage[area][part] = {};
            storage[area][part].basic = [];
            storage[area][part].extra = [];
        }
    }

    console.log(storage)

    if (storage[area][part].basic.length === assignmentsElements.basic.length) {
        extra.classList.add('visible');
        extra.classList.remove('invisible');
    } else {
        extra.classList.remove('visible');
        extra.classList.add('invisible');
    }

    assignmentsElements.basic.forEach(element => {
        element.classList.add('d-flex');
        element.classList.add('justify-content-between');
        element.classList.add('align-items-center');
        element.appendChild(createCheckbox(strip(element.textContent), 'basic'));
    });

    assignmentsElements.extra.forEach(element => {
        element.classList.add('d-flex');
        element.classList.add('justify-content-between');
        element.classList.add('align-items-center');
        element.appendChild(createCheckbox(strip(element.textContent), 'extra'));
    });
});