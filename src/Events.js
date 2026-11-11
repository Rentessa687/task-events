/*
   1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
      При клике по button удалить этот button.
*/
export function createButton() {
    const button = document.createElement('button');
    button.textContent = 'Удали меня';

    button.addEventListener('click', () => {
        button.remove();
    });

    document.body.append(button);
}

export function createArrList(arr) {
    const list = document.createElement('ul');

    for (const text of arr) {
        const item = document.createElement('li');
        item.textContent = text;

        item.addEventListener('mouseover', () => {
            item.setAttribute('title', item.textContent);
        });

        list.append(item);
    }

    document.body.append(list);
}

export function createLink() {
    const link = document.createElement('a');
    link.setAttribute('href', 'https://tensor.ru/');
    link.textContent = 'tensor';

    let clicked = false;

    link.addEventListener('click', (event) => {
        if (!clicked) {
            event.preventDefault();
            link.textContent += ` ${link.getAttribute('href')}`;
            clicked = true;
        }
    });

    document.body.append(link);
}

function createItem() {
    const item = document.createElement('li');
    item.textContent = 'Пункт';

    item.addEventListener('click', () => {
        item.textContent += '!';
    });

    return item;
}

export function createList() {
    const list = document.createElement('ul');
    const button = document.createElement('button');
    button.textContent = 'Добавить пункт';

    list.append(createItem());

    button.addEventListener('click', () => {
        list.append(createItem());
    });

    document.body.append(list, button);
}
