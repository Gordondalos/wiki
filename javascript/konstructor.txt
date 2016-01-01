var Person, person, anotheperson

// конструкторы называют с большой буквы

Person = function(name){

this.name = name;
}


person = new Person("jack");
console.log(person.name);


но любой обьект сделан из прототипа
и задав его мы можем свойства передавать генерируемым обьектам

Person.prototype.greet = function(){
console.log("Hello, my name is "+ this.name);
}


дл€ того чтобы проверить обьектом какого класса или прототипа €вл€етс€ данный обьект используетс€:

console.log(anothePerson instanceof Person);



метод toString() у функции возвращает ее исходный код