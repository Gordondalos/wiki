(function(){
	
	// 1. ������� �������
	
	var mydiv = document.getElementById("foo");
	
	// 2. �������� �����
	
	// ��� �������� �� ������ �� ����
	var style = mydiv.style // ������� �������
	style.color = "red";	// ������� ����
	style.backgroundColor = "grey" // ������� ������� ����� ��������
	style.padding = "20px";
	
	// ����� ������ ���
	
	// 1. ����� ������� ��� �����
	//� �������� ��� ���
	
	mydiv.className = "myNewClass";
	
	//����� ������ ����� ��� ����� ���������� �� ������ ������
	mydiv.className = "";
	
	// ����� ����� ��� ���������� ������� �������� ���
		mydiv.className = mydiv.className.replace(" myNewClass ", " myOldClass ");
		
	// ��� ���� ������
	mydiv.classList.add("myNewClass");
	mydiv.classList.add("myOldClass");
	
	mydiv.classList.remove("myOldClass"); // �������
	
	mydiv.classList.toggle("myOldClass"); // ���� ������� ���� ����� ���� � ��������� ���� ������ ���
	
	// ��������� ��������� ��������

	element.getAttribute("class"); // ��� ����� ������ �������

	element.setAttribute("class","myclass");
	
	
	
})();