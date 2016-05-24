// кросбраузерные события

// 1. делаем обьект


var eventObj = {
	addEvent: function(el,type,fn){ // элемент, событие, функция
		if(typeof addEventListener !== "undefined"){
			el.addEventListener(type,fn,false);
		}else if (typeof attachEvent !== "undefined"){
			el.attachEvent(type, fn);
		}else {
			el['on'+type] = fn;
		}
	},
	
	getTarget: function(event){
		if(typeof event.target !== "undefined"){
			return event.target;
			
		}else {
			return event.srcElement;
		}
	},
	prevetnDefault : function(event){
		if(typeof event.prevetnDefault !== "undefined"){
			event.prevetnDefault();
		}else{
			event.returnValue = false;
		}
	},
	removeEvent: function(el,type,fn){
		if(typeof removeEventListener !== "undefined"){
			el.removeEventListener(type,fn,false);
		}else if (typeof detachEvent !== "undefined"){
			el.detachEvent(type, fn);
		}else {
			el['on'+type] = null;
		}
	}
	
}

//2. пишем кросбраузерно

(function(){
	var button = document.getElementByTagName("button");
	var changeColor = function(e){
		eventObj.prevetnDefault(e);
		var elem =eventObj.getTarget(e);
		if(elem.id === "day"){
			document.body.className="day";
		}else if(elem.id==="nigth"){
			document.body.className = "nigth";
		}
	};
	
	for(var i=0, len = buttons.length; i<len; i++){
		eventObj.addEvent(buttons[i], "click", changeColor);
	}
	
	
	
})();


