(function(){
	var el = getElementById('box);
	
	
	// ������ ���, ������ ������ � ������ �� �����, ��� ������ �� ����
	el.onclick(function(){
		
	});
	
	el.onclick = function(){
		this.style.backgroundColor = "red";
		
	};
		
	/* ������ ������� �������� ���
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
	
	
	// ���������� ������
	
	
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
		// ��� ����� �� ���� ������� ������� ��� �������
	
		buttons[i].addEventListener("click", "myfunction", false) ; // � ��� ������� �������� ��� ��������� - �������, �������� �������, ��� (����) �������� ����������� ������ �� ������ �������� � ��� �� ������ �������
		buttons[i].addEventListener("click", "seyHi", false) ; // � ��� ������� �������� ��� ��������� - �������, �������� �������, ��� (����) �������� ����������� ������ �� ������ �������� � ��� �� ������ �������
	
		// ��������� ����������
		
		buttons[i].removeEventListener("click", "seyHi", false); // ���������� ������� ���� ��������� ��� � ��� ���������
	}
	
	
	// ��������������� ��� ���������� ������� �� ���������� ��������� � ������������� ������� ��������� �� �������
	// � ��� ������ ����� ��� evt, e, ��� event
	
	var myfunction = function(e){
		e.type; // ������ ��� ������� �������� ���� ��� �����
		e.target; // ������ ������������� ������� �� ���� ��� ������� �� �������� ��������� ������� ������ �� ������ ����
		e.curenttarget; // �thytn ������� �� ������� ����� ������� �������� �� �������� �� ����� � �������� �� � �� ������ �� ����� � � ���������� "a"
		e.this; // ���� ����� ��� � curenttarget ��� target � ����������� �� �������
		
		e.preventDefault; // �������� ������� �� ���������
		
		
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