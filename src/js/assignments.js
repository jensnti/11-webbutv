/** look away 💩 **/
let storage, part, subject, assignmentsElements, extra, area;

const strip = (str) => str.toLowerCase().replace(' ', '');

const checkAssignmentExists = (arr, id) => {
    let check = -1;
    arr.forEach((element, index) => {
        if (element.id === id) check = index;
    });
    return check;
};

const checkAssignmentsStatus = (arr, supposedLength) => {
    let count = 0;
    arr.forEach(element => {
        if (element.completed === true) count += 1;
    });
    return supposedLength === count ? true : false;
};

const createCheckbox = (id, type) => {
    const element = document.createElement('input');
    element.type = "checkbox";
    element.name = id;
    element.id = id;

    let index = checkAssignmentExists(storage[area][part][type], id);

    if (index !== -1 && storage[area][part][type][index].completed) {
        element.checked = true;
    }

    element.addEventListener('click', (e) => {
        let index = checkAssignmentExists(storage[area][part][type], id);

        if (index === -1) {
            let temp = {
                id: e.target.id,
                completed: true,
                date: Date.now()
            };
            storage[area][part][type].push(temp);
        } else {
            storage[area][part][type][index].completed = storage[area][part][type][index].completed ? false : true;
            storage[area][part][type][index].date = Date.now();
        }

        if (type === 'basic' && extra) {
            if (checkAssignmentsStatus(storage[area][part][type], assignmentsElements.basic.length)) {
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
        if(!storage[area]) {
            storage[area] = {};
        }
        if (!storage[area].hasOwnProperty(part)) {
            storage[area][part] = {};
            storage[area][part].basic = [];
            storage[area][part].extra = [];
        }
    }

    storage[area][part].assignments =  {
        basic: assignmentsElements.basic.length,
        extra: assignmentsElements.extra.length
    };

    if(extra) {
        if (checkAssignmentsStatus(storage[area][part].basic, assignmentsElements.basic.length) ) {
            extra.classList.add('visible');
            extra.classList.remove('invisible');
        } else {
            extra.classList.remove('visible');
            extra.classList.add('invisible');
        }    
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

    console.log(storage)
});