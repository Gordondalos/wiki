
(function(){


document.getElementsByTagName("p");
document.getElementById("one");
document.getElementsByClassName("two"); // Работает быстрее


document.querySelector("p"); // выведет только первый найденый p
document.querySelectorAll("p"); // выведет все p


document.querySelectorAll("div p"); // выведет все p вложенные в дивы тоесть вложенные

document.querySelector("#one"); // выведет по айдишнику


// свойства узлов

element.tagName
element.parentNode
element.previousSibling; // предыдущий родственник - это обычно текстовые пробелы
element.nextSibling; // следующий родственник - это обычно текстовые пробелы

// если сделать так
element.previousSibling.previousSibling; // то как раз будет тот родственник который нужно

element.nodeName ; тоже возвращает имя узлов
// но

element.previousSibling.nodeName ; // но этот еще в отличие от такг нейма работает с узлами, а таг нейм только с реальными элементами


element.nodeType; // это вернет 1 если это например параграф или 3 если это узел пустой
element.previousSibling.nodeType;

//использовать так

if(element.nodeType===1){
	console.log("Это узел элемента");
}

if(element.nodeType===3){
	console.log("Это текстовый узел");
}


element.childNodes; // это дочерние узлы
element.children; // это дочерние только то что надо без узлоывв
element.lastChild; // обычно выведет узлы
element.firstChild; // обычно выведет узлы

document.querySelector("div").innerHTML ; // вывдедет все содержимое этого дива включая теги


















})