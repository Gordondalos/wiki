(function(){

//


	var delay = 10,
	i	= 0;

var startTimer = function(){
	
	// выберем элемент для анимации
	var element = document.getElementById("circle");
	bottom = element.offsetTop; // получим растояние сверху

i++
	if(i<10){
		SetTimeout(startTimer, delay);
		
		element.style.top = bottom + 20 + "px";
	}


};


var timer = setTimeout(startTimer, delay); // сработает через 3 секунды

//clearTimeout(timer); // так таймер не будет работать так как его очистил клеар таймаут


	

	
	
	


})();