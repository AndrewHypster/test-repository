// Запис чисел
let N = prompt('Введіть число більше 0:', '');
let M = prompt('Введіть число більше за попереднє:', '');
const isTrue = confirm('Пропускати парні числа?');

if((+N) && (+M)) {            // користувач ввів нормальні значення
    let sum = 0;             // відповідь
    for(N; N <= M; N++){    // цикл додавання
        if(isTrue && N%2==0){
            continue;
        }
        sum += +N;  // перетворюємо N в число і додаємо до sum
    }
    document.writeln(`<h2>${sum}</h2>`);
} else document.writeln(`<h2>Введіть нормальні числа!!!</h2>`);