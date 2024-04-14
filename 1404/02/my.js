/*
Задача2:
На странице есть div с текстом и кнопка ok , сделать так , 
чтобы кнопка красила текст в красный цвет при нажатии

*/


function changeColor() {
            // Получаем ссылку на элемент div
            const textDiv = document.getElementById("textDiv");
            // Изменяем цвет текста на красный
            textDiv.style.color = "red";
        }