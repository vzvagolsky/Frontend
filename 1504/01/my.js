/*

Задача1:
создать форму состоящую из логин, пароль и повторите пароль и кнопки отправить
при нажатии на кнопку отправить производится праверка - если пароль и 
повторите пароль совпадают - тогда пользователю выводится сообщение: данные отправлены
иначе выводится сообщение пароль и повторите пароль не совпадают.

*/
 document.getElementById("myBtn1").addEventListener('click', validateForm);
 
 function validateForm() {
            let password = document.getElementById("password").value;
            let confirmPassword = document.getElementById("confirmPassword").value;
            let messageElement = document.getElementById("message");

            if (password === confirmPassword) {
                messageElement.textContent = "Данные отправлены";
            } else {
                messageElement.textContent = "Пароль и повторите пароль не совпадают.";
            }
        }
		
		
		