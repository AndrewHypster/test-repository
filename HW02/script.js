while (true) {
    let N = prompt('Введіть число більше 0:', '');
    let M = prompt('Введіть знову число більше 0:', '');
    const isTrue = confirm('Пропускати парні числа?');

    if(N > M)                // Якщо першим було більше число
        [N, M] = [M, N];    // N i M міняєм місцями

    if((+N) && (+M)) {                 // користувач ввів нормальні значення
        if((+N)%1==0 && (+M)%1==0){   // користувач ввів ціле число
            let sum = 0;             // відповідь
            for(N; N <= M; N++){    // цикл додавання
                if(isTrue && N%2==0){
                    continue;
                }
                sum += +N;  // перетворюємо N в число і додаємо до sum
            }
            document.writeln(`<h2>${sum}</h2>`);
            break;  // закінчення роботи програми
        } else {
            alert('Введіть цілі числа!!!');
            continue;   // вертає на 1 строку коду
        }
    } else {
        alert('Введіть нормальні числа!!!');
        continue;   // вертає на 1 строку коду
    }
}
