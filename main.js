let op;

function sel_ligth(sel_id) {
    document.getElementById("plus").classList.remove("light");
    document.getElementById("minus").classList.remove("light");
    document.getElementById("times").classList.remove("light");
    document.getElementById("divide").classList.remove("light");

    document.getElementById(sel_id).classList.add("light");

    switch (sel_id) {
        case "plus":
            op = "+"
            break;
        case 'minus':
            op = '-'
            break;
        case 'times':
            op = "*"
            break;
        case 'divide':
            op = "/"
            break;
    }
}

document.getElementById('num2').addEventListener('keydown', function (e) {
    if (e.keyCode === 13)
        func();
});

function func() {
    let result;

    let num1_str = String(document.getElementById("num1").value);
    let num2_str = String(document.getElementById("num2").value);

    if ((num1_str.length == 0) || (num1_str.indexOf(' ') != -1)) {
        document.getElementById("result").innerHTML = 'Вы не ввели первое число или добавили пробел в поле ввода';
        return;
    }

    if ((num2_str.length == 0) || (num2_str.indexOf('') != -1)) {
        document.getElementById("result").innerHTML = 'Вы не ввели второе число или добавили пробел в поле ввода';
        return;
    }

    if ((num2 == 0) && (op == '/')) {
        document.getElementById("result").innerHTML = 'На ноль делить нельзя';
        return;
    }

    if ((num1 > 99999999) || (num2 > 99999999)) {
        document.getElementById("result").innerHTML = 'Калькулятор может работать с числами не больше 99 999 999';
        return;
    }

    let num1 = Number(num1_str);
    let num2 = Number(num2_str);

    if (isNaN(num1)) {
        document.getElementById("result").innerHTML = 'Калькулятор не может распознать первое число. Проверьте его, пожалуйста';
        return;
    }

    if (isNaN(num2)) {
        document.getElementById("result").innerHTML = 'Калькулятор не может распознать второе число. Проверьте его, пожалуйста';
        return;
    }

    switch (op) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default: result = 'Выберите действие';
    }

    document.getElementById('result').innerHTML = result;
}
