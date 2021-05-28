const strip = (str) => str.toLowerCase().replace(' ', '');

let storage, part, subject, assignmentsElements, extra;

const createCheckbox = (id) => {
    const element = document.createElement('input');
    element.type = "checkbox";
    element.name = id;
    element.id = id;

    if (storage[part].basic.indexOf(id) !== -1) {
        element.checked = true;
    }

    element.addEventListener('click', (e) => {
        const check = storage[part].basic.indexOf(e.target.id);
        if (check === -1) {
            storage[part].basic.push(e.target.id);
        } else {
            storage[part].basic.splice(check, 1);
        }
        if (storage[part].basic.length === assignmentsElements.basic.length) {
            extra.classList.add('visible');
            extra.classList.remove('invisible');
        } else {
            extra.classList.remove('visible');
            extra.classList.add('invisible');
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
           if (element.tagName !== 'H4') return;
            if (extra) {
                extraAssignments.push(element);
            } else {
                basicAssignments.push(element);
            }
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
    const assignmentsContainer = document.querySelector('.assignments')
    extra = assignmentsContainer.querySelector('.extra');

    assignmentsElements = getAssignments(assignmentsContainer);

    storage = JSON.parse(window.localStorage.getItem(subject));

    if (storage === null) {
        storage = {
            [part]: {
                basic: [],
                extra: []
            }
        };
    } else {
        if (!storage.hasOwnProperty(part)) {
            storage[part] = {};
            storage[part].basic = [];
            storage[part].extra = [];
        }
    }

    if (storage[part].basic.length === assignmentsElements.basic.length) {
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
        element.appendChild(createCheckbox(strip(element.textContent)));
    });
});