//события для ие 6-7-8

// 1. события нужно подключать не через  buttons[i].addEventListener("click", "myfunction", false);
// a вот так
buttons[i].attachEvent("click", "myfunction", false);
//2.

//вместо e.preventDefault; // отменяет событие по умолчанию

e.returnValue = false;

// 3. не работает this

var elem = e.srcElement; // он вернет элемент на который произошло событие

// 4. события click в ие называется onclick

// отключение события
buttons[i].detachEvent("click", "myfunction", false);
		