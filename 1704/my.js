
/*
Задание
Предположим вы получили объект с данными (создайте переменную, в которой будет храниться объект) - spaceship,
 в котором находятся характеристики космического корабля, такие как:
name
manufacturer
crew
maxSpeed
Необходимо отобразить их на странице.
Стилизация на ваше усмотрение
Дополнительная задача: Создайте кнопку "Hide Manufacturer", 
которая будет скрывать manufacturer корабля на странице





*/

const spaceship = {
            name: 'Alisa',
            manufacturer: 'WWW',
            crew: 15,
            maxSpeed: '20 km/c'
        };

        // Создаем div для информации о космическом корабле
        const spaceshipDiv = document.getElementById('spaceship');
		for (let key in spaceship) {
		
		//document.writeln(spaceship[key]);
		
		
       // for (const [key, value] of Object.entries(spaceship)) {
            //const keyValueString = key+": " + spaceship[key];
			
		    const keyValueString =	`${key}: ${spaceship[key]}`;
            const div = document.createElement('div');
            div.textContent = keyValueString;
            spaceshipDiv.appendChild(div);

            // Если ключ - 'manufacturer', добавляем id и стиль
            if (key === 'manufacturer') {
                div.id = 'manufacturer';
                div.style.display = 'none';
            }
			
			
			
        }

        // Подписываемся на событие клика на кнопке
        document.getElementById('MyButton').addEventListener('click', visible);

        // Функция для переключения видимости информации о производителе
        function visible() {
            const manufacturerDiv = document.getElementById('manufacturer');
            manufacturerDiv.style.display = (manufacturerDiv.style.display === 'none') ? 'block' : 'none';
        }