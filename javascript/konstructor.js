var Person, person, anotheperson

// ������������ �������� � ������� �����

Person = function(name){

this.name = name;
}


person = new Person("jack");
console.log(person.name);


�� ����� ������ ������ �� ���������
� ����� ��� �� ����� �������� ���������� ������������ ��������

Person.prototype.greet = function(){
console.log("Hello, my name is "+ this.name);
}


��� ���� ����� ��������� �������� ������ ������ ��� ��������� �������� ������ ������ ������������:

console.log(anothePerson instanceof Person);



����� toString() � ������� ���������� �� �������� ���