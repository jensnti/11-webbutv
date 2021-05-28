let storage;

const checkAssignmentsStatus = (arr, supposedLength = 0) => {
    let count = 0;
    arr.forEach((element) => {
        if (element.completed === true) count += 1;
    });
    return supposedLength === count ? true : false;
};

const createProgress = (segments = 0, total = 0) => {
    const progress = document.createElement('div');
    progress.classList.add('progress');
    const bar = document.createElement('div');
    bar.classList.add('progress-bar');
    bar.classList.add('bg-success');
    bar.setAttribute('style', `width: ${segments * total}%`);
    progress.appendChild(bar);
    return progress;
};

window.addEventListener('load', () => {
    const subject = document.title.trim().toLowerCase();

    storage = JSON.parse(window.localStorage.getItem(subject));

    const sections = document.querySelectorAll('.accordion-item');

    let themes = [];
    
    sections.forEach((element) => {
        let h2 = element.querySelector('h2');
        if (h2) {
            let temp = {
                element: element,
                areas: 0,
                completed: 0
            };
            themes.push(temp);
        }

        let h3 = element.querySelector('h3');
        let area = h3 ? h3.textContent.trim().toLowerCase() : false;
        if (area) {
            const container = document.querySelector(`#${area}`);
            const parts = container.querySelectorAll('li');

            themes[themes.length -1].areas = themes[themes.length -1].areas + parts.length;

            let total = 0;
            if (storage && storage[area]) {
                for (part in storage[area]) {
                    let check = checkAssignmentsStatus(
                        storage[area][part].basic,
                        storage[area][part].assignments?.basic
                    );
                    if (check) {
                        total = total + 1;

                        parts.forEach((element) => {
                            if (
                                element.textContent.trim().toLowerCase() ===
                                part
                            ) {
                                element.classList.add('d-flex');
                                element.classList.add('align-items-baseline');
                                const el = document.createElement('img');
                                el.classList.add('ms-2');
                                el.src =
                                    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%23198754' viewBox='0 0 16 16'%3E%3Cpath d='M13.485 1.431a1.473 1.473 0 0 1 2.104 2.062l-7.84 9.801a1.473 1.473 0 0 1-2.12.04L.431 8.138a1.473 1.473 0 0 1 2.084-2.083l4.111 4.112 6.82-8.69a.486.486 0 0 1 .04-.045z'/%3E%3C/svg%3E";
                                element.appendChild(el);
                            }
                        });
                    }
                }
            }
            themes[themes.length -1].completed = themes[themes.length -1].completed + total;

            element.insertAdjacentElement(
                'beforeend',
                createProgress(100 / parts.length, total)
            );
        }
    });

    themes.forEach(theme => {
        theme.element.insertAdjacentElement('beforeend', createProgress(100 / theme.areas, theme.completed));
    });
});
