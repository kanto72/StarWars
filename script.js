/*Блок меняет цвет с бордером при наведении*/
/*Первый блок*/
let stpbl1 = document.getElementById("stepbl1");
let stpbrdr1 = document.getElementById("stepbrdr1")

/*Второй блок*/
let stpbl2 = document.getElementById("stepbl2");
let stpbrdr2 = document.getElementById("stepbrdr2")

/*Третий блок*/
let stpbl3 = document.getElementById("stepbl3");
let stpbrdr3 = document.getElementById("stepbrdr3")

/*Функция для действия для блока Первый*/
/*Событие когда над элементом курсор*/
stpbl1.onmouseover = function() {
    stpbrdr1.style.borderBottom = "3px solid white"
}
/*Событие когда курсор уходит от элемента*/
stpbl1.onmouseout = function() {
    stpbrdr1.style.borderBottom = "3px solid black"
}

/*Функция для действия для блока Второй*/
/*Событие когда над элементом курсор*/
stpbl2.onmouseover = function() {
    stpbrdr2.style.borderBottom = "3px solid white"
}
/*Событие когда курсор уходит от элемента*/
stpbl2.onmouseout = function() {
    stpbrdr2.style.borderBottom = "3px solid black"
}

/*Функция для действия для блока Третий*/
/*Событие когда над элементом курсор*/
stpbl3.onmouseover = function() {
    stpbrdr3.style.borderBottom = "3px solid white"
}
/*Событие когда курсор уходит от элемента*/
stpbl3.onmouseout = function() {
    stpbrdr3.style.borderBottom = "3px solid black"
}
