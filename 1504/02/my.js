/*

Написать калькулятор квадратного уравнения (дискрименант и корни)
пользователь вводит три переменных   a, b , c
и ему выводится ответ в x1 и  x2  в любом виде.

*/
 document.getElementById("myBtn1").addEventListener('click', calculate);
 
 function calculate() {
            let a = parseFloat(document.getElementById("a").value);
            let b = parseFloat(document.getElementById("b").value);
            let c = parseFloat(document.getElementById("c").value);

            let discriminant = b * b - 4 * a * c;
            let resultElement = document.getElementById("result");

            if (discriminant > 0) {
                let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
                let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
                resultElement.innerHTML = "Уравнение имеет два корня:<br>x1 = " + x1 + "<br>x2 = " + x2;
            } else if (discriminant === 0) {
                let x = -b / (2 * a);
                resultElement.innerHTML = "Уравнение имеет один корень:<br>x = " + x;
            } else {
                resultElement.innerHTML = "Уравнение не имеет действительных корней.";
            }
        }
		
		