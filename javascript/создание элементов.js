(function(){
	var element = document.createElement("p"); // создать элемент
	var content = document.createTextNode("Тут пишем динамический текст"); // создаст текстовый узел
	
	
	//также можно вставить свойство
	element.innerHTML = Тут <span class="two"> пишем динамический  <span> текст
	
	
	element.appendChild(content); // то есть так мы запихали текст в данный параграф
	
	
	// выбираем элемент в который	хотим вставлять
	
	var = divinsert =  document.getElementsByClassName(".wrapper");
	// вставляем
	divinsert.appendChild(element);
	
	//или можно так вставлять через родителя
	var paragraf = document.getElementsByClassName(".wrapper");
	paragraf.parentNode.appendChild(element);
	
	//или так 
	paragraf.parentNode.insertBefore("element , divinsert"); // insertBefore("тот элемент в который мы вставляем, тот элемент перед которым мы всатвляем");
	
	// заменить
	
	paragraf.parentNode.replaceChild("element , divinsert");  // чем заменить, что заменить
	
	
	//установка атрибутов
	
	paragraf.setAttribute("id", "one");  // название атрибутов потом их значение
	
	//или так
	element.id = "one";
	
	// удаление элементов
	
	//нужно работать через родительский узел
	
	element.parentNode.removeChild("one");
	
	
				
		// важно кешировать элементы например document вот так
		
		var doc = document; // затем использовать этот doc везде где вздумается
	
})();