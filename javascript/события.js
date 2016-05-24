(function(){
	var el = getElementById('box);
	
	
	// старый код, старый способ и скорее не профи, так делать не надо
	el.onclick(function(){
		
	});
	
	el.onclick = function(){
		this.style.backgroundColor = "red";
		
	};
		
	/* список событий смотрите тут
	http://vvz.nw.ru/Lessons/JavaScript/events.htm */
		
	var buttons = getElementByTagName('button);
	
	
	for(var i=0, len = buttons.length; i<len; i++){
		buttons[i].onclick = function(){
			if(this.id === 'day'){
				document.body.className = "day";
				
			}else if(this.id === 'nigth'){
				document.body.className = "nigth";
				
			}
		}
		
		
	}
	
	
	// нормальный способ
	
	
	var myfunction = function(){
		for(var i=0, len = buttons.length; i<len; i++){
			buttons[i].onclick = function(){
			if(this.id === 'day'){
				document.body.className = "day";
				
			}else if(this.id === 'nigth'){
				document.body.className = "nigth";
				
			}
		}
		}
	}
	
	var seyHi = function(){
		
		alert("hi");
	}
	
	
	for(var i=0, len = buttons.length; i<len; i++){
		// так можно на одно событие повесть две функции
	
		buttons[i].addEventListener("click", "myfunction", false) ; // в эту функцию передаем три параметра - событие, название функции, тру (фолс) означает существлять захват на стадии всплытия а тру на стадии захвата
		buttons[i].addEventListener("click", "seyHi", false) ; // в эту функцию передаем три параметра - событие, название функции, тру (фолс) означает существлять захват на стадии всплытия а тру на стадии захвата
	
		// отключить обработчик
		
		buttons[i].removeEventListener("click", "seyHi", false); // отключение события теже параметры что и при включнеии
	}
	
	
	// непосредственно сам обработчик событий он передается автоматом в колбекфункцию которая случается по событию
	// и его обычно пишут как evt, e, или event
	
	var myfunction = function(e){
		e.type; // вернет тип мобытия например клик или ховер
		e.target; // вернет инициализатор события то есть тот элемент по которому проихошло событие смотри на строку ниже
		e.curenttarget; // вthytn элемент на котором висит событие например мы повесили на лишку а кликнули по а но вернет ся лишка а в предыдущем "a"
		e.this; // тоже самое что и curenttarget или target в зависимости от конента
		
		e.preventDefault; // отменяет событие по умолчанию
		
		
		for(var i=0, len = buttons.length; i<len; i++){
			buttons[i].onclick = function(){
			if(this.id === 'day'){
				document.body.className = "day";
				
			}else if(this.id === 'nigth'){
				document.body.className = "nigth";
				
			}
		}
		}
	}
	
	
	
	 
	
})();