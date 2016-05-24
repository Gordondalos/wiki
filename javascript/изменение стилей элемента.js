(function(){
	
	// 1. выберем элемент
	
	var mydiv = document.getElementById("foo");
	
	// 2. изменяем стили
	
	// так работает но делать не надо
	var style = mydiv.style // выберем свойста
	style.color = "red";	// изменим цвет
	style.backgroundColor = "grey" // двойные пишутся через камлКейс
	style.padding = "20px";
	
	// нужно делать так
	
	// 1. нужно сделать ксс класс
	//и добавить его так
	
	mydiv.className = "myNewClass";
	
	//чтобы убрать класс его нужно перетереть на пустую строку
	mydiv.className = "";
	
	// также можно его переписать другими классами так
		mydiv.className = mydiv.className.replace(" myNewClass ", " myOldClass ");
		
	// еще один способ
	mydiv.classList.add("myNewClass");
	mydiv.classList.add("myOldClass");
	
	mydiv.classList.remove("myOldClass"); // удаляет
	
	mydiv.classList.toggle("myOldClass"); // тогл удаляет если класс есть и добавляет если класса нет
	
	// получение атрибутов элемента

	element.getAttribute("class"); // или любой другой атрибут

	element.setAttribute("class","myclass");
	
	
	
})();