// Вхідні дані
const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана",],
      themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних",],
      marks = [4, 5, 5, 3, 4, 5,];


// Хлопчик, дівчинка
const first = (stud) => {
    const boyAndGirl = new Array(new Array(), new Array(), new Array(),);
    boyAndGirl[0].splice(0, 0, stud[0], stud[2]);
    boyAndGirl[1].splice(0, 0, stud[1], stud[3]);
    boyAndGirl[2].splice(0, 0, stud[4], stud[5]);
    return boyAndGirl;
}

// Теми та студенти
const second = (boyGirl, themes) => {
    const themsAndStudents = [[], [], [],];
    for (let i=0; i<themsAndStudents.length; i++){
        themsAndStudents[i].push(boyGirl[i][0]);
        themsAndStudents[i].push(boyGirl[i][1]);
        themsAndStudents[i].push(themes[i]);
    }
    return themsAndStudents;
}

// Оцінки студентів
const third = (stud, marks) => {
    const marksStud = [];
    for (let i=0; i<stud.length; i++)
        marksStud[i] = new Array();

    for (let i=0; i<stud.length; i++) {
        marksStud[i].push(marks[i]);
        marksStud[i].unshift(stud[i]);
    }
    return marksStud;
}

// Рандомна оцінка за тему
const fourth = (themStudents) => {
    const marksTheme = themStudents;
    for (let i=0; i<marksTheme.length; i++) {
        marksTheme[i].push(Math.round(Math.random()*(5-1)+1))
    }
    return marksTheme;
}

const addBr = (array) => {  // в масив після кожного елементу додаємо <br/>, для читабельності
    for(let i=0; i<array.length; i++)
        array[i].push('<br/>');
    return array;
}

// Значення функцій записуєм в змінні для зручності
const firstStr = addBr(first(students)).join(' '),  // додаємо <br/> і перетворюємо масив в строку
      secondStr = addBr(second(first(students),themes)).join(' '),
      thirdStr = addBr(third(students, marks)).join(' '),
      fourthStr = addBr(fourth(second(first(students),themes))).join(' ');

document.writeln('<b>Хлопчик, дівчинка</b><br/>');
document.writeln(firstStr);
document.writeln('<br/><b>Теми та студенти</b><br/>');
document.writeln(secondStr);
document.writeln('<br/><b>Оцінки студентів</b><br/>');
document.writeln(thirdStr);
document.writeln('<br/><b>Рандомна оцінка за тему</b><br/>');
document.writeln(fourthStr);