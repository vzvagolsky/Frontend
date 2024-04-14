/*
Задача3:
Сделать кнопку, которая добавляет карточки на странице
в каждой карточке есть заголовок, текст и картинка (url картинки можо использовать одинаковый)

*/

function addCard() {
            // Создаем элемент карточки
            const card = document.createElement('div');
            card.classList.add('card');

            // Создаем заголовок
            const title = document.createElement('p');
            title.textContent = 'Ноутбуки';
            card.appendChild(title);

            // Создаем текст
            const text = document.createElement('p');
            text.textContent = `Intel Core i5-1340P Prozessor der 13. 
			Generation (12 MB Cache, bis zu 4,60 GHz)`;
            card.appendChild(text);

            // Создаем изображение
            const image = document.createElement('img');
            image.src = "./komp1.webp "; // Пример URL картинки
            card.appendChild(image);

            // Добавляем карточку на страницу
            document.getElementById('cardContainer').appendChild(card);
        }