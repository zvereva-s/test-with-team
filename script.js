const books = [
    {
        id: '1',
        title: `Apple. Эволюция компьютера`,
        author: `Владимир Невзоров`,
        img: `https://bukva.ua/img/products/449/449532_200.jpg`,
        plot: `Богато иллюстрированный хронологический справочник по истории компьютеров, в котором увлекательно 
и в структурированном виде изложена информация о создании и развитии техники Apple на фоне истории 
персональных компьютеров в целом.
В книге даны описания десятков наиболее значимых моделей устройств как Apple, так и других производителей, 
сопровождающиеся большим количеством оригинальных студийных фотографий.
Книга предназначена для широкого круга читателей, интересующихся историей электроники. 
Она также может послужить источником вдохновения для дизайнеров, маркетологов и предпринимателей.`,
    },
    {
        id: '2',
        title: `Как объяснить ребенку информатику`,
        author: `Кэрол Вордерман`,
        img: `https://bukva.ua/img/products/480/480030_200.jpg`,
        plot: `Иллюстрированная энциклопедия в формате инфографики о технических, социальных и культурных аспектах 
в информатике. Пошагово объясняет, как детям максимально эффективно использовать компьютеры и интернет-сервисы, 
оставаясь в безопасности. 
Книга рассказывает обо всем: от хранения данных до жизни в интернет-пространстве, 
от программирования до компьютерных атак. О том, как компьютеры функционируют, о современном программном 
обеспечении, устройстве Интернета и цифровом этикете. Все концепты - от хакера до биткоина - 
объясняются наглядно с помощью иллюстраций и схем.`,
    },
    {
        id: '3',
        title: `Путь скрам-мастера. #ScrumMasterWay`,
        author: `Зузана Шохова`,
        img: `https://bukva.ua/img/products/480/480090_200.jpg`,
        plot: `Эта книга поможет вам стать выдающимся скрам-мастером и добиться отличных результатов с вашей командой. 
Она иллюстрированная и легкая для восприятия - вы сможете прочитать ее за выходные, а пользоваться полученными 
знаниями будете в течение всей карьеры.
Основываясь на 15-летнем опыте, Зузана Шохова рассказывает, какие роли и обязанности есть у скрам-мастера, 
как ему решать повседневные задачи, какие компетенции нужны, чтобы стать выдающимся скрам-мастером, 
какими инструментами ему нужно пользоваться.`,
    },
];


const getId = document.querySelector('#root');
const leftSide = document.createElement('div');
const rightSide = document.createElement('div');
leftSide.classList.add('left-side');
rightSide.classList.add('right-side');



const titleEl = document.createElement('h1');
titleEl.classList.add('add-app-title')
titleEl.textContent = 'Book App';

const listEl = document.createElement('ul');
listEl.classList.add('book-list');


const addBtn = document.createElement('button');
addBtn.classList.add('add-btn', 'js-add-btn');
addBtn.textContent = 'Add';


leftSide.append(titleEl, listEl, addBtn);
getId.append(leftSide, rightSide);
renderBooks()

function renderBooks() {
    const booksMarkup = books.map(({ id, title }) => {
        return `<li class="book-item">
            <p class="book-title">${title}</p>
            <button type="button" class="del-book-btn">delete</button>
              <button type="button" class="edit-book-btn">edit</button>
        </li>`
    }).join('');
    listEl.insertAdjacentHTML('beforeend', booksMarkup);
}

function renderPreview({ id, title, author, img, plot } = {}) {
    const markup = `<h2 class="preview-title">${title}</h2>
    <p class="preview-author">${author}</p>
    <img class="preview-img" src="${img}" alt="${title}">
    <p class="preview-plot">${plot}</p>`
    // rightSide.insertAdjacentHTML('beforeend')
    return markup;
}

// renderPreview(books[0])
// console.log(listEl);