(function(){
	var element = document.createElement("p"); // ������� �������
	var content = document.createTextNode("��� ����� ������������ �����"); // ������� ��������� ����
	
	
	//����� ����� �������� ��������
	element.innerHTML = ��� <span class="two"> ����� ������������  <span> �����
	
	
	element.appendChild(content); // �� ���� ��� �� �������� ����� � ������ ��������
	
	
	// �������� ������� � �������	����� ���������
	
	var = divinsert =  document.getElementsByClassName(".wrapper");
	// ���������
	divinsert.appendChild(element);
	
	//��� ����� ��� ��������� ����� ��������
	var paragraf = document.getElementsByClassName(".wrapper");
	paragraf.parentNode.appendChild(element);
	
	//��� ��� 
	paragraf.parentNode.insertBefore("element , divinsert"); // insertBefore("��� ������� � ������� �� ���������, ��� ������� ����� ������� �� ���������");
	
	// ��������
	
	paragraf.parentNode.replaceChild("element , divinsert");  // ��� ��������, ��� ��������
	
	
	//��������� ���������
	
	paragraf.setAttribute("id", "one");  // �������� ��������� ����� �� ��������
	
	//��� ���
	element.id = "one";
	
	// �������� ���������
	
	//����� �������� ����� ������������ ����
	
	element.parentNode.removeChild("one");
	
	
				
		// ����� ���������� �������� �������� document ��� ���
		
		var doc = document; // ����� ������������ ���� doc ����� ��� ����������
	
})();